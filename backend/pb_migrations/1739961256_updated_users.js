/// <reference path="../pb_data/types.d.ts" />
migrate(
	(app) => {
		const collection = app.findCollectionByNameOrId('_pb_users_auth_');

		// update field
		collection.fields.addAt(
			17,
			new Field({
				hidden: false,
				id: 'select1466534506',
				maxSelect: 1,
				name: 'role',
				presentable: false,
				required: false,
				system: false,
				type: 'select',
				values: ['admin', 'staff', 'student', 'employee', 'parent']
			})
		);

		return app.save(collection);
	},
	(app) => {
		const collection = app.findCollectionByNameOrId('_pb_users_auth_');

		// update field
		collection.fields.addAt(
			17,
			new Field({
				hidden: false,
				id: 'select1466534506',
				maxSelect: 1,
				name: 'role',
				presentable: false,
				required: false,
				system: false,
				type: 'select',
				values: ['staff', 'student', 'employee', 'parent']
			})
		);

		return app.save(collection);
	}
);
