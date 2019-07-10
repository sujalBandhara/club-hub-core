"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QueryFilter;
(function (QueryFilter) {
    var NestingType;
    (function (NestingType) {
        NestingType["and"] = "$and";
        NestingType["or"] = "$or";
    })(NestingType = QueryFilter.NestingType || (QueryFilter.NestingType = {}));
    var ComparisonOperator;
    (function (ComparisonOperator) {
        ComparisonOperator["eq"] = "$eq";
        ComparisonOperator["gt"] = "$gt";
        ComparisonOperator["gte"] = "$gte";
        ComparisonOperator["in"] = "$in";
        ComparisonOperator["lt"] = "$lt";
        ComparisonOperator["lte"] = "$lte";
        ComparisonOperator["ne"] = "$ne";
    })(ComparisonOperator = QueryFilter.ComparisonOperator || (QueryFilter.ComparisonOperator = {}));
    var ComparisonOperatorLabel;
    (function (ComparisonOperatorLabel) {
        ComparisonOperatorLabel["$eq"] = "=";
        ComparisonOperatorLabel["$gt"] = ">";
        ComparisonOperatorLabel["$gte"] = ">=";
        ComparisonOperatorLabel["$in"] = "in";
        ComparisonOperatorLabel["$lt"] = "<";
        ComparisonOperatorLabel["$lte"] = "<=";
        ComparisonOperatorLabel["$ne"] = "not equal";
    })(ComparisonOperatorLabel = QueryFilter.ComparisonOperatorLabel || (QueryFilter.ComparisonOperatorLabel = {}));
})(QueryFilter || (QueryFilter = {}));
exports.default = QueryFilter;
