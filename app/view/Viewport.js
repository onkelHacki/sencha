Ext.define('AppfallEN.view.Viewport', {
	extend: 'Ext.TabPanel',

	config: {
		fullscreen: true,
		tabBarPosition: 'bottom',
		
		items: [
		{
			xtype: 'titlebar',
			docked: 'top',
			title: 'AppfallEN'
		},
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