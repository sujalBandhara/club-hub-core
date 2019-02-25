"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Action Types
var services_1 = require("../actions/services");
var defaultState = {
    service: null,
    services: []
};
function service(state, action) {
    if (state === void 0) { state = defaultState; }
    switch (action.type) {
        case services_1.FETCHED_ALL_SERVICES:
            return Object.assign({}, state, {
                services: action.services
            });
        case services_1.FETCHED_SERVICE_BY_ID:
            return Object.assign({}, state, {
                service: action.service
            });
        case services_1.FETCHED_MEMBER_SERVICES:
            return Object.assign({}, state, {
                services: action.services
            });
        default:
            return state;
    }
}
exports.default = service;
//# sourceMappingURL=service.js.map