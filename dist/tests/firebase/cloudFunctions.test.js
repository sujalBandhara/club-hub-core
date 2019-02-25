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
// Internal Dependencies
var firebaseService_1 = require("../../Firebase/firebaseService");
var firebaseAuth_1 = require("../../Firebase/firebaseAuth");
// Constants
var constants_1 = require("../../constants");
var firebaseCommon_1 = require("../../Firebase/firebaseCommon");
firebaseCommon_1.initFirebase(constants_1.TEST_ENV);
// Interfaces
var types_1 = require("../../Firebase/types");
// Factories
var factories_1 = require("../factories");
var firebaseService_2 = require("../../Firebase/firebaseService");
describe('Firebase Resource Tests', function () {
    var _this = this;
    this.timeout(30000);
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
                    return [4 /*yield*/, firebaseAuth_1.default.getCurrentMember()];
                case 2:
                    member = _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    afterEach(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/];
        });
    }); });
    //------------------------------------------------------------------------------
    // Cloud Function Triggers
    //------------------------------------------------------------------------------ 
    describe('onMemberCreated', function () {
        it('should trigger the on create member cloud function', function () {
            return __awaiter(this, void 0, void 0, function () {
                var testMemberID;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, factories_1.CreateMember()];
                        case 1:
                            testMemberID = _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        });
    });
    describe('onMemberUpdated', function () {
        it('should trigger the on update member cloud function', function () {
            return __awaiter(this, void 0, void 0, function () {
                var testMemberID, updateInfo, newMember;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, factories_1.CreateMember()];
                        case 1:
                            testMemberID = _a.sent();
                            updateInfo = { firstName: "new-first-name" };
                            return [4 /*yield*/, firebaseService_2.default.updateMemberByID(testMemberID, updateInfo)];
                        case 2:
                            newMember = _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        });
    });
    describe('onMemberDeleted', function () {
        it('should trigger the on delete member cloud function', function () {
            return __awaiter(this, void 0, void 0, function () {
                var testMemberID, memberResource;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, factories_1.CreateMember()];
                        case 1:
                            testMemberID = _a.sent();
                            memberResource = types_1.ResourcePaths.members + "/" + testMemberID;
                            return [4 /*yield*/, firebaseService_2.default.deleteResource(memberResource)];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        });
    });
    describe('onVehicleDeleted', function () {
        it('should trigger the on delete member cloud function', function () {
            return __awaiter(this, void 0, void 0, function () {
                var testMemberID, testVehicleID, vehicleResource;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, factories_1.CreateMember()];
                        case 1:
                            testMemberID = _a.sent();
                            return [4 /*yield*/, factories_1.CreateVehicle(testMemberID)];
                        case 2:
                            testVehicleID = _a.sent();
                            vehicleResource = types_1.ResourcePaths.vehicles + "/" + testVehicleID;
                            return [4 /*yield*/, firebaseService_2.default.deleteResource(vehicleResource)];
                        case 3:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        });
    });
    describe('onServiceCreated', function () {
        it('should trigger the on delete member cloud function', function () {
            return __awaiter(this, void 0, void 0, function () {
                var testMemberID, testVehicleID, testServiceID, serviceResource;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, factories_1.CreateMember()];
                        case 1:
                            testMemberID = _a.sent();
                            return [4 /*yield*/, factories_1.CreateVehicle(testMemberID)];
                        case 2:
                            testVehicleID = _a.sent();
                            return [4 /*yield*/, factories_1.CreateService(testVehicleID, testMemberID)];
                        case 3:
                            testServiceID = _a.sent();
                            serviceResource = types_1.ResourcePaths.services + "/" + testServiceID;
                            return [4 /*yield*/, firebaseService_2.default.deleteResource(serviceResource)];
                        case 4:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        });
    });
    describe('onRsvpCreated', function () {
        it('should trigger the on delete member cloud function', function () {
            return __awaiter(this, void 0, void 0, function () {
                var testMemberID, testEventID, testRsvpID;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, factories_1.CreateMember()];
                        case 1:
                            testMemberID = _a.sent();
                            return [4 /*yield*/, factories_1.CreateEvent()];
                        case 2:
                            testEventID = _a.sent();
                            return [4 /*yield*/, factories_1.CreateRSVP(testMemberID, testEventID)];
                        case 3:
                            testRsvpID = _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        });
    });
    describe('onRsvpCreatedDeleted', function () {
        it('should trigger the on delete member cloud function', function () {
            return __awaiter(this, void 0, void 0, function () {
                var testMemberID, testEventID, testRsvpID, serviceResource;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, factories_1.CreateMember()];
                        case 1:
                            testMemberID = _a.sent();
                            return [4 /*yield*/, factories_1.CreateEvent()];
                        case 2:
                            testEventID = _a.sent();
                            return [4 /*yield*/, factories_1.CreateRSVP(testMemberID, testEventID)];
                        case 3:
                            testRsvpID = _a.sent();
                            serviceResource = types_1.ResourcePaths.eventRsvps + "/" + testRsvpID;
                            return [4 /*yield*/, firebaseService_2.default.deleteResource(serviceResource)];
                        case 4:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        });
    });
    //------------------------------------------------------------------------------
    // Cloud Function HTTP Request
    //------------------------------------------------------------------------------ 
    describe('onPublicRsvp', function () {
        it('should trigger the on delete member cloud function', function () {
            // testMemberID = await CreateMember()
        });
    });
    describe('onPublicRsvp', function () {
        it('should trigger the on delete member cloud function', function () {
            // testMemberID = await CreateMember()
        });
    });
    describe('submitNewProviderRequest', function () {
        it('should trigger the on delete member cloud function', function () {
            // testMemberID = await CreateMember()
        });
    });
    describe('submitNewMemberRequest', function () {
        it('should trigger the on delete member cloud function', function () {
            // testMemberID = await CreateMember()
        });
    });
    describe('submitNewMemberRequest', function () {
        it('should trigger the on delete member cloud function', function () {
            // testMemberID = await CreateMember()
        });
    });
    describe('sendEventPushNotifications', function () {
        it('should trigger the on delete member cloud function', function () {
            // testMemberID = await CreateMember()
        });
    });
    describe('uploadEventImage', function () {
        it('should trigger the on delete member cloud function', function () {
            // testMemberID = await CreateMember()
        });
    });
    describe('uploadProfileImage', function () {
        it('should trigger the on delete member cloud function', function () {
            // testMemberID = await CreateMember()
        });
    });
});
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
//# sourceMappingURL=cloudFunctions.test.js.map