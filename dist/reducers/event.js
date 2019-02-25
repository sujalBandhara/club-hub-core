"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Action Types
var event_1 = require("../actions/event");
exports.defaultState = {
    event: null,
    events: [],
    eventMembers: []
};
function event(state, action) {
    if (state === void 0) { state = exports.defaultState; }
    switch (action.type) {
        case event_1.FETCHED_ALL_EVENTS:
            return Object.assign({}, state, {
                events: action.events
            });
        case event_1.FETCHED_EVENT_BY_ID:
            return Object.assign({}, state, {
                event: action.event
            });
        case event_1.UPDATED_EVENT:
            return Object.assign({}, state, {
                event: action.event
            });
        case event_1.FETCHED_EVENT_MEMBERS:
            return Object.assign({}, state, {
                eventMembers: action.eventMembers
            });
        default:
            return state;
    }
}
exports.default = event;
//# sourceMappingURL=event.js.map