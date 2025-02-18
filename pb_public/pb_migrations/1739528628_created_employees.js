/// <reference path="../backend/pb_data/types.d.ts" />
migrate(
	(app) => {
		const collection = new Collection({
			createRule: null,
			deleteRule: null,
			fields: [
				{
					autogeneratePattern: '[a-z0-9]{15}',
					hidden: false,
					id: 'text3208210256',
					max: 15,
					min: 15,
					name: 'id',
					pattern: '^[a-z0-9]+$',
					presentable: false,
					primaryKey: true,
					required: true,
					system: true,
					type: 'text'
				},
				{
					cascadeDelete: false,
					collectionId: '_pb_users_auth_',
					hidden: false,
					id: 'relation2809058197',
					maxSelect: 1,
					minSelect: 0,
					name: 'user_id',
					presentable: false,
					required: false,
					system: false,
					type: 'relation'
				},
				{
					autogeneratePattern: '',
					hidden: false,
					id: 'text2710031248',
					max: 0,
					min: 0,
					name: 'nipm',
					pattern: '',
					presentable: false,
					primaryKey: false,
					required: false,
					system: false,
					type: 'text'
				},
				{
					hidden: false,
					id: 'autodate2990389176',
					name: 'created',
					onCreate: true,
					onUpdate: false,
					presentable: false,
					system: false,
					type: 'autodate'
				},
				{
					hidden: false,
					id: 'autodate3332085495',
					name: 'updated',
					onCreate: true,
					onUpdate: true,
					presentable: false,
					system: false,
					type: 'autodate'
				}
			],
			id: 'pbc_3735627160',
			indexes: [],
			listRule: null,
			name: 'employees',
			system: false,
			type: 'base',
			updateRule: null,
			viewRule: null
		});

		return app.save(collection);
	},
	(app) => {
		const collection = app.findCollectionByNameOrId('pbc_3735627160');

		return app.delete(collection);
	}
);
