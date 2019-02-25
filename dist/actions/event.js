"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Firebase
var firebaseService_1 = require("../Firebase/firebaseService");
// Action types.
exports.FETCHED_ALL_EVENTS = 'FETCHED_ALL_EVENTS';
exports.FETCHED_EVENT_BY_ID = 'FETCHED_EVENT_BY_ID';
exports.UPDATED_EVENT = 'UPDATED_EVENT';
exports.FETCHED_EVENT_MEMBERS = 'FETCHED_EVENT_MEMBERS';
// -----------------------------------------------------------------------------
// Fetching Events - Admin
// -----------------------------------------------------------------------------
/**
 * Fetches all events.
 */
var fetchAllEvents = function () { return function (dispatch) {
    return firebaseService_1.default.getEvents().then(function (events) {
        dispatch(fetchedAllEvents(events));
    }).catch(function (err) {
        console.log('Error took place while fetching events: ', err);
        return Promise.reject(err);
    });
}; };
/**
 * Builds a `FetchedAllEventsAction` upon successful fetch of all events.
 * @param events An array of events.
 * @return The `FetchedAllEventsAction` instance.
 */
var fetchedAllEvents = function (events) {
    var action = {
        receivedAt: Date.now(),
        type: exports.FETCHED_ALL_EVENTS,
        events: events,
    };
    return action;
};
// -----------------------------------------------------------------------------
// Fetch Event By ID
// -----------------------------------------------------------------------------
/**
 * Fetches an event by it's ID
 * @param eventID The ID of the event.
 */
var fetchEventById = function (eventID) { return function (dispatch) {
    return firebaseService_1.default.getEventByID(eventID).then(function (event) {
        dispatch(fetchedEventById(event));
    }).catch(function (err) {
        return Promise.reject(err);
    });
}; };
/**
 * Builds an `FetchedEventByIdAction` upon successful fetch of an event.
 * @param event The fetched event.
 * @return The `FetchedEventByIdAction` instance.
 */
var fetchedEventById = function (event) {
    var action = {
        receivedAt: Date.now(),
        type: exports.FETCHED_EVENT_BY_ID,
        event: event,
    };
    return action;
};
// -----------------------------------------------------------------------------
// Updates An Event
// -----------------------------------------------------------------------------
/**
 * Updates an event by it's ID
 * @param eventId The ID of the event.
 * @param updateInfo The update information.
 */
var updateEvent = function (eventId, updateInfo) { return function (dispatch) {
    return firebaseService_1.default.updateEventByID(eventId, updateInfo).then(function (updatedEvent) {
        dispatch(updatedEvent(updatedEvent));
    }).catch(function (err) {
        return Promise.reject(err);
    });
}; };
/**
 * Builds an `UpdatedEventAction` upon successful update of an event.
 * @param event The updated event.
 * @return The `UpdatedEventAction` instance.
 */
var updatedEvent = function (event) {
    var action = {
        receivedAt: Date.now(),
        type: exports.UPDATED_EVENT,
        event: event,
    };
    return action;
};
// -----------------------------------------------------------------------------
// Fetches Event RSVP Members
// -----------------------------------------------------------------------------
/**
 * Fetches all members who have RSVP'd to an event.
 * @param eventID The ID of the event
 */
var fetchEventMembers = function (eventID, isAdmin) { return function (dispatch) {
    return firebaseService_1.default.getEventMembers(eventID, isAdmin).then(function (eventMembers) {
        dispatch(fetchedEventMembers(eventMembers));
    }).catch(function (err) {
        return Promise.reject(err);
    });
}; };
/**
 * Builds a `FetchedEventMembersAction` upon after fetching all members who have RSVP'd to an event.
 * @param members The array of member who have RSVP'd
 * @return The `FetchedEventMembersAction` instance.
 */
var fetchedEventMembers = function (members) {
    return {
        type: exports.FETCHED_EVENT_MEMBERS,
        eventMembers: members,
        receivedAt: Date.now()
    };
};
exports.EventActions = {
    fetchAllEvents: fetchAllEvents,
    fetchedAllEvents: fetchedAllEvents,
    fetchEventById: fetchEventById,
    fetchedEventById: fetchedEventById,
    updateEvent: updateEvent,
    updatedEvent: updatedEvent,
    fetchEventMembers: fetchEventMembers,
    fetchedEventMembers: fetchedEventMembers
};
//# sourceMappingURL=event.js.map