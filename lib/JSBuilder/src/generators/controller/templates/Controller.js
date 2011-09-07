Ext.regController("{name}", {
    <tpl for="actions">{.}: function() {
		
	}{[xindex != xcount ? ",\n\n" : ""]}
	</tpl>  
});
