"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Action Types
var siteMember_1 = require("../actions/siteMember");
exports.defaultState = {
    member: null,
    members: [],
    vehicles: [],
    events: [],
    services: []
};
function siteMember(state, action) {
    if (state === void 0) { state = exports.defaultState; }
    switch (action.type) {
        case siteMember_1.FETCHED_ALL_MEMBERS:
            return Object.assign({}, state, {
                members: action.members
            });
        case siteMember_1.UPDATED_MEMBER:
            return Object.assign({}, state, {
                member: action.member
            });
        case siteMember_1.FETCHED_MEMBER_RESOURCES:
            return Object.assign({}, state, {
                vehicles: action.memberResources.vehicles,
                events: action.memberResources.events,
                services: action.memberResources.services
            });
        case siteMember_1.FETCHED_VEHICLES_FOR_MEMBER:
            return Object.assign({}, state, {
                vehicles: action.vehicles
            });
        case siteMember_1.FETCHED_MEMBER_BY_ID:
            return Object.assign({}, state, {
                member: action.member
            });
        default:
            return state;
    }
}
exports.default = siteMember;
//# sourceMappingURL=siteMember.js.map