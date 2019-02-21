"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calendar;
(function (Calendar) {
    let CalendarGroupType;
    (function (CalendarGroupType) {
        CalendarGroupType["Recreation"] = "RECREATION";
        CalendarGroupType["Social"] = "SOCIAL";
        CalendarGroupType["Dining"] = "DINING";
        CalendarGroupType["ServiceProvider"] = "SERVICE_PROVIDER";
    })(CalendarGroupType = Calendar.CalendarGroupType || (Calendar.CalendarGroupType = {}));
    let CalendarGroupName;
    (function (CalendarGroupName) {
        CalendarGroupName["Club"] = "Club";
        CalendarGroupName["Golf"] = "Golf";
    })(CalendarGroupName = Calendar.CalendarGroupName || (Calendar.CalendarGroupName = {}));
})(Calendar || (Calendar = {}));
exports.default = Calendar;
