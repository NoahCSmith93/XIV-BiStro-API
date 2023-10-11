const mongoose = require('mongoose')
const Item = require('./item')

const gearsetSchema = new mongoose.Schema(
	{
		weapon: Item,
		offhand: Item,
        head: Item,
        chest: Item,
        arms: Item,
        legs: Item,
        feet: Item,
        earing: Item,
        neck: Item,
        wrist: Item,
        ring1: Item,
        ring2: Item

	},
)

module.exports = mongoose.model('Gearset', gearsetSchema)
