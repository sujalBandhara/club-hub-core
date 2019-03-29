"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calendar;
(function (Calendar) {
    var GroupType;
    (function (GroupType) {
        GroupType["Recreation"] = "RECREATION";
        GroupType["Club"] = "CLUB";
        GroupType["Social"] = "SOCIAL";
        GroupType["Dining"] = "DINING";
        GroupType["ServiceProvider"] = "SERVICE_PROVIDER";
        GroupType["Golf"] = "GOLF";
        GroupType["Tennis"] = "TENNIS";
    })(GroupType = Calendar.GroupType || (Calendar.GroupType = {}));
    var GroupName;
    (function (GroupName) {
        GroupName["Club"] = "Club";
        GroupName["Golf"] = "Golf";
        GroupName["TeeTimes"] = "Tee Times";
        GroupName["Tennis"] = "Tennis";
        GroupName["Simulator"] = "Simulator";
        GroupName["Dining"] = "Dining";
        GroupName["Service"] = "Service";
    })(GroupName = Calendar.GroupName || (Calendar.GroupName = {}));
})(Calendar || (Calendar = {}));
exports.default = Calendar;
