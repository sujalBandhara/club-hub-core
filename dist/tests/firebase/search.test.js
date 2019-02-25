"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
var chai_1 = require("chai");
// Internal Dependencies
var search_1 = require("../../Firebase/search");
var factories_1 = require("../factories");
var types_1 = require("../../Firebase/types");
var firebaseService_1 = require("../../Firebase/firebaseService");
var testName1 = "Washington";
var testName2 = "California";
var testName3 = "Arizona";
var testMake1 = "Jeep";
var testMake2 = "Porsche";
var testMake3 = "Ferrari";
describe('Firebase Resource Tests', function () {
    var _this = this;
    this.timeout(3000);
    var searchIndex;
    before(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, destroyData()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, buildMember(testName1, testMake1)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, buildMember(testName2, testMake2)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, buildMember(testName3, testMake3)];
                case 4:
                    _a.sent();
                    searchIndex = new search_1.default();
                    return [4 /*yield*/, searchIndex.BuildSearchIndex(true)];
                case 5:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    after(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, destroyData()];
        });
    }); });
    describe('Search', function () {
        it('should search for member one', function () {
            var search = testName1.substring(0, 4);
            var members = searchIndex.Search(search);
            chai_1.expect(members.length).to.equal(1);
        });
        it('should search for member one', function () {
            var search = testName1.substring(0, 4);
            var members = searchIndex.Search(search);
            chai_1.expect(members.length).to.equal(1);
        });
        it('should search for member two', function () {
            var search = testName2.substring(0, 4);
            var members = searchIndex.Search(search);
            chai_1.expect(members.length).to.equal(1);
        });
        it('should search for member three', function () {
            var search = testName3.substring(0, 4);
            var members = searchIndex.Search(search);
            chai_1.expect(members.length).to.equal(1);
        });
        it('should search for vehicle one', function () {
            var search = testMake1.substring(0, 3);
            var members = searchIndex.Search(search);
            chai_1.expect(members.length).to.equal(1);
        });
        it('should search for vehicle two', function () {
            var search = testMake2.substring(0, 3);
            var members = searchIndex.Search(search);
            chai_1.expect(members.length).to.equal(1);
        });
        it('should search for vehicle three', function () {
            var search = testMake3.substring(0, 3);
            var members = searchIndex.Search(search);
            chai_1.expect(members.length).to.equal(1);
        });
    });
});
//------------------------------------------------------------------------------
// Helper Methods
//------------------------------------------------------------------------------
var buildMember = function (testName, testMake) { return __awaiter(_this, void 0, void 0, function () {
    var memberID1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, factories_1.CreateMemberWithName(testName)];
            case 1:
                memberID1 = _a.sent();
                return [4 /*yield*/, factories_1.CreateVehicleWithMake(memberID1, testMake)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
/**
 * Cleans the test Firebase DB.
 */
var destroyData = function () { return __awaiter(_this, void 0, void 0, function () {
    var _this = this;
    var resourceKeys;
    return __generator(this, function (_a) {
        resourceKeys = Object.keys(types_1.ResourcePaths);
        resourceKeys.forEach(function (key) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, firebaseService_1.default.deleteResource("/" + key)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/];
    });
}); };
//# sourceMappingURL=search.test.js.map