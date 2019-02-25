"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Action Types
var member_1 = require("../actions/member");
exports.defaultState = {
    member: null,
    vehicles: [],
    events: [],
    services: []
};
function member(state, action) {
    if (state === void 0) { state = exports.defaultState; }
    switch (action.type) {
        case member_1.AUTHENTICATED_MEMBER:
            return Object.assign({}, state, {
                member: action.member
            });
        case member_1.FETCHED_ALL_MEMBERS:
            return Object.assign({}, state, {
                members: action.members
            });
        case member_1.UPDATED_MEMBER:
            return Object.assign({}, state, {
                member: action.member
            });
        case member_1.FETCHED_MEMBER_RESOURCES:
            return Object.assign({}, state, {
                vehicles: action.memberResources.vehicles,
                events: action.memberResources.events,
                services: action.memberResources.services
            });
        case member_1.FETCHED_EVENTS_FOR_MEMBER:
            return Object.assign({}, state, {
                events: action.events
            });
        case member_1.FETCHED_VEHICLES_FOR_MEMBER:
            return Object.assign({}, state, {
                vehicles: action.vehicles
            });
        case member_1.FETCHED_SERVICES_FOR_MEMBER:
            return Object.assign({}, state, {
                services: action.services
            });
        default:
            return state;
    }
}
exports.default = member;
//# sourceMappingURL=member.js.map