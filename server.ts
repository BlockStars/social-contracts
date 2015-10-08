/// <reference path="typings/tsd.d.ts" />
import express = require('express');
import web3config = require('./lib/web3config');
import assert = require('assert');


var web3 = require("web3");

import path = require('path');

import fs = require('fs');

import indexRoute = require('./routes/index');


/*************** Configuration ********************/
var CONFIG_FILE = './config.json';
var config;
var configString: string;

// We don't use fs.exists() to try to read the file; the recommended method is just opening and
// handling an error: https://nodejs.org/api/fs.html#fs_fs_exists_path_callback
try {
    configString = fs.readFileSync(CONFIG_FILE, 'utf8');
}
catch (e) {
    try {
        CONFIG_FILE = './config.default.json';
        configString = fs.readFileSync(CONFIG_FILE, 'utf8');
    }
    catch (e2) {
        console.log("Error while loading config file: " + e2);
        // TODO: exit with error. No run without a valid config.
    }
}

console.log("Using configuration from " + CONFIG_FILE);
try {
    // Parse config file.
    config = JSON.parse(configString);
}
catch (e) {
    console.log("Error while parsing config file: " + e);
    // TODO: exit with error. No run without a valid config.
}

console.log("My configuration:");
console.log(config);

var HTTP_PORT = config.server.httpPort;
var baseUrl = config.server.baseUrl + ":" + HTTP_PORT;

/******** Ethereum / web3 setup *************/

var web3plus = web3config.createWeb3(config.ethereum.jsonRpcUrl);

// Deploy our main contract if it doesn't exist yet.
if (!config.ethereum.mainContractAddress) {
    //
}

/******** Express and route setup ***********/

var app = express();

// Logging
var morgan = require('morgan');
app.use(morgan('dev'));

// Client folder containing the Angular SPA, serve as static assets
var clientDir = path.join(__dirname, 'client')
app.use(express.static(clientDir));

// All routes which are directly accessible (i.e. not only from within the Angular SPA).
// All open index.html, where Angular handles further routing to the right controller/ view.
// Ideally all routes not matched by server-side routes are forwarded to Angular.
// TODO: introduce an "other" wildcard handler for this.
app.get('/', indexRoute.index);
app.get('/user/profile', indexRoute.index);
app.get('/user/login', indexRoute.index);

/*********************** HTTP server setup ********************/

var http = require('http');

http.createServer(app).listen(HTTP_PORT);

console.log('http server started on port ' + HTTP_PORT);
