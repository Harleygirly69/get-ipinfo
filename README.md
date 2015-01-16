# get-ipinfo

> Get IP info using [ipinfo.io](http://ipinfo.io)

## Install

```sh
$ npm install --save get-ipinfo
```

## Usage

```javascript
var IPinfo = require('get-ipinfo');

IPinfo(function(err, ip) {
	console.log(ip);
});
```

## CLI

```sh
$ npm install --global get-ipinfo
```

```sh
$ ipinfo --help

	Usage
		$ ipinfo
		
		{
		  "ip": "90.111.11.111"
		  "hostname": "Hostname"
		  "city": "Stockholm"
		  "region": "Stockholms Lan"
		  "country": "SE"
		  "loc": "59.32932318.068581"
		  "org": "Adroiter AB"
		  "postal": "1337"
		}
		
		Options
		  --ip    Specify an IP address
		  --type  Type of information: ip|hostname|city|region|country|loc|org|postal
```

## License

MIT © [Adroiter](http://adroiter.io)
