/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1256360836")

  // remove field
  collection.fields.removeById("date3946532403")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1256360836")

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "date3946532403",
    "max": "",
    "min": "",
    "name": "deleted",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
})
