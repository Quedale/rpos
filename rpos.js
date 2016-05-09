/// <reference path="typings/rpos/rpos.d.ts"/>
/// <reference path="typings/tsd.d.ts"/>
require("./lib/extension");
var http = require("http");
var express = require("express");
var utils_1 = require("./lib/utils");
var Camera = require("./lib/camera");
var DeviceService = require("./services/device_service");
var MediaService = require("./services/media_service");
var utils = utils_1.Utils.utils;
var pjson = require("./package.json");
var config = require("./rposConfig.json");
utils.log.level = config.logLevel;
config.DeviceInformation.SerialNumber = utils.getSerial();
config.DeviceInformation.FirmwareVersion = pjson.version;
utils.setConfig(config);
utils.testIpAddress();
for (var i in config.DeviceInformation) {
    utils.log.info("%s : %s", i, config.DeviceInformation[i]);
}
var webserver = express();
var httpserver = http.createServer(webserver);
var camera = new Camera(config, webserver);
var device_service = new DeviceService(config, httpserver);
var media_service = new MediaService(config, httpserver, camera);
device_service.start();
media_service.start();
//# sourceMappingURL=rpos.js.map