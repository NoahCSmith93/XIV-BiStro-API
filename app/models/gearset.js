const mongoose = require('mongoose')
const Item = require('./item')

const gearsetSchema = new mongoose.Schema(
	{
		weapon: Item.schema,
		offhand: Item.schema,
        head: Item.schema,
        chest: Item.schema,
        arms: Item.schema,
        legs: Item.schema,
        feet: Item.schema,
        earing: Item.schema,
        neck: Item.schema,
        wrist: Item.schema,
        ring1: Item.schema,
        ring2: Item.schema

	},
)

module.exports = mongoose.model('Gearset', gearsetSchema)
