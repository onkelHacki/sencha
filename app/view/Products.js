Ext.define('AppfallEN.view.Products', {

	extend: 'Ext.Carousel',
	xtype: 'productspage',

	config: {
		title: 'Go Bio!',
		iconCls: 'star',
		items: [
		{
			xtype: 'titlebar',
			docked: 'top',
			title: 'Go Bio!'
		},
		{
			xtype: 'image',
			src: 'http://www.stromtonne.de/_image/Tausch.jpg'
		},
		{
			xtype: 'image',
			src: 'http://www.stromtonne.de/_image/gruenerspass.jpg'
		},
		{
			xtype: 'image',
			src: 'http://www.stromtonne.de/loads/Informationsblatt_Tausch_deinen_Alten_aus.pdf'
		}
		]
}
});			