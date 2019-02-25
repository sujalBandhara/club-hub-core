"use strict";
/* tslint:disable:only-arrow-functions */
/* tslint:disable:no-unused-expression */
Object.defineProperty(exports, "__esModule", { value: true });
// External Dependencies
require("mocha");
var chai_1 = require("chai");
// Internal Dependencies
var dateHelper_1 = require("../../dateHelper");
describe('Date Helper', function () {
    this.timeout(1000);
    describe('create and parse timestamp', function () {
        var dateString = '2018-03-23';
        var timeString = '17:30';
        var testTimestamp;
        it('should create a timestamp using date and time parameters', function () {
            var timestamp = dateHelper_1.createDateTimestamp(dateString, timeString);
            testTimestamp = timestamp;
            chai_1.expect(timestamp).to.eq('1521851400000');
        });
        it('should parse the above timestamp and return the correct date object', function () {
            var dateObject = dateHelper_1.dateFromTimestamp(testTimestamp);
            chai_1.expect(dateObject.longMonth).to.eq('March');
            chai_1.expect(dateObject.shortMonth).to.eq('Mar');
            chai_1.expect(dateObject.year).to.eq(2018);
            chai_1.expect(dateObject.fullDate).to.eq('March 23, 2018');
            chai_1.expect(dateObject.startTime).to.eq('05:30 PM');
        });
    });
    describe('should parse start and end times', function () {
        // Timestamp One
        var dateString = '2018-05-06';
        var timeString = '09:30';
        var testTimestampOne = dateHelper_1.createDateTimestamp(dateString, timeString);
        // Timestamp Two
        var timeStringTwo = '12:00';
        var testTimestampTwo = dateHelper_1.createDateTimestamp(dateString, timeStringTwo);
        it('should parse the above timestamp and return the correct date object with an end time', function () {
            var dateObject = dateHelper_1.dateFromTimestamp(testTimestampOne, testTimestampTwo);
            chai_1.expect(dateObject.longMonth).to.eq('May');
            chai_1.expect(dateObject.shortMonth).to.eq('May');
            chai_1.expect(dateObject.year).to.eq(2018);
            chai_1.expect(dateObject.fullDate).to.eq('May 6, 2018');
            chai_1.expect(dateObject.startTime).to.eq('09:30 AM');
            chai_1.expect(dateObject.endTime).to.eq('12:00 PM');
        });
    });
});
//# sourceMappingURL=index.js.map