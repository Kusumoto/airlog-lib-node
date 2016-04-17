'use strict';

var ws = require('./webservice_connector')
var callsite = require('callsite')

function counter() {
    this.apptoken = ''
    this.wsurl = ''
    this.wsport = ''
    this.functoken = ''
    this.wstype = ''
    this.data = {}
}

counter.prototype.config = function (wsurl,port,apptoken,wstype) {
    this.apptoken = apptoken
    this.wsport = port
    this.wsurl = wsurl
    this.wstype = wstype
}
    
counter.prototype.count = function () {
     var stack = callsite(),
        requester = stack[1].getFileName();
    this.functoken = requester
    this.data = {appToken: this.apptoken, funcToken: this.functoken}
    ws.connectservice(this.wsurl,this.wsport, '/AgentCount', this.data, this.wstype)
}

var Counter = module.exports = exports = new counter