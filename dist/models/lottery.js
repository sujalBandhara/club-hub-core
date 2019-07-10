"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Lottery;
(function (Lottery) {
    var Status;
    (function (Status) {
        Status["Pending"] = "pending";
        Status["Approved"] = "approved";
        Status["Moved"] = "moved";
        Status["Rejected"] = "rejected";
    })(Status = Lottery.Status || (Lottery.Status = {}));
})(Lottery || (Lottery = {}));
exports.default = Lottery;
