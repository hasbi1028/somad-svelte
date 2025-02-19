/// <reference path="../pb_data/types.d.ts" />
migrate(
	(app) => {
		const collection = app.findCollectionByNameOrId('pbc_2478702895');

		// update collection data
		unmarshal(
			{
				indexes: [
					'CREATE UNIQUE INDEX `idx_NF7WK8lWoy` ON `classes` (\n  `grade`,\n  `academic_year_id`\n)'
				]
			},
			collection
		);

		// remove field
		collection.fields.removeById('text660268833');

		// add field
		collection.fields.addAt(
			4,
			new Field({
				cascadeDelete: false,
				collectionId: 'pbc_1890316325',
				hidden: false,
				id: 'relation3310302209',
				maxSelect: 1,
				minSelect: 0,
				name: 'academic_year_id',
				presentable: false,
				required: false,
				system: false,
				type: 'relation'
			})
		);

		return app.save(collection);
	},
	(app) => {
		const collection = app.findCollectionByNameOrId('pbc_2478702895');

		// update collection data
		unmarshal(
			{
				indexes: [
					'CREATE UNIQUE INDEX `idx_NF7WK8lWoy` ON `classes` (\n  `grade`,\n  `academic_year`\n)'
				]
			},
			collection
		);

		// add field
		collection.fields.addAt(
			3,
			new Field({
				autogeneratePattern: '',
				hidden: false,
				id: 'text660268833',
				max: 0,
				min: 0,
				name: 'academic_year',
				pattern: '',
				presentable: false,
				primaryKey: false,
				required: false,
				system: false,
				type: 'text'
			})
		);

		// remove field
		collection.fields.removeById('relation3310302209');

		return app.save(collection);
	}
);
