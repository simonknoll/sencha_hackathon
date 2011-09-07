/**
 * @class Hackaton.views.NewsFeedListPanel
 * @extends Ext.Panel
 * The panel containing our newsfeed list.
 */
Hackaton.views.NewsFeedListPanel = Ext.extend(Ext.Panel, {
    layout: 'fit',
    
    initComponent: function() {
        this.store = new Ext.data.Store({
             model : 'NewsFeed',
		  proxy : {
		    type : 'scripttag',
		    url : 'http://ajax.googleapis.com/ajax/services/feed/load?q=http://golem.de.dynamic.feedsportal.com/pf/578068/http://rss.golem.de/rss.php?feed=RSS2.0&v=1.0',
		    reader : {
			 type : 'json',
			 root : 'responseData.feed.entries',
			 totalCount : 'total'
		    }
		  },
		  autoLoad : true
        });
        
        this.dockedItems = [
        {
            xtype: 'toolbar',
            dock: 'top',
            title: 'NewsFeeds',
            items: [
              {xtype: 'spacer'},
              {
                text: 'Add Supplier',
                ui: 'action',
                itemId: 'addButton',
                handler: function(){
                   console.log("you clicked");
                   Ext.dispatch({
                     controller: 'feedsuppliers',
                     action: 'add'
                  });
                }
              }
            ]
        }
    
        ];
        
        this.list = new Ext.List({
            itemTpl: '{title}',
            store: this.store
        });

        this.items = [this.list];
        
        Hackaton.views.NewsFeedListPanel.superclass.initComponent.apply(this, arguments);
    } 
});

Ext.reg('newsfeed-listpanel', Hackaton.views.NewsFeedListPanel);
