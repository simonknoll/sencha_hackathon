Ext.regController("feedsuppliers", {


  add: function(){
    console.log("opening form for adding feedsupplier");
    var addform = this.render({
            xtype: 'feedsupplier-form',
            listeners: {
                deactivate: function(addform) {
                    addform.destroy();
                }
            }
        });
        
        this.application.viewport.setActiveItem(addform, {
            type: 'slide',
            direction: 'left'
        });
  }

});