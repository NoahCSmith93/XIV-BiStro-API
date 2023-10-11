const mongoose = require('mongoose')
const Gearset = require('./gearset')

const bestSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		currentGear: Gearset.schema,
		bestGear: Gearset.schema,
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Best', bestSchema)
