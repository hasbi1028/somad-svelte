/// <reference path="../backend/pb_data/types.d.ts" />
migrate(
	(app) => {
		const collection = app.findCollectionByNameOrId('pbc_3827815851');

		// add field
		collection.fields.addAt(
			2,
			new Field({
				autogeneratePattern: '',
				hidden: false,
				id: 'text329501161',
				max: 0,
				min: 0,
				name: 'nisn',
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
		const collection = app.findCollectionByNameOrId('pbc_3827815851');

		// remove field
		collection.fields.removeById('text329501161');

		return app.save(collection);
	}
);
