'use strict';

var ws = require('./webservice_connector')
var callsite = require('callsite')

function logger() {
    this.apptoken = ''
    this.wsurl = ''
    this.wsport = ''
    this.msg = ''
    this.functoken = ''
    this.wstype = ''
    this.data = {}
}

logger.prototype.config = function (wsurl,port,apptoken,wstype) {
    this.apptoken = apptoken
    this.wsport = port
    this.wsurl = wsurl
    this.wstype = wstype
}
    
logger.prototype.debug = function (msg) {
    var stack = callsite(),
        requester = stack[1].getFileName();
    this.functoken = requester
    this.data = {appToken: this.apptoken, funcToken: this.functoken, logtype: 'Debug', logData: msg}
    ws.connectservice(this.wsurl, this.wsport, '/AgentLogger', this.data, this.wstype)
}

logger.prototype.info = function (msg) {
    var stack = callsite(),
        requester = stack[1].getFileName();
    this.functoken = requester
    this.data = {appToken: this.apptoken, funcToken: this.functoken, logtype: 'Info', logData: msg}
    ws.connectservice(this.wsurl, this.wsport, '/AgentLogger', this.data, this.wstype)
}

logger.prototype.error = function (msg) {
     var stack = callsite(),
        requester = stack[1].getFileName();
    this.functoken = requester
    this.data = {appToken: this.apptoken, funcToken: this.functoken, logtype: 'Error', logData: msg}
    ws.connectservice(this.wsurl, this.wsport, '/AgentLogger', this.data, this.wstype)
}

var Logger = module.exports = exports = new logger
