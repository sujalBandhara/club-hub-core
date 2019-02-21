"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Order;
(function (Order) {
    let Status;
    (function (Status) {
        Status["Completed"] = "COMPLETED";
        Status["Accepted"] = "ACCEPTED";
        Status["Confirmed"] = "CONFIRMED";
        Status["Pending"] = "PENDING";
        Status["Rejected"] = "REJECTED";
    })(Status = Order.Status || (Order.Status = {}));
})(Order || (Order = {}));
exports.default = Order;
