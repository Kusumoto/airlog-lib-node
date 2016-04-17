'use strict';

var http = require('http')
var https = require('https')
var querystring = require('querystring')

exports.connectservice = function (url, port, path, data, wstype) {
    var postData = querystring.stringify(data)

    var options = {
        hostname: url,
        port: port,
        path: path,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': postData.length
        }
    }

    if (wstype === 'http') {
        var req = http.request(options)
        req.write(postData);
        req.end();
    } else {
        var req = https.request(options)
        req.write(postData);
        req.end();
    }
}