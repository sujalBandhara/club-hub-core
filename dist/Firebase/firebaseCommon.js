"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// External Dependencies
var firebase = require("firebase");
// Constants
var config_1 = require("./config");
/**
 * Handles Firebase initialization.
 */
var FirebaseApp;
exports.FirebaseApp = FirebaseApp;
exports.initFirebase = function (env) {
    if (!firebase.apps.length) {
        exports.FirebaseApp = FirebaseApp = firebase.initializeApp(config_1.GetConfig(env));
    }
};
//# sourceMappingURL=firebaseCommon.js.map