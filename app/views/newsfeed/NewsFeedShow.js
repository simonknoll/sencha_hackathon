/**
 * @class Contacts.views.ContactDetails
 * @extends Ext.Panel
 * A Panel showing the details of a contact.
 */
Hackaton.views.NewsFeedShow = Ext.extend(Ext.Panel, {
    tpl: '{content}',
    styleHtmlContent: true,
    initComponent : function() {
        this.dockedItems = {
            dock: 'top',
            xtype: 'toolbar',
            title: 'NewsEntry',
            items: {
                text: 'Back',
                ui: 'back',
                itemId: 'backButton'
            }            
        };
        
        Hackaton.views.NewsFeedShow.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg('newsfeed-show', Hackaton.views.NewsFeedShow);
