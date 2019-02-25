"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Firebase
var firebaseAuth_1 = require("../Firebase/firebaseAuth");
var firebaseService_1 = require("../Firebase/firebaseService");
// Action types.
exports.REGISTERED_MEMBER = 'REGISTERED_MEMBER';
exports.AUTHENTICATED_MEMBER = 'AUTHENTICATED_MEMBER';
exports.UPDATED_MEMBER = 'UPDATED_MEMBER';
exports.FETCHED_MEMBER_RESOURCES = 'FETCHED_MEMBER_RESOURCES';
exports.FETCHED_EVENTS_FOR_MEMBER = 'FETCHED_EVENTS_FOR_MEMBER';
exports.FETCHED_VEHICLES_FOR_MEMBER = 'FETCHED_VEHICLES_FOR_MEMBER';
exports.FETCHED_SERVICES_FOR_MEMBER = 'FETCHED_SERVICES_FOR_MEMBER';
exports.FETCHED_ALL_MEMBERS = 'FETCHED_ALL_MEMBERS';
// -----------------------------------------------------------------------------
// Is Member Authenticated
// -----------------------------------------------------------------------------
var getAuthMemberFromLocalStorage = function () {
    return firebaseAuth_1.default.getAuthMemberFromLocalStorage();
};
// -----------------------------------------------------------------------------
// Member Registration
// -----------------------------------------------------------------------------
/**
 * Registers a new member via a call to the `/register` API.
 * @param email The email supplied in the registration form.
 * @param password The password supplied in the registration form.
 */
var registerMember = function (email, password) { return function (dispatch) {
    return firebaseAuth_1.default.createMemberWithEmailAndPassword(email, password).then(function (res) {
        return dispatch(registeredMember(res));
    }).catch(function (err) {
        console.log('Error took place while registering with code: ', err);
        return Promise.reject(err);
    });
}; };
/**
 * Builds a `RegisteredMemberAction` upon successful registration.
 * @param response The response from the register API call.
 * @return The `RegisteredMemberAction` instance.
 */
var registeredMember = function (response) {
    var action = {
        receivedAt: Date.now(),
        type: exports.REGISTERED_MEMBER,
        members: response,
    };
    return action;
};
// -----------------------------------------------------------------------------
// Member Login
// -----------------------------------------------------------------------------
/**
 * Logs in an existing member via a call to the `/login` API.
 * @param email The email supplied in the login form.
 * @param password The password supplied in the login form.
 */
var authenticateMember = function (email, password) { return function (dispatch) {
    var memberUID;
    return firebaseAuth_1.default.signInWithEmailAndPassword(email, password).then(function (uid) {
        memberUID = uid;
        return firebaseService_1.default.getMemberByID(uid);
    }).then(function (member) {
        return dispatch(authenticatedMember(member));
    }).then(function () {
        return dispatch(fetchMemberResources(memberUID));
    }).catch(function (err) {
        return Promise.reject(err);
    });
}; };
/**
 * Builds an `AuthenticatedMemberAction` upon successful login.
 * @param response The response from the login API call.
 * @return The `RegisteredMemberAction` instance.
 */
var authenticatedMember = function (memberInfo) {
    var action = {
        receivedAt: Date.now(),
        type: exports.AUTHENTICATED_MEMBER,
        member: memberInfo,
    };
    return action;
};
// -----------------------------------------------------------------------------
// Update A Member
// -----------------------------------------------------------------------------
/**
 * Updates a member.
 * @param memberID The ID of the member.
 * @param updateInfo The member update information.
 */
var updateMember = function (memberID, updateInfo) { return function (dispatch) {
    return firebaseService_1.default.updateMemberByID(memberID, updateInfo).then(function (member) {
        dispatch(updatedMember(member));
    }).catch(function (err) {
        return Promise.reject(err);
    });
}; };
/**
 * Builds an `UpdatedMemberAction` upon successful fetch of all members.
 * @param member The updated member.
 * @return The `UpdatedMemberAction` instance.
 */
var updatedMember = function (member) {
    var action = {
        receivedAt: Date.now(),
        type: exports.UPDATED_MEMBER,
        member: member
    };
    return action;
};
// -----------------------------------------------------------------------------
// Fetch Member Profile
// -----------------------------------------------------------------------------
/**
 * Fetches a member's resources.
 * Includes a member's: vehicles, services and event rsvps.
 * @param memberID The ID of the member.
 */
var fetchMemberResources = function (memberID) { return function (dispatch) {
    var memberProfile = {
        events: [],
        vehicles: [],
        services: []
    };
    return firebaseService_1.default.getEventsForMember(memberID).then(function (events) {
        memberProfile.events = events;
        return firebaseService_1.default.getMemberVehicles(memberID);
    }).then(function (vehicles) {
        memberProfile.vehicles = vehicles;
        return firebaseService_1.default.getServicesForMember(memberID);
    }).then(function (services) {
        memberProfile.services = services;
        dispatch(fetchedMemberResources(memberProfile));
    }).catch(function (err) {
        console.log("Error fetching data for memberID: " + memberID, err);
        return Promise.reject(err);
    });
}; };
/**
 * Builds an `FetchedMemberResourcesAction` upon successful member profile fetch.
 * @param response The response from the login API call.
 * @return The `FetchedMemberResourcesAction` instance.
 */
var fetchedMemberResources = function (memberResources) {
    var action = {
        receivedAt: Date.now(),
        type: exports.FETCHED_MEMBER_RESOURCES,
        memberResources: memberResources,
    };
    return action;
};
// -----------------------------------------------------------------------------
// Fetching A Member's Events
// -----------------------------------------------------------------------------
/**
 * Fetches all events.
 * @param memberID The ID of the member.
 */
var fetchEventsForMember = function (memberID) { return function (dispatch) {
    return firebaseService_1.default.getEventsForMember(memberID).then(function (events) {
        dispatch(fetchedEventsForMember(events));
    }).catch(function (err) {
        console.log("Error took place while fetching events for memberID: " + memberID, err);
        return Promise.reject(err);
    });
}; };
/**
 * Builds a `FetchEventsForMemberActions` upon successful fetch of all events for a member.
 * @param events An array of events.
 * @return The `FetchEventsForMemberActions` instance.
 */
var fetchedEventsForMember = function (events) {
    var action = {
        receivedAt: Date.now(),
        type: exports.FETCHED_EVENTS_FOR_MEMBER,
        events: events,
    };
    return action;
};
// -----------------------------------------------------------------------------
// Fetching A Member's Vehicles
// -----------------------------------------------------------------------------
/**
 * Fetches all vehicles owned by a member.
 */
var fetchVehiclesForMember = function () { return function (dispatch, store) {
    // ToDo: make sure this is returning the id of the logged in member.
    var memberID = store.getState().member.id;
    if (!memberID)
        throw new Error('Failed to fetch memberID from state');
    return firebaseService_1.default.getMemberVehicles(memberID).then(function (vehicles) {
        dispatch(fetchedVehiclesForMember(vehicles));
    }).catch(function (err) {
        console.log('Error took place while fetching vehicles for member: ', err);
        return Promise.reject(err);
    });
}; };
/**
 * Builds a `FetchedVehiclesForMemberAction` upon successful fetch of a member's vehicles.
 * @param vehicles An array of vehicles.
 * @return The `FetchedVehiclesForMemberAction` instance.
 */
var fetchedVehiclesForMember = function (vehicles) {
    var action = {
        receivedAt: Date.now(),
        type: exports.FETCHED_VEHICLES_FOR_MEMBER,
        vehicles: vehicles,
    };
    return action;
};
// -----------------------------------------------------------------------------
// Fetching Services For A Member
// -----------------------------------------------------------------------------
/**
 * Fetches all services for a member.
 * @param memberID The ID of the member.
 */
var fetchServicesForMember = function (memberID) { return function (dispatch) {
    return firebaseService_1.default.getServicesForMember(memberID).then(function (services) {
        dispatch(fetchedServicesForMember(services));
    }).catch(function (err) {
        return Promise.reject(err);
    });
}; };
/**
 * Builds an `FetchedServicesForMemberActions` upon successful fetch of services for a member.
 * @param services The fetched services.
 * @return The `FetchedServicesForMemberActions` instance.
 */
var fetchedServicesForMember = function (services) {
    var action = {
        receivedAt: Date.now(),
        type: exports.FETCHED_SERVICES_FOR_MEMBER,
        services: services,
    };
    return action;
};
// -----------------------------------------------------------------------------
// Fetch All Members - Admin
// -----------------------------------------------------------------------------
/**
 * Fetches all members.
 * Used by site admins.
 */
var fetchAllMembers = function (isAdmin) { return function (dispatch) {
    return firebaseService_1.default.getMembers(isAdmin).then(function (members) {
        dispatch(fetchedAllMembers(members));
    }).catch(function (err) {
        return Promise.reject(err);
    });
}; };
/**
 * Builds an `FetchedAllMembersAction` upon successful fetch of all members.
 * @param members An array of registered members.
 * @return The `FetchedAllMembersAction` instance.
 */
var fetchedAllMembers = function (members) {
    var action = {
        receivedAt: Date.now(),
        type: exports.AUTHENTICATED_MEMBER,
        members: members
    };
    return action;
};
exports.MemberActions = {
    registerMember: registerMember,
    registeredMember: registeredMember,
    authenticateMember: authenticateMember,
    authenticatedMember: authenticatedMember,
    fetchAllMembers: fetchAllMembers,
    fetchedAllMembers: fetchedAllMembers,
    updateMember: updateMember,
    updatedMember: updatedMember,
    fetchMemberResources: fetchMemberResources,
    fetchVehiclesForMember: fetchVehiclesForMember,
    fetchedVehiclesForMember: fetchedVehiclesForMember,
    fetchEventsForMember: fetchEventsForMember,
    fetchedEventsForMember: fetchedEventsForMember,
    fetchServicesForMember: fetchServicesForMember,
    fetchedServicesForMember: fetchedServicesForMember,
    getAuthMemberFromLocalStorage: getAuthMemberFromLocalStorage
};
//# sourceMappingURL=member.js.map