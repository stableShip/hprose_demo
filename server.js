'use strict';
var hprose = require("hprose");
function hello(name, callback) {
    callback("Hello " + name + "!");
}
var server = hprose.Server.create("http://0.0.0.0:8080");
server.addAsyncFunction(hello);
server.start();