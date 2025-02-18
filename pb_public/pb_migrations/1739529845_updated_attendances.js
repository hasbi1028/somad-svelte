/// <reference path="../backend/pb_data/types.d.ts" />
migrate(
	(app) => {
		const collection = app.findCollectionByNameOrId('pbc_1822076064');

		// update collection data
		unmarshal(
			{
				name: 'attendance_records'
			},
			collection
		);

		// remove field
		collection.fields.removeById('number3899916918');

		// remove field
		collection.fields.removeById('number2655626947');

		// remove field
		collection.fields.removeById('number2703704995');

		// remove field
		collection.fields.removeById('number1757008857');

		// remove field
		collection.fields.removeById('autodate2420534521');

		// remove field
		collection.fields.removeById('autodate3961577812');

		// add field
		collection.fields.addAt(
			3,
			new Field({
				hidden: false,
				id: 'select1768539901',
				maxSelect: 1,
				name: 'record_type',
				presentable: false,
				required: false,
				system: false,
				type: 'select',
				values: ['present', 'sick', 'leave', 'official_assignment', 'absent', 'other']
			})
		);

		// add field
		collection.fields.addAt(
			4,
			new Field({
				autogeneratePattern: '',
				hidden: false,
				id: 'text18589324',
				max: 0,
				min: 0,
				name: 'notes',
				pattern: '',
				presentable: false,
				primaryKey: false,
				required: false,
				system: false,
				type: 'text'
			})
		);

		return app.save(collection);
	},
	(app) => {
		const collection = app.findCollectionByNameOrId('pbc_1822076064');

		// update collection data
		unmarshal(
			{
				name: 'attendances'
			},
			collection
		);

		// add field
		collection.fields.addAt(
			3,
			new Field({
				hidden: false,
				id: 'number3899916918',
				max: null,
				min: null,
				name: 'check_in_latitude',
				onlyInt: false,
				presentable: false,
				required: false,
				system: false,
				type: 'number'
			})
		);

		// add field
		collection.fields.addAt(
			4,
			new Field({
				hidden: false,
				id: 'number2655626947',
				max: null,
				min: null,
				name: 'check_in_longitude',
				onlyInt: false,
				presentable: false,
				required: false,
				system: false,
				type: 'number'
			})
		);

		// add field
		collection.fields.addAt(
			5,
			new Field({
				hidden: false,
				id: 'number2703704995',
				max: null,
				min: null,
				name: 'check_out_latitude',
				onlyInt: false,
				presentable: false,
				required: false,
				system: false,
				type: 'number'
			})
		);

		// add field
		collection.fields.addAt(
			6,
			new Field({
				hidden: false,
				id: 'number1757008857',
				max: null,
				min: null,
				name: 'check_out_longitude',
				onlyInt: false,
				presentable: false,
				required: false,
				system: false,
				type: 'number'
			})
		);

		// add field
		collection.fields.addAt(
			9,
			new Field({
				hidden: false,
				id: 'autodate2420534521',
				name: 'check_in',
				onCreate: true,
				onUpdate: false,
				presentable: false,
				system: false,
				type: 'autodate'
			})
		);

		// add field
		collection.fields.addAt(
			10,
			new Field({
				hidden: false,
				id: 'autodate3961577812',
				name: 'check_out',
				onCreate: true,
				onUpdate: false,
				presentable: false,
				system: false,
				type: 'autodate'
			})
		);

		// remove field
		collection.fields.removeById('select1768539901');

		// remove field
		collection.fields.removeById('text18589324');

		return app.save(collection);
	}
);
