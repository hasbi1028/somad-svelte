/// <reference path="../backend/pb_data/types.d.ts" />
migrate(
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

		return app.save(collection);
	},
	(app) => {
		const collection = app.findCollectionByNameOrId('_pb_users_auth_');

		// remove field
		collection.fields.removeById('autodate3946532403');

		return app.save(collection);
	}
);
