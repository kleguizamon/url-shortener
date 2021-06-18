const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
	longUrl: {
		type: String,
		require: true,
	},

	shortUrl: {
		type: String,
		require: true,
	},

	date: {
		type: String,
		default: Date.now,
	},
});

module.exports = mongoose.model('Url', urlSchema);
