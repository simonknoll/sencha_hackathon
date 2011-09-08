Ext.regController("newsfeeds", {
  
     show: function(list, record) {
        var details = this.render({
            xtype: 'newsfeed-show',
            data: record.data,
            listeners: {
                deactivate: function(details) {
                    details.destroy();
                }
            }
      });
        
        this.application.viewport.setActiveItem(details, {
            type: 'slide',
            direction: 'left'
        });
    },
    
    list: function() {
		if (!this.listPanel) {
            this.listPanel = this.render({
                xtype: 'newsfeed-listpanel',
                listeners: {
                    list: {
                        select: this.show,
                        scope: this
                    },
                    activate : function(listPanel) {
                        listPanel.list.getSelectionModel().deselectAll();
                    }
                }
            });
                        
            this.application.viewport.setActiveItem(this.listPanel);       
        }
        else {
            this.listPanel.store.sort();
            
            this.application.viewport.setActiveItem(this.listPanel, {
                type: 'slide',
                direction: 'right'
            });            
        }
	}
	  
});

