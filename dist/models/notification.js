"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Notification;
(function (Notification) {
    var Status;
    (function (Status) {
        Status["Opened"] = "OPENED";
        Status["ClickedLink"] = "CLICKED_LINK";
        Status["Sent"] = "SENT";
        Status["Bounced"] = "BOUNCED";
        Status["Delivered"] = "DELIVERED";
        Status["Read"] = "READ";
        Status["Error"] = "ERROR";
    })(Status = Notification.Status || (Notification.Status = {}));
})(Notification || (Notification = {}));
exports.default = Notification;
