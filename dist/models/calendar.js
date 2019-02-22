"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calendar;
(function (Calendar) {
    var CalendarGroupType;
    (function (CalendarGroupType) {
        CalendarGroupType["Recreation"] = "RECREATION";
        CalendarGroupType["Social"] = "SOCIAL";
        CalendarGroupType["Dining"] = "DINING";
        CalendarGroupType["ServiceProvider"] = "SERVICE_PROVIDER";
    })(CalendarGroupType = Calendar.CalendarGroupType || (Calendar.CalendarGroupType = {}));
    var CalendarGroupName;
    (function (CalendarGroupName) {
        CalendarGroupName["Club"] = "Club";
        CalendarGroupName["Golf"] = "Golf";
    })(CalendarGroupName = Calendar.CalendarGroupName || (Calendar.CalendarGroupName = {}));
})(Calendar || (Calendar = {}));
exports.default = Calendar;
