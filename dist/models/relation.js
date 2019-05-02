"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Relation;
(function (Relation) {
    var RelationType;
    (function (RelationType) {
        RelationType["Parent"] = "parent";
        RelationType["Child"] = "child";
        RelationType["Spouse"] = "spouse";
        RelationType["Sibling"] = "sibling";
    })(RelationType = Relation.RelationType || (Relation.RelationType = {}));
})(Relation || (Relation = {}));
exports.default = Relation;
