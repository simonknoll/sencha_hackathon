/**
 * This file sets application-wide settings and launches the application when everything has
 * been loaded onto the page. By default we just render the applications Viewport inside the
 * launch method (see app/views/Viewport.js).
 */ 
Ext.regApplication({
    defaultTarget: "viewport",
    defaultUrl: "newsfeeds/list",
    name: "Hackaton",
    useHistory   : true,
    
    launch: function() {
        this.viewport = new Hackaton.Viewport({
        	application: this
        });
    }
});
