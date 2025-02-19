/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3949707534")

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "number2789078007",
    "max": null,
    "min": null,
    "name": "jpm",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3949707534")

  // remove field
  collection.fields.removeById("number2789078007")

  return app.save(collection)
})
