/**
 * @class Contacts.views.ContactDetails
 * @extends Ext.Panel
 * A Panel showing the details of a contact.
 */
Hackaton.views.FeedSupplierForm = Ext.extend(Ext.Panel, {
    initComponent : function() {
    
        this.dockedItems = [
        	  {        	  
		       dock: 'top',
		       xtype: 'toolbar',
		       title: 'Add a FeedSupplier',
		       items: [
		    		{
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
		       	},{xtype: "spacer"},
		       	{
		     		text: 'submit',
		     		ui: 'action',
		     		handler: function(){
		     			console.log("sore supplier")
		     		}
		     	}
		       ]            
        	  },
        	  {
        	  	dock: 'bottom',
		     xtype: 'toolbar'
        	  }
        ];
        this.form = new Ext.form.FormPanel({
		    items: [
			   {
				  xtype: 'textfield',
				  name : 'name',
				  label: 'Name'
			   },
			   {
				  xtype: 'urlfield',
				  name : 'url',
				  label: 'Url'
			   }
		    ]
		});
		 this.items = [this.form];
        Hackaton.views.FeedSupplierForm.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg('feedsupplier-form', Hackaton.views.FeedSupplierForm);
