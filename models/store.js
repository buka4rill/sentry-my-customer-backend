const mongoose = require("mongoose"),
	  Customer = require("./customer"),
	  Transaction = require("./transaction"),
	  storeAssistant = require("./storeAssistant");


const storeSchema = new mongoose.Schema({
	store_name: { type: String, required: true },
	phone_number: {
		type: String, Default: "Not set"
	},
	assistants:[
		storeAssistant.schema
	],
	tagline: { type: String , Default: "Not set"},
	shop_address: { type: String, required: true },
	email: { type: String, default: "Not set" },
	customers: [
		Customer.schema
	]
}, { timestamp: true });

module.exports = mongoose.model("store", storeSchema);