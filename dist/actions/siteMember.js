"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var firebaseService_1 = require("../Firebase/firebaseService");
// Action types.
exports.UPDATED_MEMBER = 'UPDATED_MEMBER';
exports.FETCHED_MEMBER_RESOURCES = 'FETCHED_MEMBER_RESOURCES';
exports.FETCHED_VEHICLES_FOR_MEMBER = 'FETCHED_VEHICLES_FOR_MEMBER';
exports.FETCHED_ALL_MEMBERS = 'FETCHED_ALL_MEMBERS';
exports.FETCHED_MEMBER_BY_ID = 'FETCHED_MEMBER_BY_ID';
// -----------------------------------------------------------------------------
// Fetch Member By ID
// -----------------------------------------------------------------------------
/**
 * Fetches a member by their ID.
 */
var fetchMemberByID = function (memberID) { return function (dispatch) {
    return firebaseService_1.default.getMemberByID(memberID).then(function (member) {
        dispatch(fetchedMemberByID(member));
    }).catch(function (err) {
        return Promise.reject(err);
    });
}; };
/**
 * Builds a `FetchedMemberByIDAction` upon successful fetch of a site member.
 * @param member The member who was fetched.
 * @return The `FetchedMemberByIDAction`
 */
var fetchedMemberByID = function (member) {
    return {
        type: exports.FETCHED_MEMBER_BY_ID,
        member: member,
        receivedAt: Date.now()
    };
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
        type: exports.FETCHED_ALL_MEMBERS,
        members: members
    };
    return action;
};
exports.SiteMemberActions = {
    fetchAllMembers: fetchAllMembers,
    fetchedAllMembers: fetchedAllMembers,
    fetchMemberByID: fetchMemberByID,
    fetchedMemberByID: fetchedMemberByID,
    fetchMemberResources: fetchMemberResources,
    fetchVehiclesForMember: fetchVehiclesForMember,
    fetchedVehiclesForMember: fetchedVehiclesForMember
};
//# sourceMappingURL=siteMember.js.map