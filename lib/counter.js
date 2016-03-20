'use strict';

var ws = require('./webservice_connector')

function counter() {
    this.apptoken = ''
    this.wsurl = ''
    this.wsport = ''
    this.functoken = ''
    this.data = {}
}

counter.prototype.config = function (wsurl,port,apptoken) {
    this.apptoken = apptoken
    this.wsport = port
    this.wsurl = wsurl
}
    
counter.prototype.count = function () {
     var stack = callsite(),
        requester = stack[1].getFileName();
    this.functoken = requester
    this.data = {appToken: this.apptoken, funcToken: this.functoken}
    ws.connectservice(this.wsurl + ':' + this.wsport + '/AgentCount', this.data)
}

var Counter = module.exports = exports = new counter