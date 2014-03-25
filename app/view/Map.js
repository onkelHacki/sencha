Ext.define('AppfallEN.view.Map', {

	extend: 'Ext.Map',
	xtype: 'mappage',
	
	config: {
		title: 'Anfahrt',
		iconCls: 'maps',
		useCurrentLocation: true,
		autoUpdate: false,
		mapOptions: {
			zoom: 17,
			mapTypeId : google.maps.MapTypeId.HYBRID,
                	navigationControl: true,
                	navigationControlOptions: {
                    		style: google.maps.NavigationControlStyle.DEFAULT
                	}
		}
		
}
});		