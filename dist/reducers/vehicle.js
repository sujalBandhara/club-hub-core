"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Action Types
var vehicle_1 = require("../actions/vehicle");
var defaultState = {
    vehicle: null,
    vehicles: []
};
function vehicle(state, action) {
    if (state === void 0) { state = defaultState; }
    switch (action.type) {
        case vehicle_1.FETCHED_MEMBER_VEHICLE_BY_ID:
            return Object.assign({}, state, {
                vehicles: action.vehicle
            });
        case vehicle_1.UPDATED_MEMBER_VEHICLE:
            return Object.assign({}, state, {
                vehicle: action.vehicle
            });
        default:
            return state;
    }
}
exports.default = vehicle;
//# sourceMappingURL=vehicle.js.map