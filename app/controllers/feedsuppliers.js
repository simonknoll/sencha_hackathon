Ext.regController("feedsuppliers", {


  add: function(){
    console.log("opening form for adding feedsupplier");
    var form = this.render({
            xtype: 'feedsupplier-form',
            listeners: {
                deactivate: function(details) {
                    form.destroy();
                }
            }
        });
  }

});