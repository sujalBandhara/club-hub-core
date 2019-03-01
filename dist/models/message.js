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
    var Type;
    (function (Type) {
        Type["Rsvp"] = "Rsvp";
        Type["UnRsvp"] = "UnRsvp";
        Type["Welcome"] = "Welcome";
        Type["Application"] = "Application";
        Type["MembershipInquiry"] = "MembershipInquiry";
        Type["MembershipInquiryRes"] = "MembershipInquiryRes";
        Type["PublicRsvp"] = "PublicRsvp";
        Type["ServiceRequest"] = "ServiceRequest";
        Type["NewProviderRequest"] = "NewProviderRequest";
    })(Type = Message.Type || (Message.Type = {}));
})(Message || (Message = {}));
exports.default = Message;
