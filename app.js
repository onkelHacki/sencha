Ext.Loader.setConfig({
	enabled: true
});

Ext.application({
	name: 'AppfallEN',
	requires: [
        'Ext.Map',
        'Ext.Panel',
        'Ext.Toolbar',
	'Ext.dataview.List',
	'Ext.TitleBar'
    ],

	controllers: ['Main'],
	views: ['Home', 'Products', 'Map', 'List','Viewport'],
		
	launch: function(){
		Ext.create('AppfallEN.view.Viewport')
}
});