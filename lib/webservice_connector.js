'use strict';

var request = require('request');

var headers = {
    'User-Agent': 'Airlog-Lib for Node.js 1.0',
}

exports.connectservice = function(url, data) {
    var options = {
        url: url,
        method: 'POST',
        headers: headers,
        form: data
    }

    request(options, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log('airlog-webservice-send : ' + JSON.parse(body).status)
        } else {
            console.log('airlog-webservice-send : fail = ' + error)
        }
    })
}