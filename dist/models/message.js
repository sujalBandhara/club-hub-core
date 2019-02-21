"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Message;
(function (Message) {
    let SubjectType;
    (function (SubjectType) {
        SubjectType["Post"] = "POST";
        SubjectType["Event"] = "EVENT";
    })(SubjectType = Message.SubjectType || (Message.SubjectType = {}));
    let DeliveryType;
    (function (DeliveryType) {
        DeliveryType["Push"] = "PUSH";
        DeliveryType["Email"] = "EMAIL";
        DeliveryType["Text"] = "TEXT";
    })(DeliveryType = Message.DeliveryType || (Message.DeliveryType = {}));
})(Message = exports.Message || (exports.Message = {}));
exports.default = Message;
