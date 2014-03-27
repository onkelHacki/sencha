Ext.define('AppfallEN.view.Map', {

	extend: 'Ext.Map',
	xtype: 'mappage',
	
	
	requires: ['Ext.util.Geolocation'],
	
	/*var onMapRender = function (touchMap){
		var maps = google.maps,
		map = touchMap.getMap(),
		geo = touchMap.getGeo(),
		lat = geo.getLatitude(),
		lng = geo.getLongitude(),
		coords = new maps.LatLng(lat, lng),
		marker = new maps.Marker({
			position: coords,
			map : map
		}),
		infowindow = new maps.InfoWindow({
			content : 'Sind sind hier!'
		});
		maps.event.addListener(marker, 'click', function(){
			infowindow.open(map, marker);
		});
	};
	new Ext.Map({
		fullscreen: true,
		listeners: {
			maprender: on MapRender,
			single: true,
		}
	});*/
	
	config: {
		title: 'Anfahrt',
		iconCls: 'maps',
		useCurrentLocation: true,
		autoUpdate: false,
		allowHighAccuracy: true,
		
		mapOptions: {
			zoom: 17,
			mapTypeId : google.maps.MapTypeId.HYBRID,
                	navigationControl: true,
                	navigationControlOptions: {
                    		style: google.maps.NavigationControlStyle.DEFAULT
                	}
		},
		items: [
				{
					xtype: 'titlebar',
					docked: 'top',
					title: 'Google Maps'
				}]
		
}
});		