Ext.regModel("{name}", {
    fields: [
    <tpl for="fields">{name: "{name}", type: "{type}"}{[xindex != xcount ? "," : ""]}
    </tpl>
    ]
});