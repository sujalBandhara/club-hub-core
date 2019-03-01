"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Message;
(function (Message) {
    var SubjectType;
    (function (SubjectType) {
        SubjectType["Post"] = "POST";
        SubjectType["Event"] = "EVENT";
        SubjectType["Reservation"] = "RESERVATION";
    })(SubjectType = Message.SubjectType || (Message.SubjectType = {}));
    var DeliveryType;
    (function (DeliveryType) {
        DeliveryType["Push"] = "PUSH";
        DeliveryType["Email"] = "EMAIL";
        DeliveryType["Text"] = "TEXT";
    })(DeliveryType = Message.DeliveryType || (Message.DeliveryType = {}));
    var MessageTemplateID;
    (function (MessageTemplateID) {
        MessageTemplateID["Rsvp"] = "Rsvp";
        MessageTemplateID["UnRsvp"] = "UnRsvp";
        MessageTemplateID["Welcome"] = "Welcome";
    })(MessageTemplateID = Message.MessageTemplateID || (Message.MessageTemplateID = {}));
})(Message || (Message = {}));
exports.default = Message;
