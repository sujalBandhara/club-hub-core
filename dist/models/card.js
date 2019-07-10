"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Card;
(function (Card) {
    var Brand;
    (function (Brand) {
        Brand["AmericanExpress"] = "American Express";
        Brand["DinersClub"] = "Diners Club";
        Brand["Discover"] = "Discover";
        Brand["JCB"] = "JCB";
        Brand["MasterCard"] = "Master Card";
        Brand["UnionPay"] = "Union Pay";
        Brand["Visa"] = "Visa";
        Brand["Unknown"] = "Unknown";
    })(Brand = Card.Brand || (Card.Brand = {}));
    var Funding;
    (function (Funding) {
        Funding["Credit"] = "Credit";
        Funding["Debit"] = "Debit";
        Funding["Prepaid"] = "Prepaid";
        Funding["Unknown"] = "Unknown";
    })(Funding = Card.Funding || (Card.Funding = {}));
    var CVCCheck;
    (function (CVCCheck) {
        CVCCheck["Pass"] = "Pass";
        CVCCheck["Fail"] = "Fail";
        CVCCheck["Unavailable"] = "Unavailable";
        CVCCheck["Unchecked"] = "Unchecked";
    })(CVCCheck = Card.CVCCheck || (Card.CVCCheck = {}));
})(Card || (Card = {}));
exports.default = Card;
