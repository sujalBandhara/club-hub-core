"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User;
(function (User) {
    var DefaultUserGroups;
    (function (DefaultUserGroups) {
        DefaultUserGroups["AllAdmins"] = "All Admins";
        DefaultUserGroups["AllMembers"] = "All Members";
    })(DefaultUserGroups = User.DefaultUserGroups || (User.DefaultUserGroups = {}));
    var MaritalStatus;
    (function (MaritalStatus) {
        MaritalStatus["Single"] = "SINGLE";
        MaritalStatus["InRelationship"] = "IN_RELATIONSHIP";
        MaritalStatus["Married"] = "MARRIED";
        MaritalStatus["Divorced"] = "DIVORCED";
        MaritalStatus["Widowed"] = "WIDOWED";
    })(MaritalStatus = User.MaritalStatus || (User.MaritalStatus = {}));
    var MemberStatus;
    (function (MemberStatus) {
        MemberStatus["Prospect"] = "PROSPECT";
        MemberStatus["Active"] = "ACTIVE";
        MemberStatus["Lapsed"] = "LAPSED";
        MemberStatus["Guest"] = "GUEST";
    })(MemberStatus = User.MemberStatus || (User.MemberStatus = {}));
})(User || (User = {}));
exports.default = User;
