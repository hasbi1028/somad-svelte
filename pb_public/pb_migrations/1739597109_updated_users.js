/// <reference path="../backend/pb_data/types.d.ts" />
migrate(
	(app) => {
		const collection = app.findCollectionByNameOrId('_pb_users_auth_');

		// update collection data
		unmarshal(
			{
				deleteRule: '',
				listRule: '',
				updateRule: '',
				viewRule: ''
			},
			collection
		);

		return app.save(collection);
	},
	(app) => {
		const collection = app.findCollectionByNameOrId('_pb_users_auth_');

		// update collection data
		unmarshal(
			{
				deleteRule: "'admin' = @request.auth.role",
				listRule: "'admin' = @request.auth.role",
				updateRule: "'admin' = @request.auth.role",
				viewRule: "'admin' = @request.auth.role"
			},
			collection
		);

		return app.save(collection);
	}
);
