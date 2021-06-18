const express = require('express');
const router = express.Router();
const UrlController = require('../controllers/urlController');
const UrlService = require('../services/urlService');
const UrlInstance = new UrlController(new UrlService());

router.get('/domain', (req, res, next) => {
	UrlInstance.getUrl(req, res);
});

router.get('/:id', (req, res, next) => {
	UrlInstance.getUrlById(req, res);
});

router.post('/shorten', (req, res, next) => {
	UrlInstance.postUrl(req, res);
});

module.exports = router;
