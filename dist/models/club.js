"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Club;
(function (Club) {
    var Type;
    (function (Type) {
        Type["Car"] = "CAR";
        Type["Golf"] = "GOLF";
        Type["Tennis"] = "Tennis";
        Type["Social"] = "Social";
        Type["Yacht"] = "Yacht";
    })(Type = Club.Type || (Club.Type = {}));
    var ClubInfoDataType;
    (function (ClubInfoDataType) {
        ClubInfoDataType["single"] = "single";
        ClubInfoDataType["table"] = "table";
    })(ClubInfoDataType = Club.ClubInfoDataType || (Club.ClubInfoDataType = {}));
    var ClubInfoDataAction;
    (function (ClubInfoDataAction) {
        ClubInfoDataAction["call"] = "call";
        ClubInfoDataAction["email"] = "email";
    })(ClubInfoDataAction = Club.ClubInfoDataAction || (Club.ClubInfoDataAction = {}));
    var MobileNavigationButtonName;
    (function (MobileNavigationButtonName) {
        MobileNavigationButtonName["MessageButton"] = "MessageButton";
        MobileNavigationButtonName["CalendarButton"] = "CalendarButton";
        MobileNavigationButtonName["ClubInfoButton"] = "ClubInfoButton";
        MobileNavigationButtonName["ProfileButton"] = "ProfileButton";
        MobileNavigationButtonName["EditProfileButton"] = "EditProfileButton";
    })(MobileNavigationButtonName = Club.MobileNavigationButtonName || (Club.MobileNavigationButtonName = {}));
})(Club || (Club = {}));
exports.default = Club;
