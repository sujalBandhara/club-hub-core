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
    })(PublicationStatus = IShared.PublicationStatus || (IShared.PublicationStatus = {}));
})(IShared || (IShared = {}));
exports.default = IShared;
