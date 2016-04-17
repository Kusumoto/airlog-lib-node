'use strict';

var logger = require('./logger')
var counter = require('./counter')

function samf_lib() {
    this.wsurl = ''
    this.wsport = ''
    this.apptoken = ''
    this.lib_ver = '1.0.1'
    console.log('samf-lib : loaded');
}

samf_lib.prototype.config = function (wsurl, port, apptoken) {
    var wstype = ''

    this.wsurl = wsurl
    this.apptoken = apptoken
    
    if (port === undefined && wsurl.indexOf('https') != -1)
        this.wsport = 443
    else if (port === undefined)
        this.wsport = 8080
    else
        this.wsport = port

    if (wsurl.indexOf('https') != -1) {
        var res = this.wsurl.split("https://");
        this.wsurl = res[1]
         wstype = 'https'
        
    } else {
        var res = this.wsurl.split("http://");
        this.wsurl = res[1]
        wstype = 'http'
    }
    
    logger.config(this.wsurl, this.wsport, this.apptoken, wstype)
    counter.config(this.wsurl, this.wsport, this.apptoken, wstype)
}

samf_lib.prototype.info = logger.info
samf_lib.prototype.error = logger.error
samf_lib.prototype.debug = logger.debug
samf_lib.prototype.count = counter.count

var SAMF_lib = module.exports = exports = new samf_lib;