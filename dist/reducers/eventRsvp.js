"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Action Types
var eventRsvp_1 = require("../actions/eventRsvp");
exports.defaultState = {
    eventRSVP: null,
    eventsRSVPs: []
};
function eventRSVP(state, action) {
    if (state === void 0) { state = exports.defaultState; }
    switch (action.type) {
        case eventRsvp_1.FETCHED_EVENT_RSVPS:
            return Object.assign({}, state, {
                eventsRSVPs: action.eventRSVPs
            });
        case eventRsvp_1.FINISHED_RSVP_MEMBER_TO_EVENT:
            return Object.assign({}, state, {});
        default:
            return state;
    }
}
exports.default = eventRSVP;
//# sourceMappingURL=eventRsvp.js.map