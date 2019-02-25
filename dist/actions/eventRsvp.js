"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Firebase
var firebaseService_1 = require("../Firebase/firebaseService");
// Action types.
exports.FINISHED_RSVP_MEMBER_TO_EVENT = 'FINISHED_RSVP_MEMBER_TO_EVENT';
exports.FETCHED_EVENT_RSVPS = 'FETCHED_EVENT_RSVPS';
// -----------------------------------------------------------------------------
// RSVP Member To Event
// -----------------------------------------------------------------------------
/**
 * RSVPs a member to an event.
 * @param memberID The ID of the Member.
 * @param eventID The ID of the event.
 */
var rsvpMemberToEvent = function (memberID, eventID) { return function (dispatch) {
    return firebaseService_1.default.rsvpMemberToEvent(memberID, eventID).then(function (eventRsvpID) {
        dispatch(finishedRsvpMemberToEvent(eventRsvpID));
    }).catch(function (err) {
        console.log("Error took place while creating an event rsvp for memberID: " + memberID + " for eventID: " + eventID, err);
        return Promise.reject(err);
    });
}; };
/**
 * Builds a `FinishedRsvpMemberToEvent` upon creating an RSVP to an event.
 * @param eventRsvpId The ID of the event RSVP.
 * @return The `FinishedRsvpMemberToEvent` instance.
 */
var finishedRsvpMemberToEvent = function (eventRsvpId) {
    var action = {
        receivedAt: Date.now(),
        type: exports.FINISHED_RSVP_MEMBER_TO_EVENT,
        eventRsvpId: eventRsvpId,
    };
    return action;
};
// -----------------------------------------------------------------------------
// Fetch Event RSVPs For Event
// -----------------------------------------------------------------------------
/**
 * Fetches all event RSVPs for an event.
 * @param eventID The ID of the event.
 */
var fetchEventRsvps = function (eventID) { return function (dispatch) {
    return firebaseService_1.default.getEventRsvps(eventID).then(function (eventRsvps) {
        dispatch(fetchedEventRsvps(eventRsvps));
    }).catch(function (err) {
        console.log("Error took place while fetching events RSVPs for eventID: " + eventID, err);
        return Promise.reject(err);
    });
}; };
/**
 * Builds a `FetchedEventRsvpsActions` upon successful fetch of all event RSVPs for an event.
 * @param events An array of events.
 * @return The `FetchedEventRsvpsActions` instance.
 */
var fetchedEventRsvps = function (eventRsvps) {
    var action = {
        receivedAt: Date.now(),
        type: exports.FETCHED_EVENT_RSVPS,
        eventRSVPs: eventRsvps,
    };
    return action;
};
exports.EventRsvpActions = {
    rsvpMemberToEvent: rsvpMemberToEvent,
    finishedRsvpMemberToEvent: finishedRsvpMemberToEvent,
    fetchEventRsvps: fetchEventRsvps,
    fetchedEventRsvps: fetchedEventRsvps,
};
//# sourceMappingURL=eventRsvp.js.map