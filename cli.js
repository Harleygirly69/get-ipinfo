'use strict';

var meow 		= require('meow');
var pkg 		= require('./package.json');
var IPinfo 	= require('./');

var cli = meow({
	help: [
		'',
		'Version: ' + pkg.version + '',
		'',
		'  $ ipinfo',
		'{',
		'  "ip": "90.111.11.111"',
		'  "hostname": "Hostname"',
		'  "city": "Stockholm"',
		'  "region": "Stockholms Lan"',
		'  "country": "SE"',
		'  "loc": "59.329323,18.068581"',
		'  "org": "Adroiter AB"',
		'  "postal": "1337"',
		'}',
		'',
		'Options',
		'  --ip   Specify an IP address'
	].join('\n')
});

IPinfo(function (err, ip) {
	if (err) {
		throw err;
	}

	console.log(ip);
});
