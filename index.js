'use strict';
/**
 * get-ipinfo
 * Copyright © 2015 Johnie Hjelm
 */

var got = require('got');

module.exports = function (cb) {

	got('http://ipinfo.io/json', {
		headers: {
			'user-agent': 'https://github.com/adroiter/get-ipinfo'
		}
	}, function (err, res) {

		if (err) {
			cb(err);
			return;
		}

		res = JSON.parse(res);

		cb(null, res);

	});

}
