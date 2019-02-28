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
    var MessageType;
    (function (MessageType) {
        MessageType["memberInquiry"] = "MembershipInquiry";
        MessageType["memberApplication"] = "MemberApplication";
        MessageType["memberInquiryRes"] = "MemberInquiryRes";
        MessageType["welcomeEmail"] = "WelcomeEmail";
        MessageType["createRSVP"] = "CreateRSVP";
        MessageType["publicRSVP"] = "PublicRSVP";
        MessageType["unRSVP"] = "unRSVP";
        MessageType["serviceRequest"] = "ServiceRequest";
        MessageType["serviceProviderRequest"] = "ServiceProviderRequest";
    })(MessageType = Message.MessageType || (Message.MessageType = {}));
})(Message || (Message = {}));
exports.default = Message;
