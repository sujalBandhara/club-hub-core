"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Winston = require("winston");
var setLoggerTransports = function () {
    var transports = [];
    var stdOutTransport = new Winston.transports.Console({
        level: 'debug',
        handleExceptions: true,
    });
    transports.push(stdOutTransport);
    return transports;
};
Winston.format.combine(Winston.format.colorize(), Winston.format.json());
var logger = Winston.createLogger({
    exitOnError: false,
    transports: setLoggerTransports()
});
var Logger = (function () {
    function Logger() {
    }
    Logger.info = function (msg) {
        var meta = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            meta[_i - 1] = arguments[_i];
        }
        if (process.env.LOGGER_DISABLED === 'true') {
            return;
        }
        logger.info.apply(logger, ["" + msg].concat(meta));
    };
    Logger.trace = function (msg) {
        var meta = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            meta[_i - 1] = arguments[_i];
        }
        if (process.env.LOGGER_DISABLED === 'true') {
            return;
        }
        var err = new Error();
        logger.info.apply(logger, ["" + msg].concat(meta, ['Trace: ', err.stack]));
    };
    Logger.warn = function (msg) {
        var meta = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            meta[_i - 1] = arguments[_i];
        }
        if (process.env.LOGGER_DISABLED === 'true') {
            return;
        }
        var err = new Error();
        logger.warn.apply(logger, ["" + msg].concat(meta));
    };
    Logger.error = function (msg) {
        var meta = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            meta[_i - 1] = arguments[_i];
        }
        if (process.env.LOGGER_DISABLED === 'true') {
            return;
        }
        var err = new Error();
        logger.error.apply(logger, ["" + msg].concat(meta));
    };
    Logger.handleError = function (err) {
        if (err.stack) {
            return ' with ' + err.stack;
        }
        else {
            return ' with ' + err + 'No stack trace available for Error';
        }
    };
    return Logger;
}());
exports.default = Logger;
exports.stream = {
    write: function (message, encoding) {
        logger.info(message);
    }
};
