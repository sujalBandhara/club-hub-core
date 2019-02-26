"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Message;
(function (Message) {
    var SubjectType;
    (function (SubjectType) {
        SubjectType["Post"] = "POST";
        SubjectType["Event"] = "EVENT";
    })(SubjectType = Message.SubjectType || (Message.SubjectType = {}));
    var DeliveryType;
    (function (DeliveryType) {
        DeliveryType["Push"] = "PUSH";
        DeliveryType["Email"] = "EMAIL";
        DeliveryType["Text"] = "TEXT";
    })(DeliveryType = Message.DeliveryType || (Message.DeliveryType = {}));
    var ConfirmationTypes;
    (function (ConfirmationTypes) {
        ConfirmationTypes["EventRSVP"] = "Event RSVP";
        ConfirmationTypes["ServiceRequest"] = "Service Request";
    })(ConfirmationTypes = Message.ConfirmationTypes || (Message.ConfirmationTypes = {}));
})(Message || (Message = {}));
exports.default = Message;
