"use strict";
/* tslint:disable:only-arrow-functions */
/* tslint:disable:no-unused-expression */
Object.defineProperty(exports, "__esModule", { value: true });
// External Dependencies
require("mocha");
var chai_1 = require("chai");
// Constants
var constants_1 = require("../../constants");
// Internal Dependencies
var firebaseAuth_1 = require("../../Firebase/firebaseAuth");
var firebaseService_1 = require("../../Firebase/firebaseService");
var firebaseCommon_1 = require("../../Firebase/firebaseCommon");
firebaseCommon_1.initFirebase(constants_1.TEST_ENV);
// Constants
var EMAIL_IN_USE_ERROR = 'auth/email-already-in-use';
describe('Firebase Authentication', function () {
    this.timeout(35000);
    var testEmail = 'test@gmail.com';
    var testPassword = 'password';
    var testMember;
    var testMemberUID = 'UyIQi94B9cbvkfFMnJ8YNVhJNPZ2';
    /**
     * Tests member session life cycle via the Firebase Admin SDK.
     */
    describe('createUserWithEmailAndPassword()', function () {
        it.skip('should create an account', function () {
            return firebaseAuth_1.default.createMemberWithEmailAndPassword(testEmail, testPassword).then(function (memberUID) {
                chai_1.expect(memberUID).to.exist;
            }).catch(function (err) {
                chai_1.expect(err).to.not.exist;
            });
        });
        it('should fail to create a user with the same email', function () {
            return firebaseAuth_1.default.createMemberWithEmailAndPassword(testEmail, testPassword).catch(function (err) {
                chai_1.expect(err).to.exist;
                chai_1.expect(err.code).to.eq(EMAIL_IN_USE_ERROR);
            });
        });
        it('should return the uid of the logged in user', function (done) {
            firebaseAuth_1.default.signInWithEmailAndPassword(testEmail, testPassword).then(function () {
                var authMember = firebaseAuth_1.default.getCurrentMember();
                chai_1.expect(authMember.uid).to.eq(testMemberUID);
                done();
            });
        });
        it('should sign the user out', function () {
            return firebaseAuth_1.default.signOut().catch(function (err) {
                chai_1.expect(err).to.not.exist;
                return firebaseAuth_1.default.getCurrentMember();
            }).then(function (userUID) {
                chai_1.expect(userUID).to.eq(undefined);
            });
        });
        it('should sign the user in', function () {
            return firebaseAuth_1.default.signInWithEmailAndPassword(testEmail, testPassword).then(function (memberUID) {
                testMemberUID = memberUID;
            }).catch(function (err) {
                chai_1.expect(err).to.not.exist;
            });
        });
        it('should return an ID token of the signed in member', function () {
            return firebaseAuth_1.default.getCurrentMemberIDToken().then(function (idToken) {
                chai_1.expect(idToken).to.exist;
                return idToken;
            });
        });
        it('should send a password reset email', function () {
            return firebaseAuth_1.default.sendPasswordResetEmail("test@gmail.com");
        });
        it.skip('should fetch the user created after registration from the Real Time database using UID', function () {
            return firebaseService_1.default.getMemberByID(testMemberUID).then(function (res) {
                chai_1.expect(res.firstName).to.exist;
                chai_1.expect(res.lastName).to.exist;
                chai_1.expect(res.memberSince).to.exist;
                chai_1.expect(res.id).to.exist;
                chai_1.expect(res.id).to.eq(testMemberUID);
            });
        });
    });
});
//# sourceMappingURL=firebaseAuth.test.js.map