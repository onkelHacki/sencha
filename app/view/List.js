Ext.define('AppfallEN.view.List', {
	
	extend: 'Ext.dataview.List',
	xtype: 'listpage',

	config: {
		title: 'Abfall ABC',
		iconCls: 'info',
		cls: 'list',
		items: [
				{
					xtype: 'titlebar',
					docked: 'top',
					title: 'Abfall ABC'
				}],
		
		itemTpl: '<b>{first}</b> <br> <p>{text}</p>',
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
				{first: 'Altkleider', text: 'Sammelcontainer'},
				{first: 'Altpapier', text: 'blaue Tonne, Depotcontainer'},
				{first: 'Batterien', text: 'Schadstoffsammlung, GRS Sammelstellen'},
				{first: 'Biomüll', text: 'braune Tonne'},
				{first: 'Baumischabfälle', text: 'Wertstoffhof, Umladeanalge Witten/Gevelsberg'},
				{first: 'CDs', text: 'Wertstoffhof, Umladeanlage Witten/Gevelsberg'},
				{first: 'Computer', text: 'Wertstoffhof, Umladeanlage Witten/Gevelsberg'},
				{first: 'Dämmaterial', text: 'Wertstoffhof, Umladeanalge Witten/Gevelsberg'},
				{first: 'Damenbinden', text: 'graue Tonne'},
				{first: 'Dispersionsfarben', text: 'Schadstoffsammlung'},
				{first: 'Elektrogeräte', text: 'Wertstoffhof, Umladeanalage Witten/Gevelsberg'},
				{first: 'Fensterglas', text: 'Sperrmüll'},
				{first: 'Biomüll', text: 'braune Tonne'},
				{first: 'Grünschnitt', text: 'Komposthaufen, braune Tonne'},
				{first: 'Haushaltsreiniger', text: 'Schadstoffsammlung'},
				{first: 'Insektizide', text: 'Schadstoffsammlung'},
				{first: 'Kabelreste', text: 'Sperrmüll, Wertstoffhof, Umladeanlage Witten/Gevelsberg'},
				{first: 'Kaffeesatz', text: 'braune Tonne'},
				{first: 'Lacke', text: 'Schadstoffsammlung'},
				{first: 'Kühlschrank', text: 'Wertstoffhof, Umladeanlage Witten/Gevelsberg'},
				{first: 'Medikamente', text: 'Apotheke'},
				{first: 'Matratzen', text: 'Sperrmüll, Wertstoffhof, Umladeanalage Witten/Gevelsberg'},
				{first: 'Metall', text: 'Sperrmüll, Wertstoffhof, Umladeanlage Witten/Gevelsberg'},
				{first: 'Nachtspeicheröfen', text: 'keine Abgabe beim Ennepe-Ruhr-Kreis möglich'},
				{first: 'Neonröhren', text: 'Wertstoffhof, Umladeanalga Witten/Gevelsberg'},
				{first: 'Obstschalen', text: 'braune Tonne'},
				{first: 'Papierhandtücher', text: 'graue Tonne'},
				{first: 'Parkett', text: 'Wertstoffhof, Umladeanlage Witten/Gevelsberg'},
				{first: 'Quecksilberthermometer', text: 'Schadstoffsammlung'},
				{first: 'Radiatoren', text: 'Wertstoffhof, Umladeanalage Witten/Gevelsberg'},
				{first: 'Schuhe', text: 'Altkleidercontainer'},
				{first: 'Tabletten', text: 'Apotheke'},
				{first: 'Toilettenbecken', text: 'Wertstoffhof, Umladeanlage Witten/Gevelsberg'},
				{first: 'Unkraut', text: 'Komposthaufen, braune Tonne'},
				{first: 'Verpackungen', text: 'gelber Sack'},
				{first: 'Verdünnung', text: 'Schadstoffsammlung'},
				{first: 'Windeln', text: 'graue Tonne'},
				{first: 'Zigarettenkippen', text: 'graue Tonne'},
				{first: 'Zement', text: 'Wertstoffhof, Umladeanlage Witten/Gevelsberg'}
			]
			})
		
	
	}

});