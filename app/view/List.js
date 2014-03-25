Ext.define('AppfallEN.view.List', {
	
	extend: 'Ext.dataview.List',
	xtype: 'listpage',

	config: {
		title: 'Abfall ABC',
		iconCls: 'info',
		
		itemTpl: '<b>{first}</b> <br> {text}',
		grouped: true,
		indexBar: true,
		store: Ext.create('Ext.data.Store', {
			fields: [
				{name: 'first', type: 'string'},
				{name: 'text', type: 'string'}
			],
			grouper: {
				groupFn: function(record) {
				return record.get('first').substr(0, 1);},
				sortProperty: 'first'
			},
			data: [
				{first: 'Altöl', text: 'Schadstoffsammlung'},
				{first: 'Altreifen', text: 'Handel'},
				{first: 'Batterien', text: 'Schadstoffsammlung, GRS Sammelstellen'},
				{first: 'Biomüll', text: 'braune Tonne'},
				{first: 'Grünschnitt', text: 'komposthaufen, braune Tonne'},
				{first: 'Windeln', text: 'Restmüll'},
				{first: 'Kühlschrank', text: 'Wertstoffhof, Umladeanlage Witten/Gevelsberg'},
				{first: 'Elektrogeräte', text: 'Wertstoffhof, Umladeanlage Witten/Gevelsberg'},
				{first: 'Flaschen', text: 'Glascontainer'},
			]
			})
		
	
	}

});