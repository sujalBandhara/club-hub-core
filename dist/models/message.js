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
        Type["Rsvp"] = "Event RSVP";
        Type["UnRsvp"] = "Cancel RSVP";
        Type["ServiceRequest"] = "Service Request";
        Type["Welcome"] = "New User";
        Type["Application"] = "Membership Application";
        Type["MembershipInquiry"] = "Membership Inquiry";
        Type["MembershipInquiryRes"] = "Membership Inquiry Response";
        Type["PublicRsvp"] = "Public Event RSVP";
        Type["NewProviderRequest"] = "Service Provider Request";
    })(Type = Message.Type || (Message.Type = {}));
})(Message || (Message = {}));
exports.default = Message;
