Ext.define('AppfallEN.view.List', {
	
	extend: 'Ext.dataview.List',
	xtype: 'listpage',

	config: {
		title: 'List',
		iconCls: 'info',
		
		itemTpl: '{last}, {first}',
		grouped: true,
		indexBar: true,
		store: Ext.create('Ext.data.Store', {
			fields: [
				{name: 'first', type: 'string'},
				{name: 'last', type: 'string'}
			],
			grouper: {
				groupFn: function(record) {
				return record.get('last').substr(0, 1);},
				sortProperty: 'last'
			},
			data: [
				{first: 'Aaron', last: 'Karp'},
				{first: 'Baron', last: 'Chandler'},
				{first: 'Bryan', last: 'Johnson'},
				{first: 'David', last: 'Evans'},
				{first: 'John', last: 'Clark'},
				{first: 'John', last: 'Taylor'},
				{first: 'Hanna', last: 'Wehmeyer'},
				{first: 'Aaron', last: 'Karp'},
				{first: 'Baron', last: 'Chandler'},
				{first: 'Bryan', last: 'Johnson'},
				{first: 'David', last: 'Evans'},
				{first: 'John', last: 'Clark'},
				{first: 'John', last: 'Taylor'},
				{first: 'Hanna', last: 'Wehmeyer'},{first: 'Aaron', last: 'Karp'},
				{first: 'Baron', last: 'Chandler'},
				{first: 'Bryan', last: 'Johnson'},
				{first: 'David', last: 'Evans'},
				{first: 'John', last: 'Clark'},
				{first: 'John', last: 'Taylor'},
				{first: 'Hanna', last: 'Wehmeyer'}
			]
			})
		
	
	}

});