"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IShared;
(function (IShared) {
    let PublicationStatus;
    (function (PublicationStatus) {
        PublicationStatus["Draft"] = "DRAFT";
        PublicationStatus["Pending"] = "PENDING";
        PublicationStatus["Published"] = "PUBLISHED";
    })(PublicationStatus = IShared.PublicationStatus || (IShared.PublicationStatus = {}));
})(IShared = exports.IShared || (exports.IShared = {}));
exports.default = IShared;
