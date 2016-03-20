'use strict';

var logger = require('./logger')
var counter = require('./counter')

function samf_lib() {
    this.wsurl = ''
    this.wsport = ''
    this.apptoken = ''
    this.lib_ver = '1.0.0'
    console.log('samf-webservice : loaded');
}

samf_lib.prototype.config = function (wsurl,port,apptoken) {
    this.wsurl = wsurl
    this.apptoken = apptoken
    
    if (port === undefined)
        this.wsport = 8080
    else
        this.wsport = port
    logger.config(this.wsurl,this.wsport,this.apptoken)
    counter.config(this.wsurl,this.wsport,this.apptoken)
}

samf_lib.prototype.info = logger.info
samf_lib.prototype.error = logger.error
samf_lib.prototype.debug = logger.debug

samf_lib.prototype.count = counter.count

var SAMF_lib = module.exports = exports = new samf_lib;