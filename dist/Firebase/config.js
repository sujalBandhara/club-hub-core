"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../constants");
//-----------------------------------------
// Test Config
//-----------------------------------------
exports.testFunctionURL = 'https://us-central1-drivers-club-test.cloudfunctions.net';
exports.testConfig = {
    apiKey: "AIzaSyCrsuzVoJU30SO99GGMpaBNnbmA_y_x7ig",
    authDomain: "drivers-club-test.firebaseapp.com",
    databaseURL: "https://drivers-club-test.firebaseio.com",
    projectId: "drivers-club-test",
    storageBucket: "drivers-club-test.appspot.com",
    messagingSenderId: "791871627206"
};
//-----------------------------------------
// Dev Config
//-----------------------------------------
exports.devFunctionURL = 'https://us-central1-drivers-club-dev.cloudfunctions.net';
exports.devConfig = {
    apiKey: "AIzaSyCfxZ-YehlDpLVdZ4W5n5m-IE6XGTOrycY",
    authDomain: "drivers-club-dev.firebaseapp.com",
    databaseURL: "https://drivers-club-dev.firebaseio.com",
    projectId: "drivers-club-dev",
    storageBucket: "",
    messagingSenderId: "295261873614"
};
//-----------------------------------------
// Prod Config
//-----------------------------------------
exports.prodFunctionURL = 'https://us-central1-drivers-club-prod.cloudfunctions.net';
exports.prodConfig = {
    apiKey: "AIzaSyDoXja8NVciA0oZpVu522NTTwxojKMvhqU",
    authDomain: "drivers-club-prod.firebaseapp.com",
    databaseURL: "https://drivers-club-prod.firebaseio.com",
    projectId: "drivers-club-prod",
    storageBucket: "",
    messagingSenderId: "192606569181"
};
//-----------------------------------------
// Prod Config
//-----------------------------------------
exports.stageFunctionURL = 'https://us-central1-drivers-club-stage.cloudfunctions.net';
exports.stageConfig = {
    apiKey: "AIzaSyA7MsXsVn5Vx-ZHagQib2yh_YQ1Lw5P1l4",
    authDomain: "drivers-club-stage.firebaseapp.com",
    databaseURL: "https://drivers-club-stage.firebaseio.com",
    projectId: "drivers-club-stage",
    storageBucket: "",
    messagingSenderId: "550746788087"
};
//-----------------------------------------
// Helpers
//-----------------------------------------
exports.GetConfig = function (env) {
    if (env == constants_1.PROD_ENV) {
        return exports.prodConfig;
    }
    if (env == constants_1.DEV_ENV) {
        return exports.devConfig;
    }
    if (env == constants_1.TEST_ENV) {
        return exports.testConfig;
    }
    if (env == constants_1.STAGE_ENV) {
        return exports.stageConfig;
    }
    return null;
};
exports.GetFunctionURL = function (env) {
    if (env == constants_1.PROD_ENV) {
        return exports.prodFunctionURL;
    }
    if (env == constants_1.DEV_ENV) {
        return exports.devFunctionURL;
    }
    if (env == constants_1.TEST_ENV) {
        return exports.testFunctionURL;
    }
    if (env == constants_1.STAGE_ENV) {
        return exports.stageFunctionURL;
    }
    return null;
};
//# sourceMappingURL=config.js.map