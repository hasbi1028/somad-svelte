/// <reference path="../backend/pb_data/types.d.ts" />
migrate(
	(app) => {
		const collection = app.findCollectionByNameOrId('_pb_users_auth_');

		// remove field
		collection.fields.removeById('autodate3946532403');

		// add field
		collection.fields.addAt(
			16,
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
		const collection = app.findCollectionByNameOrId('_pb_users_auth_');

		// add field
		collection.fields.addAt(
			16,
			new Field({
				hidden: false,
				id: 'autodate3946532403',
				name: 'deleted',
				onCreate: false,
				onUpdate: true,
				presentable: false,
				system: false,
				type: 'autodate'
			})
		);

		// remove field
		collection.fields.removeById('date3946532403');

		return app.save(collection);
	}
);
