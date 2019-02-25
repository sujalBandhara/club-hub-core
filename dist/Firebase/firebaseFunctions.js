"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
var config_1 = require("./config");
var functionURL;
exports.setFirebaseFunctionsURL = function (env) {
    functionURL = config_1.GetFunctionURL(env);
};
// Raven (Sentry Client)
var Raven = require('raven-js');
var FirebaseFunctions = /** @class */ (function () {
    function FirebaseFunctions() {
    }
    /**
     * Calls the `createNewMember` firebase cloud function.
     * @param provider the new provider to submit a request for.
     */
    FirebaseFunctions.createNewMemberRequest = function (member, metadata) {
        var body = { member: member, metadata: metadata };
        var providerURL = functionURL + "/createNewMember";
        return this.executePostRequest(providerURL, body);
    };
    /**
     * Calls the `deleteMember` firebase cloud function.
     * @param memberID The ID of the member to delete.
     */
    FirebaseFunctions.deleteMemberRequest = function (memberID) {
        var body = { memberID: memberID };
        var providerURL = functionURL + "/deleteMember";
        return this.executePostRequest(providerURL, body);
    };
    /**
     * Calls the `createNewVehicle` firebase cloud function.
     * @param provider the new vehicle to submit a request for.
     */
    FirebaseFunctions.createNewVehicleRequest = function (vehicle) {
        var body = { vehicle: vehicle };
        var providerURL = functionURL + "/createNewVehicle";
        return this.executePostRequest(providerURL, body);
    };
    /**
     * Calls the `submitNewProvider` firebase cloud function.
     * @param provider the new provider to submit a request for.
     */
    FirebaseFunctions.submitNewProviderRequest = function (provider) {
        var providerURL = functionURL + "/submitNewProviderRequest";
        return this.executePostRequest(providerURL, provider);
    };
    /**
     * Sends an email to an admin with the email of a public member who wants to RSVP for an event.
     * @param memberEmail The email of the public member.
     * @param eventID The ID of the event the Public member wants to RSVP to.
     */
    FirebaseFunctions.submitPublicMemberRSVP = function (memberName, memberEmail, plusOne, eventID) {
        var publicMemberRSVPBody = {
            member_name: memberName,
            member_email: memberEmail,
            plus_one: plusOne,
            event_id: eventID
        };
        var publicRsvpURL = functionURL + "/onPublicRSVP";
        return this.executePublicPostRequest(publicRsvpURL, publicMemberRSVPBody);
    };
    /**
     * Sends out push notifications on admin action.
     * @param eventID
     */
    FirebaseFunctions.sendPushNotificationsForEvent = function (eventID) {
        var requestBody = { event_ID: eventID };
        var pushURL = functionURL + "/sendEventPushNotifications";
        return this.executePostRequest(pushURL, requestBody);
    };
    /**
     * Executes an authenticated post request.
     */
    FirebaseFunctions.executePostRequest = function (url, body) {
        return __1.FirebaseAuth.getCurrentMemberIDToken().then(function (token) {
            var init = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + token
                },
                body: JSON.stringify(body),
                mode: 'cors'
            };
            return fetch(url, init);
        }).catch(function (error) {
            Raven.captureException(error);
            throw error;
        });
    };
    /**
    * Executes an unauthenticated post request.
    */
    FirebaseFunctions.executePublicPostRequest = function (url, body) {
        var init = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
            mode: 'cors'
        };
        return fetch(url, init).catch(function (error) {
            Raven.captureException(error);
            throw error;
        });
    };
    return FirebaseFunctions;
}());
exports.default = FirebaseFunctions;
//# sourceMappingURL=firebaseFunctions.js.map