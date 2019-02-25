"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This string 'enum' defines the possible states
 * a Service request can be in.
 */
var ServiceStatus;
(function (ServiceStatus) {
    ServiceStatus["Submitted"] = "Submitted";
    ServiceStatus["Confirmed"] = "Confirmed";
    ServiceStatus["InProgress"] = "In-Progress";
    ServiceStatus["Done"] = "Done";
})(ServiceStatus = exports.ServiceStatus || (exports.ServiceStatus = {}));
exports.ResourcePaths = {
    members: '/members',
    memberMetadata: '/memberMetadata',
    events: '/events',
    eventRsvps: '/eventRsvps',
    vehicles: '/vehicles',
    providers: '/providers',
    services: '/services',
    vehicleNumbers: '/vehicleNumbers',
    memberNumbers: '/memberNumbers',
};
exports.ErrorTypes = {
    RESOURCE_NOT_FOUND: 'Failed to locate resource',
    MEMBER_NUMBER_TAKEN: 'Member number is already in use!'
};
exports.QueryValues = {
    vehicleID: 'vehicleID',
    memberID: 'memberID',
    eventID: 'eventID'
};
//# sourceMappingURL=types.js.map