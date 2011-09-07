/**
 * @class Contacts.views.ContactDetails
 * @extends Ext.Panel
 * A Panel showing the details of a contact.
 */
Hackaton.views.FeedSupplierForm = Ext.extend(Ext.Panel, {
    initComponent : function() {
        this.dockedItems = {
            dock: 'top',
            xtype: 'toolbar',
            title: 'Add a FeedSupplier',
            items: {
                text: 'Back',
                ui: 'back',
                itemId: 'backButton',
                handler: function(){
                  console.log("going back");
                  Ext.dispatch({
                    controller: 'newsfeeds',
                    action: 'list'
                  });
                }
            }            
        };
        
        Hackaton.views.FeedSupplierForm.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg('feedsupplier-form', Hackaton.views.FeedSupplierForm);
