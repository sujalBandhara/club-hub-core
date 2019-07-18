"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Club;
(function (Club) {
    var Type;
    (function (Type) {
        Type["Car"] = "Car";
        Type["Golf"] = "Golf";
        Type["Tennis"] = "Tennis";
        Type["Social"] = "Social";
        Type["Yacht"] = "Yacht";
    })(Type = Club.Type || (Club.Type = {}));
    var MobileNavigationButtonName;
    (function (MobileNavigationButtonName) {
        MobileNavigationButtonName["MessageButton"] = "MessageButton";
        MobileNavigationButtonName["CalendarButton"] = "CalendarButton";
        MobileNavigationButtonName["ClubInfoButton"] = "ClubInfoButton";
        MobileNavigationButtonName["ProfileButton"] = "ProfileButton";
        MobileNavigationButtonName["EditProfileButton"] = "EditProfileButton";
    })(MobileNavigationButtonName = Club.MobileNavigationButtonName || (Club.MobileNavigationButtonName = {}));
    var TabNames;
    (function (TabNames) {
        TabNames["News"] = "News";
        TabNames["Events"] = "Events";
        TabNames["Members"] = "Members";
        TabNames["Profile"] = "Profile";
        TabNames["Menu"] = "Menu";
        TabNames["Calendar"] = "Calendar";
        TabNames["Club"] = "Club";
        TabNames["Services"] = "Services";
        TabNames["Reservation"] = "Reservations";
        TabNames["TeeTimes"] = "Tee Times";
        TabNames["TeeSnap"] = "Tee Times";
    })(TabNames = Club.TabNames || (Club.TabNames = {}));
})(Club || (Club = {}));
exports.default = Club;
