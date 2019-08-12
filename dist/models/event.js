"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Event;
(function (Event) {
    var RecurringFrequency;
    (function (RecurringFrequency) {
        RecurringFrequency[RecurringFrequency["YEARLY"] = 0] = "YEARLY";
        RecurringFrequency[RecurringFrequency["MONTHLY"] = 1] = "MONTHLY";
        RecurringFrequency[RecurringFrequency["WEEKLY"] = 2] = "WEEKLY";
        RecurringFrequency[RecurringFrequency["DAILY"] = 3] = "DAILY";
        RecurringFrequency[RecurringFrequency["HOURLY"] = 4] = "HOURLY";
        RecurringFrequency[RecurringFrequency["MINUTELY"] = 5] = "MINUTELY";
        RecurringFrequency[RecurringFrequency["SECONDLY"] = 6] = "SECONDLY";
    })(RecurringFrequency = Event.RecurringFrequency || (Event.RecurringFrequency = {}));
    var TimeFieldType;
    (function (TimeFieldType) {
        TimeFieldType["Start"] = "start";
        TimeFieldType["CreatedAt"] = "createdAt";
    })(TimeFieldType = Event.TimeFieldType || (Event.TimeFieldType = {}));
    var AvailableEventStatus;
    (function (AvailableEventStatus) {
        AvailableEventStatus["Open"] = "open";
        AvailableEventStatus["PublicBooked"] = "public-booked";
        AvailableEventStatus["PrivateBooked"] = "private-booked";
        AvailableEventStatus["PublicJoinable"] = "public-joinable";
        AvailableEventStatus["PrivateJoinable"] = "private-joinable";
        AvailableEventStatus["PublicNotJoinable"] = "public-not-joinable";
        AvailableEventStatus["PrivateNotJoinable"] = "private-not-joinable";
        AvailableEventStatus["Blocked"] = "blocked";
        AvailableEventStatus["Lottery"] = "lottery";
    })(AvailableEventStatus = Event.AvailableEventStatus || (Event.AvailableEventStatus = {}));
    var UpdateType;
    (function (UpdateType) {
        UpdateType["All"] = "all";
        UpdateType["Single"] = "single";
        UpdateType["Future"] = "future";
    })(UpdateType = Event.UpdateType || (Event.UpdateType = {}));
})(Event || (Event = {}));
exports.default = Event;
