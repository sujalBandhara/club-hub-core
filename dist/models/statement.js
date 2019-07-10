"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Statement;
(function (Statement) {
    var Status;
    (function (Status) {
        Status["Draft"] = "Draft";
        Status["Open"] = "Open";
        Status["Paid"] = "Paid";
        Status["Uncollectible"] = "Uncollectible";
        Status["Void"] = "Void";
    })(Status = Statement.Status || (Statement.Status = {}));
    var BillingMethod;
    (function (BillingMethod) {
        BillingMethod["ChargeAutomatically"] = "Charge Automatically";
        BillingMethod["SendInvoice"] = "Send Invoice";
    })(BillingMethod = Statement.BillingMethod || (Statement.BillingMethod = {}));
})(Statement || (Statement = {}));
exports.default = Statement;
