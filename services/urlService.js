const Url = require('../models/urlModel');

class UrlService {
	getUrl() {
		const query = Url.find().exec();
		return query;
	}

	getUrlById(id) {
		const query = Url.find({ _id: id }).exec();
		return query;
	}

	findUrl(longUrl) {
		const query = Url.findOne({ longUrl: longUrl }).exec();
		return query;
	}

	postUrl(url) {
		const newUrl = new Url(url);
		return newUrl.save();
	}
}

module.exports = UrlService;
