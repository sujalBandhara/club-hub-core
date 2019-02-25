"use strict";
/* tslint:disable:only-arrow-functions */
/* tslint:disable:no-unused-expression */
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
// External Dependencies
require("mocha");
var chai_1 = require("chai");
// Internal Dependencies
// Constants
var constants_1 = require("../../constants");
var firebaseService_1 = require("../../Firebase/firebaseService");
var firebaseFunctions_1 = require("../../Firebase/firebaseFunctions");
firebaseFunctions_1.setFirebaseFunctionsURL(constants_1.TEST_ENV);
var firebaseAuth_1 = require("../../Firebase/firebaseAuth");
// Interfaces
var types_1 = require("../../Firebase/types");
// Factories
var factories_1 = require("../factories");
describe('HTTP Cloud Function Tests', function () {
    var _this = this;
    this.timeout(10000);
    var invalidID = 'invalidID';
    before(function () { return __awaiter(_this, void 0, void 0, function () {
        var member;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // Sign in as an admin user. This person never gets deleted.
                return [4 /*yield*/, firebaseAuth_1.default.signInWithEmailAndPassword("test@gmail.com", "password")];
                case 1:
                    // Sign in as an admin user. This person never gets deleted.
                    _a.sent();
                    return [4 /*yield*/, firebaseAuth_1.default.getCurrentMember()
                        // Clear the DB
                    ];
                case 2:
                    member = _a.sent();
                    // Clear the DB
                    return [4 /*yield*/, destroyData()];
                case 3:
                    // Clear the DB
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    after(function () {
        return destroyData();
    });
    describe('creatNewMember()', function () {
        it('should submit the request', function () {
            return __awaiter(this, void 0, void 0, function () {
                var member, metadata, res, json;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            member = factories_1.CreateMemberFactory.build();
                            metadata = factories_1.CreateMemberMetadataFactory.build();
                            return [4 /*yield*/, firebaseFunctions_1.default.createNewMemberRequest(member, metadata)];
                        case 1:
                            res = _a.sent();
                            chai_1.expect(res.status).to.equal(201);
                            return [4 /*yield*/, res.json()];
                        case 2:
                            json = _a.sent();
                            chai_1.expect(json.id).to.not.be.empty;
                            return [2 /*return*/];
                    }
                });
            });
        });
    });
    describe('createNewVehicle()', function () {
        it('should submit the request', function () {
            return __awaiter(this, void 0, void 0, function () {
                var vehicle, res, json;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            vehicle = factories_1.CreateVehicleFactory.build();
                            return [4 /*yield*/, firebaseFunctions_1.default.createNewVehicleRequest(vehicle)];
                        case 1:
                            res = _a.sent();
                            chai_1.expect(res.status).to.equal(201);
                            return [4 /*yield*/, res.json()];
                        case 2:
                            json = _a.sent();
                            chai_1.expect(json.id).to.not.be.empty;
                            return [2 /*return*/];
                    }
                });
            });
        });
    });
    describe('submitProviderRequest()', function () {
        it('should submit the request', function () {
            var provider = factories_1.createProviderFactory.build();
            return firebaseFunctions_1.default.submitNewProviderRequest(provider).then(function (resp) {
                chai_1.expect(resp.status).to.equal(200);
            });
        });
    });
    describe('submitPublicMemberRSVP()', function () {
        it('should submit the request', function () {
            return __awaiter(this, void 0, void 0, function () {
                var eventID;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, factories_1.CreateEvent()];
                        case 1:
                            eventID = _a.sent();
                            return [2 /*return*/, firebaseFunctions_1.default.submitPublicMemberRSVP('testName', 'test@gmail.com', true, eventID).then(function (resp) {
                                    chai_1.expect(resp.status).to.equal(200);
                                })];
                    }
                });
            });
        });
    });
    describe('sendEventPushRequest()', function () {
        it('should submit the request', function () {
            return __awaiter(this, void 0, void 0, function () {
                var eventID;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, factories_1.CreateEvent()];
                        case 1:
                            eventID = _a.sent();
                            return [2 /*return*/, firebaseFunctions_1.default.sendPushNotificationsForEvent(eventID).then(function (resp) {
                                    chai_1.expect(resp.status).to.equal(200);
                                })];
                    }
                });
            });
        });
    });
});
//------------------------------------------------------------------------------
// Helper Methods
//------------------------------------------------------------------------------
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
                    case 0:
                        if (!(key != 'admins')) return [3 /*break*/, 2];
                        return [4 /*yield*/, firebaseService_1.default.deleteResource("/" + key)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/];
    });
}); };
//# sourceMappingURL=firebaseFunctions.test.js.map