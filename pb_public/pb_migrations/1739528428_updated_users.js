/// <reference path="../backend/pb_data/types.d.ts" />
migrate(
	(app) => {
		const collection = app.findCollectionByNameOrId('_pb_users_auth_');

		// add field
		collection.fields.addAt(
			8,
			new Field({
				autogeneratePattern: '',
				hidden: false,
				id: 'text1329388006',
				max: 0,
				min: 0,
				name: 'birth_place',
				pattern: '',
				presentable: false,
				primaryKey: false,
				required: false,
				system: false,
				type: 'text'
			})
		);

		// add field
		collection.fields.addAt(
			9,
			new Field({
				hidden: false,
				id: 'date3845444698',
				max: '',
				min: '',
				name: 'birth_date',
				presentable: false,
				required: false,
				system: false,
				type: 'date'
			})
		);

		// add field
		collection.fields.addAt(
			10,
			new Field({
				autogeneratePattern: '',
				hidden: false,
				id: 'text3545716486',
				max: 0,
				min: 0,
				name: 'nik',
				pattern: '',
				presentable: false,
				primaryKey: false,
				required: false,
				system: false,
				type: 'text'
			})
		);

		// add field
		collection.fields.addAt(
			11,
			new Field({
				autogeneratePattern: '',
				hidden: false,
				id: 'text1795275867',
				max: 0,
				min: 0,
				name: 'phone_number',
				pattern: '',
				presentable: false,
				primaryKey: false,
				required: false,
				system: false,
				type: 'text'
			})
		);

		// add field
		collection.fields.addAt(
			12,
			new Field({
				autogeneratePattern: '',
				hidden: false,
				id: 'text223244161',
				max: 0,
				min: 0,
				name: 'address',
				pattern: '',
				presentable: false,
				primaryKey: false,
				required: false,
				system: false,
				type: 'text'
			})
		);

		// add field
		collection.fields.addAt(
			13,
			new Field({
				hidden: false,
				id: 'select1466534506',
				maxSelect: 1,
				name: 'role',
				presentable: false,
				required: false,
				system: false,
				type: 'select',
				values: ['admin', 'student', 'employee', 'parent']
			})
		);

		// update field
		collection.fields.addAt(
			6,
			new Field({
				autogeneratePattern: '',
				hidden: false,
				id: 'text1579384326',
				max: 255,
				min: 0,
				name: 'full_name',
				pattern: '',
				presentable: false,
				primaryKey: false,
				required: true,
				system: false,
				type: 'text'
			})
		);

		return app.save(collection);
	},
	(app) => {
		const collection = app.findCollectionByNameOrId('_pb_users_auth_');

		// remove field
		collection.fields.removeById('text1329388006');

		// remove field
		collection.fields.removeById('date3845444698');

		// remove field
		collection.fields.removeById('text3545716486');

		// remove field
		collection.fields.removeById('text1795275867');

		// remove field
		collection.fields.removeById('text223244161');

		// remove field
		collection.fields.removeById('select1466534506');

		// update field
		collection.fields.addAt(
			6,
			new Field({
				autogeneratePattern: '',
				hidden: false,
				id: 'text1579384326',
				max: 255,
				min: 0,
				name: 'full_name',
				pattern: '',
				presentable: false,
				primaryKey: false,
				required: false,
				system: false,
				type: 'text'
			})
		);

		return app.save(collection);
	}
);
