'use strict'
require('dotenv').config()

// creating a base name for the mongodb
const mongooseBaseName = 'XIV-BiStro-API'

// create the mongodb uri for development and test
// This is for using local mongodb
// const database = {
// 	development: `mongodb://localhost/${mongooseBaseName}-development`,
// 	test: `mongodb://localhost/${mongooseBaseName}-test`,
// }

// This is for using mongodb atlas on the cloud
const database = {
	development: process.env.MONGODB_URI,
	test: process.env.MONGODB_URI,
}

// Identify if development environment is test or development
// select DB based on whether a test file was executed before `server.js`
const localDb = process.env.TESTENV ? database.test : database.development

// Environment variable MONGODB_URI will be available in
// production environment otherwise use test or development db
const currentDb = process.env.MONGODB_URI || localDb

module.exports = currentDb
