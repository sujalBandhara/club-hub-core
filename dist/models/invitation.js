"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Invitation;
(function (Invitation) {
    var Type;
    (function (Type) {
        Type["NewMember"] = "NEW_MEMBER";
        Type["Guest"] = "GUEST_MEMBER";
    })(Type = Invitation.Type || (Invitation.Type = {}));
    var Status;
    (function (Status) {
        Status["Accepted"] = "ACCEPTED";
        Status["Pending"] = "PENDING";
    })(Status = Invitation.Status || (Invitation.Status = {}));
})(Invitation || (Invitation = {}));
exports.default = Invitation;
