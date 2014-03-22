Ext.define('AppfallEN.view.Map', {

	extend: 'Ext.Map',
	xtype: 'mappage',

	config: {
		title: 'Map',
		iconCls: 'maps',
		useCurrentLocation: true,
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