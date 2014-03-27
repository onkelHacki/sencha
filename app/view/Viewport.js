Ext.define('AppfallEN.view.Viewport', {
	extend: 'Ext.TabPanel',

	config: {
		fullscreen: true,
		tabBarPosition: 'bottom',
		
		items: [
		{
			xtype: 'homepanel'			
		},
		{
			xtype: 'productspage'
		},
		{
			xtype: 'mappage'
		},
		{
			xtype: 'listpage'
		}
		]
	}


});