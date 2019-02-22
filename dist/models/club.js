"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Club;
(function (Club) {
    var Type;
    (function (Type) {
        Type["Car"] = "CAR";
        Type["Golf"] = "GOLF";
    })(Type = Club.Type || (Club.Type = {}));
    Club.defaultMembershipTypes = ['EQUITY', 'SPOUSE', 'PARENT'];
    Club.defaultEventTypes = ['Member', 'Outside', 'Club'];
})(Club = exports.Club || (exports.Club = {}));
exports.default = Club;
