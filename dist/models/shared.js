"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IShared;
(function (IShared) {
    var PublicationStatus;
    (function (PublicationStatus) {
        PublicationStatus["Draft"] = "DRAFT";
        PublicationStatus["Pending"] = "PENDING";
        PublicationStatus["Published"] = "PUBLISHED";
        PublicationStatus["Scheduled"] = "SCHEDULED";
        PublicationStatus["Delivered"] = "DELIVERED";
        PublicationStatus["Template"] = "TEMPLATE";
    })(PublicationStatus = IShared.PublicationStatus || (IShared.PublicationStatus = {}));
    var DayOfWeek;
    (function (DayOfWeek) {
        DayOfWeek[DayOfWeek["Sunday"] = 0] = "Sunday";
        DayOfWeek[DayOfWeek["Monday"] = 1] = "Monday";
        DayOfWeek[DayOfWeek["Tuesday"] = 2] = "Tuesday";
        DayOfWeek[DayOfWeek["Wednesday"] = 3] = "Wednesday";
        DayOfWeek[DayOfWeek["Thursday"] = 4] = "Thursday";
        DayOfWeek[DayOfWeek["Friday"] = 5] = "Friday";
        DayOfWeek[DayOfWeek["Saturday"] = 6] = "Saturday";
    })(DayOfWeek = IShared.DayOfWeek || (IShared.DayOfWeek = {}));
    var TimePeriod;
    (function (TimePeriod) {
        TimePeriod[TimePeriod["Day"] = 0] = "Day";
        TimePeriod[TimePeriod["Week"] = 1] = "Week";
        TimePeriod[TimePeriod["Month"] = 2] = "Month";
        TimePeriod[TimePeriod["Year"] = 3] = "Year";
    })(TimePeriod = IShared.TimePeriod || (IShared.TimePeriod = {}));
})(IShared || (IShared = {}));
exports.default = IShared;
