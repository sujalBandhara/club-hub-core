"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Internal Dependencies
var firebaseCommon_1 = require("./firebaseCommon");
// External Dependencies
var firebase = require("firebase");
// Raven (Sentry Client)
var Raven = require('raven-js');
var constants_1 = require("../constants");
var FirebaseAuth = /** @class */ (function () {
    function FirebaseAuth() {
    }
    //------------------------------------------------------------------------------
    // Authentication API
    // When a user signs up or signs in, that user becomes the current user of the Auth instance
    //------------------------------------------------------------------------------
    /**
     * Return the initialized Firebase SDK.
     */
    FirebaseAuth.sharedInstance = function () {
        return firebaseCommon_1.FirebaseApp;
    };
    /**
     * Creates a user account with email and password.
     * Returns the UID of the created auth member
     * @param email User email.
     * @param password User password.
     */
    FirebaseAuth.createMemberWithEmailAndPassword = function (email, password) {
        return firebaseCommon_1.FirebaseApp.auth().createUserWithEmailAndPassword(email, password).then(function (res) {
            return res.uid;
        }).catch(function (error) {
            Raven.captureException(error);
            throw error;
        });
    };
    /**
     * Sends a password reset email to the Auth'd member's email.
     * After providing a new password, the member will be redirected to the /signin page.
     * @param email The email of the logged in member.
     */
    // window.localStorage.setItem('emailForSignIn', email)	
    FirebaseAuth.sendPasswordResetEmail = function (email) {
        var actionCodeSettings = { url: 'http://driversclub.meshdata.io' };
        return firebaseCommon_1.FirebaseApp.auth().sendPasswordResetEmail(email, actionCodeSettings);
    };
    /**
     * Returns a signed ID token for the currently logged in member.
     * This token will be used to authenticate requests to the Firebase Cloud Function endpoints.
     */
    FirebaseAuth.getCurrentMemberIDToken = function () {
        return firebaseCommon_1.FirebaseApp.auth().currentUser.getIdToken(true).then(function (idToken) {
            return idToken;
        }).catch(function (error) {
            Raven.captureException(error);
            throw error;
        });
    };
    /**
     * Signs a user in using an email and password.
     * @param email User email.
     * @param password User password.
     */
    FirebaseAuth.signInWithEmailAndPassword = function (email, password) {
        var sessionPersistence = this.setSessionPersistence();
        return firebaseCommon_1.FirebaseApp.auth().setPersistence(sessionPersistence).then(function () {
            return firebaseCommon_1.FirebaseApp.auth().signInWithEmailAndPassword(email, password);
        }).then(function (res) {
            return firebaseCommon_1.FirebaseApp.auth().currentUser.uid;
        }).catch(function (error) {
            Raven.captureException(error);
            throw error;
        });
    };
    /**
     * Returns the uid of the currently logged in user. This will
     * return null if there is no authenticated user.
     */
    FirebaseAuth.getCurrentMember = function () {
        var member;
        member = firebaseCommon_1.FirebaseApp.auth().currentUser;
        if (!member) {
            return null;
        }
        else {
            return firebaseCommon_1.FirebaseApp.auth().currentUser;
        }
    };
    /**
     * Observer on the Firebase auth instance. Listens for sign-in or sign-out by the logged in member.
     * @param callBack
     */
    FirebaseAuth.subscribeAuthListener = function (callBack) {
        return firebaseCommon_1.FirebaseApp.auth().onAuthStateChanged(callBack);
    };
    /**
     * Returns the user object located in Local Storage. This is
     * only used in the web app since local storage works differently
     * in mobile.
     */
    FirebaseAuth.getAuthMemberFromLocalStorage = function () {
        var firebaseUserKey = 'firebase:authUser';
        var userKey = Object.keys(window.localStorage).filter(function (key) { return key.startsWith(firebaseUserKey); })[0];
        var user = userKey ? JSON.parse(localStorage.getItem(userKey)) : undefined;
        return (user) ? user : null;
    };
    /**
     * Signs out the user.
     */
    FirebaseAuth.signOut = function () {
        // TODO: Make sure the user object in local storage is cleared out.
        return firebaseCommon_1.FirebaseApp.auth().signOut();
    };
    FirebaseAuth.setSessionPersistence = function () {
        return (process.env && process.env.NODE_ENV === constants_1.TEST_ENV)
            ? firebase.auth.Auth.Persistence.NONE
            : firebase.auth.Auth.Persistence.LOCAL;
    };
    return FirebaseAuth;
}());
exports.default = FirebaseAuth;
//# sourceMappingURL=firebaseAuth.js.map