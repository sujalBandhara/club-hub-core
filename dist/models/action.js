"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Action;
(function (Action) {
    var Type;
    (function (Type) {
        Type["Reservation"] = "Reservation";
        Type["CancelReservation"] = "Cancel Reservation";
        Type["Welcome"] = "New User";
        Type["Application"] = "Membership Application";
        Type["MembershipInquiry"] = "Membership Inquiry";
        Type["MembershipInquiryRes"] = "Membership Inquiry Response";
        Type["PublicRsvp"] = "Public Event RSVP";
        Type["NewProviderRequest"] = "Service Provider Request";
        Type["InvalidCredentialsAdminNotification"] = "Invalid Credentials Admin Notification";
    })(Type = Action.Type || (Action.Type = {}));
})(Action || (Action = {}));
exports.default = Action;
