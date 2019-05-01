"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Notification;
(function (Notification) {
    var Status;
    (function (Status) {
        Status["Delivered"] = "DELIVERED";
        Status["Read"] = "READ";
        Status["Error"] = "ERROR";
    })(Status = Notification.Status || (Notification.Status = {}));
})(Notification || (Notification = {}));
exports.default = Notification;
