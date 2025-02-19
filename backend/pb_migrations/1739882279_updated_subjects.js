/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3949707534")

  // add field
  collection.fields.addAt(4, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3924401618",
    "hidden": false,
    "id": "relation436649811",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "kurikulum",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3949707534")

  // remove field
  collection.fields.removeById("relation436649811")

  return app.save(collection)
})
