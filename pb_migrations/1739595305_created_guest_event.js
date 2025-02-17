/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
      {
        "autogeneratePattern": "[a-z0-9]{15}",
        "hidden": false,
        "id": "text3208210256",
        "max": 15,
        "min": 15,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "cascadeDelete": false,
        "collectionId": "pbc_300928764",
        "hidden": false,
        "id": "relation2588583512",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "guest_id",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "hidden": false,
        "id": "select2467634050",
        "maxSelect": 1,
        "name": "event_type",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "select",
        "values": [
          "check_in",
          "check_out"
        ]
      },
      {
        "hidden": false,
        "id": "date1885328622",
        "max": "",
        "min": "",
        "name": "event_time",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "date"
      },
      {
        "hidden": false,
        "id": "autodate2990389176",
        "name": "created",
        "onCreate": true,
        "onUpdate": false,
        "presentable": false,
        "system": false,
        "type": "autodate"
      }
    ],
    "id": "pbc_3735142087",
    "indexes": [],
    "listRule": null,
    "name": "guest_event",
    "system": false,
    "type": "base",
    "updateRule": null,
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3735142087");

  return app.delete(collection);
})
