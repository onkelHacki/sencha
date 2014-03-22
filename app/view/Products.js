Ext.define('AppfallEN.view.Products', {

	extend: 'Ext.Carousel',
	xtype: 'productspage',

	config: {
		title: 'Products',
		iconCls: 'star',
		items: [
		{
			xtype: 'image',
			src: '320x460.jpg'
		},
		{
			xtype: 'image',
			src: '640x920.png'
		},
		{
			xtype: 'image',
			src: '748x1024.png'
		}
		]
}
});			