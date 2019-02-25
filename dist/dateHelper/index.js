"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment");
/**
 * Returns a stringified Epoch timestamp using values from the date and time picker.
 * @param date Date string - (2018-03-01)
 * @param time Time string - (17:30)
 * new Date(year, month (0 = Jan), day, hours, minutes, seconds, milliseconds).getTime()
 */
exports.createDateTimestamp = function (date, time) {
    var splitDate = date.split('-');
    var year = Number(splitDate[0]);
    var month = Number(splitDate[1]) - 1;
    var day = Number(splitDate[2]);
    var splitTime = time.split(':');
    var hour = Number(splitTime[0]);
    var minute = Number(splitTime[1]);
    var timeStamp = new Date(year, month, day, hour, minute, 0, 0);
    return timeStamp.getTime().toString();
};
/**
 * Returns a DateInterface
 * @param timestamp Epoch Timestamp
 */
exports.dateFromTimestamp = function (startTimestamp, endTimestamp) {
    var date = new Date((Number(startTimestamp)));
    var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];
    var monthIndex = date.getMonth();
    var day = date.getDate();
    var year = date.getFullYear();
    var fullDate = monthNames[monthIndex] + ' ' + day + ', ' + year;
    var shortMonth = date.toLocaleString('en-us', { month: "short" });
    var dateObject = {
        day: day,
        longMonth: monthNames[monthIndex],
        shortMonth: shortMonth,
        year: year,
        fullDate: fullDate,
        startTime: getTime(date)
    };
    if (endTimestamp) {
        var endDate = new Date((Number(endTimestamp)));
        dateObject.endTime = getTime(endDate);
    }
    return dateObject;
};
var getTime = function (timeString) {
    var time = moment(timeString, 'HH:mm:ss').format('hh:mm A');
    return time;
};
//# sourceMappingURL=index.js.map