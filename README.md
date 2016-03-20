# Airlog (Old name SAMF) Library for Node.js programming language

This library connector to Airlog Web service for Node.js programming language 

### How to install use NPM
```
npm install airlog-lib-node --save
```
### How to configuration first use
- Create configuration file for first use (This Example use in express.js)
- Create file logger.js in root directory
- Write this code to your config file
```node
'use strict'

var logger = require('airlog-lib-node');
var wsurl = 'Your Airlog Web Service URL'
var wsport = 8080
var apptoken = 'Your Application token in Airlog Control Panel'

logger.config(wsurl,wsport,apptoken)

module.exports = logger
```
- Save this file

### How to use in your project
- Open your file for use logger
- Require Airlog library (var log = require('Path file logger.js')) in your project file
- Use this code for stamp log and put your message (select logtype first)
```
log.info('')
log.debug('')
log.error('')
```

### More information and contact to developer
* [Website :: https://kusumotolab.com](https://kusumotolab.com)
* [Twitter :: @Kusumoto_ton](https://twtter.com/kusumoto_ton)
* [Facebook :: Weerayut Hongsa](https://facebook.com/Azerdar.t.Kusumoto)

