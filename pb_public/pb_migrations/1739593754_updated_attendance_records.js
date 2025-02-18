/// <reference path="../backend/pb_data/types.d.ts" />
migrate(
	(app) => {
		const collection = app.findCollectionByNameOrId('pbc_1822076064');

		// remove field
		collection.fields.removeById('relation2349068636');

		// add field
		collection.fields.addAt(
			1,
			new Field({
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
			})
		);

		// add field
		collection.fields.addAt(
			7,
			new Field({
				hidden: false,
				id: 'date3946532403',
				max: '',
				min: '',
				name: 'deleted',
				presentable: false,
				required: false,
				system: false,
				type: 'date'
			})
		);

		return app.save(collection);
	},
	(app) => {
		const collection = app.findCollectionByNameOrId('pbc_1822076064');

		// add field
		collection.fields.addAt(
			1,
			new Field({
				cascadeDelete: false,
				collectionId: 'pbc_3735627160',
				hidden: false,
				id: 'relation2349068636',
				maxSelect: 1,
				minSelect: 0,
				name: 'employee_id',
				presentable: false,
				required: false,
				system: false,
				type: 'relation'
			})
		);

		// remove field
		collection.fields.removeById('relation2809058197');

		// remove field
		collection.fields.removeById('date3946532403');

		return app.save(collection);
	}
);
