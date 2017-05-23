'use strict';
var hprose = require("hprose");
var co = require('co');

co(function*() {
    try {
        var client = hprose.Client.create("http://127.0.0.1:8080/");
        yield client.useService();
        var result = yield client.hello('world');
    } catch (e) {
        console.error(e);
    }
});