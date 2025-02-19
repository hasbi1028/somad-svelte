/// <reference path="../pb_data/types.d.ts" />
migrate(
	(app) => {
		const collection = app.findCollectionByNameOrId('pbc_4174208006');

		// update collection data
		unmarshal(
			{
				name: 'extra_duties'
			},
			collection
		);

		return app.save(collection);
	},
	(app) => {
		const collection = app.findCollectionByNameOrId('pbc_4174208006');

		// update collection data
		unmarshal(
			{
				name: 'Extra_duties'
			},
			collection
		);

		return app.save(collection);
	}
);
