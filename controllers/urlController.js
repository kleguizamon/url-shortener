const shortid = require('shortid');

class UrlController {
	constructor(urlServices) {
		this.urlServices = urlServices;
	}

	async getUrl(req, res) {
		try {
			const url = await this.urlServices.getUrl();
			res.status(200).json(url);
		} catch (err) {
			console.log(err);
			res.status(500).json(err);
		}
	}

	async getUrlById(req, res) {
		const { id } = req.params;
		try {
			const url = await this.urlServices.getUrlById(id);
			res.status(200).json(url);
		} catch (err) {
			res.status(404).json(`The URL for "${id}" doesn't exist!`);
		}
	}

	async postUrl(req, res) {
		const { longUrl, baseUrl } = req.body;
		const urlCode = shortid.generate();

		if (longUrl && baseUrl) {
			try {
				//Find if a URL exist in mongoDB
				let url = await this.urlServices.findUrl(longUrl);
				if (url) {
					res.status(208).json('The URL already exist!');
				} else {
					const shortUrl = baseUrl + '/' + urlCode;
					//Generate object for mongoDB
					url = {
						longUrl,
						shortUrl,
						date: new Date(),
					};

					await this.urlServices.postUrl(url);
					res.status(201).json(url);
				}
			} catch (err) {
				console.log(err);
				res.status(500).json(err);
			}
		} else {
			res.status(400).json('The field "longUrl" and "baseUrl" is required');
		}
	}
}

module.exports = UrlController;
