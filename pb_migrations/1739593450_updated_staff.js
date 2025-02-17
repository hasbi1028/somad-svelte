/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2301119865")

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select3245759331",
    "maxSelect": 1,
    "name": "departement",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Tata Usaha",
      "Perpustakaan",
      "Keuangan"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2301119865")

  // remove field
  collection.fields.removeById("select3245759331")

  return app.save(collection)
})
