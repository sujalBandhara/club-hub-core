"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Relation;
(function (Relation) {
    var RelationType;
    (function (RelationType) {
        RelationType["Parent"] = "PARENT";
        RelationType["Child"] = "CHILD";
        RelationType["Spouse"] = "SPOUSE";
        RelationType["Sibling"] = "SIBLING";
    })(RelationType = Relation.RelationType || (Relation.RelationType = {}));
})(Relation || (Relation = {}));
exports.default = Relation;
