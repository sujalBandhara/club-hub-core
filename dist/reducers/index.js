"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var member_1 = require("./member");
var vehicle_1 = require("./vehicle");
var service_1 = require("./service");
var event_1 = require("./event");
var eventRsvp_1 = require("./eventRsvp");
var provider_1 = require("./provider");
var siteMember_1 = require("./siteMember");
var app = redux_1.combineReducers({
    member: member_1.default,
    siteMember: siteMember_1.default,
    vehicle: vehicle_1.default,
    service: service_1.default,
    event: event_1.default,
    eventRsvp: eventRsvp_1.default,
    provider: provider_1.default
});
exports.default = app;
//# sourceMappingURL=index.js.map