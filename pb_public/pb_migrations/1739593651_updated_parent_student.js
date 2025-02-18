/// <reference path="../backend/pb_data/types.d.ts" />
migrate(
	(app) => {
		const collection = app.findCollectionByNameOrId('pbc_3800084194');

		// add field
		collection.fields.addAt(
			2,
			new Field({
				cascadeDelete: false,
				collectionId: 'pbc_1812161152',
				hidden: false,
				id: 'relation1920649840',
				maxSelect: 999,
				minSelect: 0,
				name: 'parent_id',
				presentable: false,
				required: false,
				system: false,
				type: 'relation'
			})
		);

		// update field
		collection.fields.addAt(
			1,
			new Field({
				cascadeDelete: false,
				collectionId: 'pbc_3827815851',
				hidden: false,
				id: 'relation3415494426',
				maxSelect: 999,
				minSelect: 0,
				name: 'student_id',
				presentable: false,
				required: false,
				system: false,
				type: 'relation'
			})
		);

		return app.save(collection);
	},
	(app) => {
		const collection = app.findCollectionByNameOrId('pbc_3800084194');

		// remove field
		collection.fields.removeById('relation1920649840');

		// update field
		collection.fields.addAt(
			1,
			new Field({
				cascadeDelete: false,
				collectionId: 'pbc_3827815851',
				hidden: false,
				id: 'relation3415494426',
				maxSelect: 1,
				minSelect: 0,
				name: 'student_id',
				presentable: false,
				required: false,
				system: false,
				type: 'relation'
			})
		);

		return app.save(collection);
	}
);
