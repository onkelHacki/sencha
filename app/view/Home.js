Ext.define('AppfallEN.view.Home', {
	
	extend: 'Ext.Panel',
	xtype: 'homepanel',
	
	config: {
		title: 'Home',
		iconCls: 'home',
		scrollable: 'vertical',
		cls: 'home',
		html: [
			'<img src="http://staging.sencha.com/img/sencha.png"/>',
			'<h1>Willkommen bei AppfallEN</h1>',
			'<p>Hier erhalten Sie vielfältige Informationen.</p>',
			'<h2>Diese App wurde mit <b>Sencha Touch</b> erstellt.</h2>',
			'<h2>&copy; André Hackelbusch</h2>'
		].join('')

	}
});