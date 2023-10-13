const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema(
	{
		name: {
			type: String,
		},
		ilvl: {
			type: Number,
		},
	},
)

module.exports = mongoose.model('Item', itemSchema)
