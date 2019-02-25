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
// Constants
var constants_1 = require("../../constants");
// Internal Dependencies
var firebaseService_1 = require("../../Firebase/firebaseService");
var firebaseAuth_1 = require("../../Firebase/firebaseAuth");
var firebaseCommon_1 = require("../../Firebase/firebaseCommon");
firebaseCommon_1.initFirebase(constants_1.TEST_ENV);
// Interfaces
var types_1 = require("../../Firebase/types");
// Factories
var factories_1 = require("../factories");
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
    //------------------------------------------------------------------------------
    // Members
    //------------------------------------------------------------------------------ 
    describe('Members', function () {
        var _this = this;
        var testMemberID;
        var testMemberID2;
        before(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, factories_1.CreateMember()];
                    case 1:
                        testMemberID = _a.sent();
                        return [4 /*yield*/, factories_1.CreateMember()];
                    case 2:
                        testMemberID2 = _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        after(function () {
            return firebaseService_1.default.deleteResource(types_1.ResourcePaths.members + "/" + testMemberID);
        });
        describe('getMembers()', function () {
            var _this = this;
            it('should should fetch all members from Firebase as an admin', function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, firebaseService_1.default.getMembers(true).then(function (members) {
                            chai_1.expect(members.length).to.equal(2);
                        }).catch(function (err) {
                            chai_1.expect(err).to.not.exist;
                        })];
                });
            }); });
            it('should fetch all members from Firebase as a non admin', function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, firebaseService_1.default.getMembers(false).then(function (members) {
                            chai_1.expect(members.length).to.equal(2);
                        }).catch(function (err) {
                            chai_1.expect(err).to.not.exist;
                        })];
                });
            }); });
        });
        describe('getMemberByID()', function () {
            it('should fetch a member by their ID', function () {
                return firebaseService_1.default.getMemberByID(testMemberID).then(function (member) {
                    chai_1.expect(member.id).to.eq(testMemberID);
                    chai_1.expect(member.email).to.exist;
                    chai_1.expect(member.firstName).to.exist;
                    chai_1.expect(member.lastName).to.exist;
                    chai_1.expect(member.memberNumber).to.exist;
                    chai_1.expect(member.memberSince).to.exist;
                    chai_1.expect(member.phoneNumber).to.exist;
                    chai_1.expect(member.profileImage).to.exist;
                    chai_1.expect(member.showContactInfo).to.exist;
                    chai_1.expect(member.public).to.exist;
                    chai_1.expect(member.role).to.exist;
                }).catch(function (err) {
                    chai_1.expect(err).to.not.exist;
                });
            });
            it('should fail to fetch a member using an invalid ID', function () {
                return firebaseService_1.default.getMemberByID(invalidID).then(function (member) {
                    chai_1.expect(member).to.not.exist;
                }).catch(function (err) {
                    chai_1.expect(err).to.exist;
                });
            });
        });
        describe('updateMemberByID()', function () {
            it('should update a member using their ID', function () {
                var testName = 'testName';
                var updateData = { firstName: testName };
                return firebaseService_1.default.updateMemberByID(testMemberID, updateData).then(function (member) {
                    return firebaseService_1.default.getMemberByID(testMemberID);
                }).then(function (member) {
                    chai_1.expect(member.firstName).to.eq(testName);
                }).catch(function (err) {
                    chai_1.expect(err).to.not.exist;
                });
            });
        });
        describe('createMember()', function () {
            it('should create a new member', function () {
                var member = factories_1.CreateMemberFactory.build();
                member.id = "test";
                return firebaseService_1.default.createMember(member).then(function () {
                    return firebaseService_1.default.getMemberByID(member.id);
                }).then(function (member) {
                    chai_1.expect(member).to.exist;
                }).catch(function (err) {
                    chai_1.expect(err).to.not.exist;
                });
            });
        });
        describe('deleteMemberByID()', function () {
            it('should delete a member', function () {
                var member = factories_1.CreateMemberFactory.build();
                member.id = "test";
                return firebaseService_1.default.createMember(member).then(function () {
                    return firebaseService_1.default.getMemberByID(member.id);
                }).then(function (foundMember) {
                    return firebaseService_1.default.deleteMemberByID(foundMember.id);
                }).then(function () {
                    return firebaseService_1.default.getMemberByID(member.id);
                }).then(function (member) {
                    chai_1.expect(member).to.not.exist;
                }).catch(function (err) {
                    chai_1.expect(err.message).to.equal("[getMemberByID] - Failed to locate resource: members by identifer: test");
                });
            });
        });
    });
    describe('Member Metadata', function () {
        var _this = this;
        var testMemberID;
        var testMemberMetadataID;
        before(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, factories_1.CreateMember()];
                    case 1:
                        testMemberID = _a.sent();
                        return [4 /*yield*/, factories_1.CreateMemberMetadata(testMemberID)];
                    case 2:
                        testMemberMetadataID = _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        after(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, firebaseService_1.default.deleteResource(types_1.ResourcePaths.memberMetadata + "/" + testMemberMetadataID)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, firebaseService_1.default.deleteResource(types_1.ResourcePaths.members + "/" + testMemberID)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        describe('getMemberMetadataByID()', function () {
            it('should return the members metadata', function () {
                return firebaseService_1.default.getMemberMetadataByID(testMemberMetadataID).then(function (metadata) {
                    chai_1.expect(metadata.id).to.eq(testMemberMetadataID);
                    chai_1.expect(metadata.memberID).to.eq(testMemberID);
                    chai_1.expect(metadata.street).to.exist;
                    chai_1.expect(metadata.city).to.exist;
                    chai_1.expect(metadata.state).to.exist;
                    chai_1.expect(metadata.zip).to.exist;
                    chai_1.expect(metadata.initiationAmount).to.exist;
                    chai_1.expect(metadata.preferredVendors).to.exist;
                    chai_1.expect(metadata.parkingSpace).to.exist;
                    chai_1.expect(metadata.automotivePassion).to.exist;
                    chai_1.expect(metadata.carShowcase).to.exist;
                    chai_1.expect(metadata.significantOther).to.exist;
                    chai_1.expect(metadata.keyOnsite).to.exist;
                    chai_1.expect(metadata.shirtSize).to.exist;
                    chai_1.expect(metadata.hatSize).to.exist;
                    chai_1.expect(metadata.memberReference).to.exist;
                    chai_1.expect(metadata.membershipPlan).to.exist;
                }).catch(function (err) {
                    chai_1.expect(err).to.not.exist;
                });
            });
        });
        describe('getMemberMetadata()', function () {
            it('should get a members metadata using their memberID', function () {
                return firebaseService_1.default.getMemberMetadata(testMemberID).then(function (metadata) {
                    chai_1.expect(metadata.memberID).to.eq(testMemberID);
                }).catch(function (err) {
                    chai_1.expect(err).to.not.exist;
                });
            });
        });
        describe('updateMemberMetadata()', function () {
            var updateData = {
                street: 'Adams',
                zip: '98122',
            };
            it('should update a members metadata', function () {
                return firebaseService_1.default.updateMemberMetadata(testMemberID, updateData).then(function () {
                    return firebaseService_1.default.getMemberMetadata(testMemberID);
                }).then(function (metadata) {
                    chai_1.expect(metadata.memberID).to.eq(testMemberID);
                    chai_1.expect(metadata.street).to.eq(updateData.street);
                    chai_1.expect(metadata.zip).to.eq(updateData.zip);
                }).catch(function (err) {
                    chai_1.expect(err).to.not.exist;
                });
            });
        });
        describe('getMemberMetadata()', function () {
            it('should fail to get a members metadata using an invalid ID', function () {
                return firebaseService_1.default.getMemberMetadata(invalidID).then(function (metadata) {
                    chai_1.expect(metadata).to.not.exist;
                }).catch(function (err) {
                    chai_1.expect(err).to.exist;
                });
            });
        });
        describe('getAllMemberData()', function () {
            it('should get all member data including basic information and metadata', function () {
                return firebaseService_1.default.getAllMemberData(testMemberID).then(function (allMemberData) {
                    chai_1.expect(allMemberData.member).to.exist;
                    chai_1.expect(allMemberData.member.id).to.eq(testMemberID);
                    chai_1.expect(allMemberData.metadata).to.exist;
                    chai_1.expect(allMemberData.metadata.memberID).to.eq(testMemberID);
                });
            });
        });
    });
    //------------------------------------------------------------------------------
    // Events
    //------------------------------------------------------------------------------ 
    describe('Events', function () {
        var _this = this;
        var testMemberID;
        var testEventID;
        var testRsvpID;
        before(function () { return __awaiter(_this, void 0, void 0, function () {
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
        }); });
        after(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, firebaseService_1.default.deleteResource(types_1.ResourcePaths.events + "/" + testEventID)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, firebaseService_1.default.deleteResource(types_1.ResourcePaths.members + "/" + testMemberID)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        describe('getEvents()', function () {
            it('should fetch all events from Firebase', function () {
                return firebaseService_1.default.getEvents().then(function (events) {
                    chai_1.expect(events.length).to.be.equal(1);
                }).catch(function (err) {
                    chai_1.expect(err).to.not.exist;
                });
            });
        });
        describe('getEventByID()', function () {
            it('should fetch an event by its ID', function () {
                return firebaseService_1.default.getEventByID(testEventID).then(function (event) {
                    chai_1.expect(event.id).to.eq(testEventID);
                    chai_1.expect(event.street).to.exist;
                    chai_1.expect(event.city).to.exist;
                    chai_1.expect(event.state).to.exist;
                    chai_1.expect(event.zip).to.exist;
                    chai_1.expect(event.public).to.exist;
                    chai_1.expect(event.club).to.exist;
                    chai_1.expect(event.eventType).to.exist;
                    chai_1.expect(event.date).to.exist;
                    chai_1.expect(event.fullMonth).to.exist;
                    chai_1.expect(event.description).to.exist;
                    chai_1.expect(event.endTime).to.exist;
                    chai_1.expect(event.images).to.exist;
                    chai_1.expect(event.name).to.exist;
                    chai_1.expect(event.linkName).to.exist;
                    chai_1.expect(event.price).to.exist;
                    chai_1.expect(event.startTime).to.exist;
                }).catch(function (err) {
                    chai_1.expect(err).to.not.exist;
                });
            });
            it('should fail to fetch a member using an invalid ID', function () {
                return firebaseService_1.default.getEventByID(invalidID).then(function (event) {
                    chai_1.expect(event).to.not.exist;
                }).catch(function (err) {
                    chai_1.expect(err).to.exist;
                });
            });
        });
        describe('getEventByLinkName()', function () {
            var linkName = 'linkName';
            it('should fetch an event by its link name', function () {
                return firebaseService_1.default.getEventByLinkName(linkName).then(function (event) {
                    chai_1.expect(event.linkName).to.eq(linkName);
                }).catch(function (err) {
                    chai_1.expect(err).to.not.exist;
                });
            });
        });
        describe('updateEventByID()', function () {
            it('should update a member using their ID', function () {
                var testName = 'testName';
                var testStreet = '222 Adams';
                var updateData = {
                    name: testName,
                    street: testStreet
                };
                return firebaseService_1.default.updateEventByID(testEventID, updateData).then(function (event) {
                    return firebaseService_1.default.getEventByID(testEventID);
                }).then(function (event) {
                    chai_1.expect(event.name).to.eq(testName);
                    chai_1.expect(event.street).to.eq(testStreet);
                }).catch(function (err) {
                    chai_1.expect(err).to.not.exist;
                });
            });
        });
        describe('getEventsForMember()', function () {
            it('should grab all events where the user has a rsvp', function () {
                return firebaseService_1.default.getEventsForMember(testMemberID).then(function (events) {
                    chai_1.expect(events).to.exist;
                    chai_1.expect(events.length).to.eq(1);
                }).catch(function (err) {
                    chai_1.expect(err).to.not.exist;
                });
            });
            it('should fail to fetch all events for an invalid ID', function () {
                return firebaseService_1.default.getMemberVehicles(invalidID).catch(function (err) {
                    chai_1.expect(err).to.exist;
                });
            });
        });
        describe('deleteEventByID()', function () {
            it('should delete the event and all RSVPs to that event', function () {
                return firebaseService_1.default.deleteEventByID(testEventID).then(function () {
                    return firebaseService_1.default.getEventRsvpByID(testRsvpID);
                }).catch(function (err) {
                    chai_1.expect(err).to.exist;
                });
            });
        });
    });
    //------------------------------------------------------------------------------
    // Event RSVP's
    //------------------------------------------------------------------------------ 
    describe('Event RSVPs', function () {
        var _this = this;
        var testMemberID;
        var testMemberID2;
        var testEventID;
        var testRsvpID;
        before(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, factories_1.CreateMember()];
                    case 1:
                        testMemberID = _a.sent();
                        return [4 /*yield*/, factories_1.CreateMember()];
                    case 2:
                        testMemberID2 = _a.sent();
                        return [4 /*yield*/, factories_1.CreateEvent()];
                    case 3:
                        testEventID = _a.sent();
                        return [4 /*yield*/, factories_1.CreateRSVP(testMemberID, testEventID)];
                    case 4:
                        testRsvpID = _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        after(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, firebaseService_1.default.deleteResource(types_1.ResourcePaths.eventRsvps + "/" + testRsvpID)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, firebaseService_1.default.deleteResource(types_1.ResourcePaths.events + "/" + testEventID)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, firebaseService_1.default.deleteResource(types_1.ResourcePaths.members + "/" + testMemberID)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, firebaseService_1.default.deleteResource(types_1.ResourcePaths.members + "/" + testMemberID2)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        var testEventRsvpID;
        describe('getEventRsvps()', function () {
            it('should return an array of all event RSVPs', function () {
                return firebaseService_1.default.getEventRsvps(testEventID).then(function (eventRsvp) {
                    chai_1.expect(eventRsvp.length).to.eq(1);
                });
            });
            it('should fail to return event RSVPs with an invalid ID', function () {
                return firebaseService_1.default.getEventRsvps(invalidID).then(function (eventRsvps) {
                    chai_1.expect(eventRsvps.length).to.eq(0);
                });
            });
        });
        describe('rsvpMemberToEvent()', function () {
            it('should RSVP test user two to an event', function () {
                return firebaseService_1.default.rsvpMemberToEvent(testMemberID2, testEventID).then(function (eventRsvpID) {
                    return firebaseService_1.default.getEventsForMember(testMemberID);
                }).then(function (events) {
                    chai_1.expect(events.length).to.eq(1);
                });
            });
        });
        describe('getEventRsvpByID()', function () {
            it('should fetch an eventRSVP by ID', function () {
                return firebaseService_1.default.getEventRsvpByID(testRsvpID).then(function (eventRsvp) {
                    chai_1.expect(eventRsvp.id).to.eq(testRsvpID);
                }).catch(function (err) {
                    chai_1.expect(err).to.not.exist;
                });
            });
            it('should fail to fetch an eventRSVP using an invalid ID', function () {
                return firebaseService_1.default.getEventRsvpByID(invalidID).then(function (eventRsvp) {
                    chai_1.expect(eventRsvp).to.not.exist;
                }).catch(function (err) {
                    chai_1.expect(err).to.exist;
                });
            });
        });
        describe('getEventMembers()', function () {
            it('should return an array of members who have RSVPd for an event requested by an admin', function () {
                return firebaseService_1.default.getEventMembers(testEventID, true).then(function (members) {
                    chai_1.expect(members.length).to.eq(2);
                });
            });
            it('should return an array of members who have RSVPd for an event requested by a non admin', function () {
                return firebaseService_1.default.getEventMembers(testEventID, false).then(function (members) {
                    chai_1.expect(members.length).to.eq(2);
                });
            });
        });
        describe('removeMemberFromEvent()', function () {
            it('should remove a member from an events RSVP list', function () {
                return firebaseService_1.default.removeMemberFromEvent(testMemberID, testRsvpID).then(function () {
                    return firebaseService_1.default.getEventsForMember(testMemberID);
                }).then(function (events) {
                    chai_1.expect(events.length).to.eq(0);
                });
            });
        });
    });
    //------------------------------------------------------------------------------
    // Vehicles
    //------------------------------------------------------------------------------ 
    describe('Vehicles', function () {
        var _this = this;
        var testMemberID;
        var testVehicleID;
        var _vehicleID;
        before(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, factories_1.CreateMember()];
                    case 1:
                        testMemberID = _a.sent();
                        return [4 /*yield*/, factories_1.CreateVehicle(testMemberID)];
                    case 2:
                        testVehicleID = _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        after(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, firebaseService_1.default.deleteResource(types_1.ResourcePaths.vehicles + "/" + testVehicleID)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, firebaseService_1.default.deleteResource(types_1.ResourcePaths.members + "/" + testMemberID)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        describe('getVehicles()', function () {
            it('should fetch all vehicles from Firebase', function () {
                return firebaseService_1.default.getVehicles().then(function (vehicles) {
                    chai_1.expect(vehicles.length).to.be.equal(1);
                }).catch(function (err) {
                    chai_1.expect(err).to.not.exist;
                });
            });
        });
        describe('getVehicleByID()', function () {
            it('should fetch a vehicle by its ID', function () {
                return firebaseService_1.default.getVehicleByID(testVehicleID).then(function (vehicle) {
                    chai_1.expect(vehicle.id).to.eq(testVehicleID);
                    chai_1.expect(vehicle.club).to.exist;
                    chai_1.expect(vehicle.color).to.exist;
                    chai_1.expect(vehicle.image).to.exist;
                    chai_1.expect(vehicle.memberID).to.exist;
                    chai_1.expect(vehicle.model).to.exist;
                    chai_1.expect(vehicle.make).to.exist;
                    chai_1.expect(vehicle.year).to.exist;
                    chai_1.expect(vehicle.description).to.exist;
                }).catch(function (err) {
                    chai_1.expect(err).to.not.exist;
                });
            });
            it('should fail to fetch a vehicle using an invalid ID', function () {
                return firebaseService_1.default.getVehicleByID(invalidID).then(function (vehicle) {
                    chai_1.expect(vehicle).to.not.exist;
                }).catch(function (err) {
                    chai_1.expect(err).to.exist;
                });
            });
        });
        describe('updateVehicleByID()', function () {
            it('should update a vehicle using its ID', function () {
                var testColor = 'black';
                var updateData = { color: testColor };
                return firebaseService_1.default.updateVehicleByID(testVehicleID, updateData).then(function (vehicle) {
                    return firebaseService_1.default.getVehicleByID(testVehicleID);
                }).then(function (vehicle) {
                    chai_1.expect(vehicle.color).to.eq(testColor);
                }).catch(function (err) {
                    chai_1.expect(err).to.not.exist;
                });
            });
        });
        describe('getMemberedVehicles()', function () {
            it('should fetch all vehicles owned by the user', function () {
                return firebaseService_1.default.getMemberVehicles(testMemberID).then(function (vehicle) {
                    chai_1.expect(vehicle).to.exist;
                    chai_1.expect(vehicle.length).to.eq(1);
                }).catch(function (err) {
                    chai_1.expect(err).to.not.exist;
                });
            });
            it('should fail to fetch all vehicles owned by an invalid ID', function () {
                return firebaseService_1.default.getMemberVehicles(invalidID).catch(function (err) {
                    chai_1.expect(err).to.exist;
                });
            });
        });
    });
    //------------------------------------------------------------------------------
    // Services
    //------------------------------------------------------------------------------ 
    describe('Services', function () {
        var _this = this;
        var testMemberID;
        var testVehicleID;
        var testServiceID;
        var testProviderID;
        before(function () { return __awaiter(_this, void 0, void 0, function () {
            var futureDate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, factories_1.CreateMember()];
                    case 1:
                        testMemberID = _a.sent();
                        return [4 /*yield*/, factories_1.CreateVehicle(testMemberID)];
                    case 2:
                        testVehicleID = _a.sent();
                        futureDate = Date.now() + 10000 // Create a service in the future.
                        ;
                        return [4 /*yield*/, factories_1.CreateService(testVehicleID, testMemberID, futureDate.toString())];
                    case 3:
                        testServiceID = _a.sent();
                        return [4 /*yield*/, factories_1.CreateProvider()];
                    case 4:
                        testProviderID = _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        after(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, firebaseService_1.default.deleteResource(types_1.ResourcePaths.providers + "/" + testProviderID)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, firebaseService_1.default.deleteResource(types_1.ResourcePaths.services + "/" + testServiceID)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, firebaseService_1.default.deleteResource(types_1.ResourcePaths.vehicles + "/" + testVehicleID)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, firebaseService_1.default.deleteResource(types_1.ResourcePaths.members + "/" + testMemberID)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        describe('getServicesForMember', function () {
            it('should return all services a member has signed up for', function () {
                return firebaseService_1.default.getServicesForMember(testMemberID).then(function (services) {
                    chai_1.expect(services.length).to.eq(1);
                });
            });
        });
        describe('getServicesForVehicle', function () {
            it('should return all services a member has signed up for', function () {
                return __awaiter(this, void 0, void 0, function () {
                    var pastDate, pastServiceID;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                pastDate = Date.now() - 10000 // Create a service in the future.
                                ;
                                return [4 /*yield*/, factories_1.CreateService(testVehicleID, testMemberID, pastDate.toString())];
                            case 1:
                                pastServiceID = _a.sent();
                                return [2 /*return*/, firebaseService_1.default.getServicesForVehicle(testVehicleID).then(function (services) {
                                        chai_1.expect(services.length).to.eq(1);
                                    })];
                        }
                    });
                });
            });
        });
        describe('getServiceByID', function () {
            it('should fetch a service using its ID', function () {
                return firebaseService_1.default.getServiceByID(testServiceID).then(function (service) {
                    chai_1.expect(service).to.exist;
                    chai_1.expect(service.date).to.exist;
                    chai_1.expect(service.memberID).to.exist;
                    chai_1.expect(service.notes).to.exist;
                    chai_1.expect(service.providerID).to.exist;
                    chai_1.expect(service.status).to.exist;
                    chai_1.expect(service.time).to.exist;
                    chai_1.expect(service.vehicleID).to.exist;
                }).catch(function (err) {
                    chai_1.expect(err).to.exist;
                });
            });
            it('should fail to find a service using an invalid ID', function () {
                return firebaseService_1.default.getServiceByID(invalidID).then(function (service) {
                    chai_1.expect(service).to.not.exist;
                }).catch(function (err) {
                    chai_1.expect(err).to.exist;
                });
            });
        });
        describe('updateServiceByID', function () {
            it('should update a service', function () {
                var updateInfo = {
                    notes: 'Test notes',
                    providerID: testProviderID
                };
                return firebaseService_1.default.updateServiceByID(testServiceID, updateInfo).then(function () {
                    return firebaseService_1.default.getServiceByID(testServiceID);
                }).then(function (service) {
                    chai_1.expect(service.notes).to.eq(updateInfo.notes);
                    chai_1.expect(service.providerID).to.eq(testProviderID);
                }).catch(function (err) {
                    chai_1.expect(err).to.not.exist;
                });
            });
        });
        describe('postService', function () {
            it('should post new service', function () {
                var serviceID;
                var serviceData = factories_1.CreateServiceFactory.build({});
                return firebaseService_1.default.postService(serviceData).then(function (ref) {
                    chai_1.expect(ref).to.exist;
                    serviceID = ref;
                    return firebaseService_1.default.getServiceByID(ref);
                }).then(function (service) {
                    chai_1.expect(service.id).to.eq(serviceID);
                });
            });
        });
    });
    //------------------------------------------------------------------------------
    // Providers
    //------------------------------------------------------------------------------ 
    describe('Providers', function () {
        var _this = this;
        var testProviderID;
        before(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, factories_1.CreateProvider()];
                    case 1:
                        testProviderID = _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        after(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, firebaseService_1.default.deleteResource(types_1.ResourcePaths.providers + "/" + testProviderID)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        describe('getProviders()', function () {
            it('should fetch all providers', function () {
                return firebaseService_1.default.getProviders().then(function (providers) {
                    chai_1.expect(providers.length).to.eq(1);
                }).catch(function (err) {
                    chai_1.expect(err).to.not.exist;
                });
            });
        });
        describe('getProviderByID()', function () {
            it('should fetch a provider by its ID', function () {
                return firebaseService_1.default.getProviderByID(testProviderID).then(function (provider) {
                    chai_1.expect(provider).to.exist;
                    chai_1.expect(provider.companyName).to.exist;
                    chai_1.expect(provider.contactName).to.exist;
                    chai_1.expect(provider.phoneNumber).to.exist;
                    chai_1.expect(provider.email).to.exist;
                    chai_1.expect(provider.street).to.exist;
                    chai_1.expect(provider.city).to.exist;
                    chai_1.expect(provider.state).to.exist;
                    chai_1.expect(provider.zip).to.exist;
                }).catch(function (err) {
                    chai_1.expect(err).to.not.exist;
                });
            });
            it('should fail to fetch a provider using an invalid ID', function () {
                return firebaseService_1.default.getProviderByID(invalidID).then(function (provider) {
                    chai_1.expect(provider).to.not.exist;
                }).catch(function (err) {
                    chai_1.expect(err).to.exist;
                });
            });
        });
        describe('updateProviderByID()', function () {
            it('should update the provider and confirm changes', function () {
                var updateInfo = {
                    companyName: 'testProviderName2',
                    email: 'testProviderEmail'
                };
                return firebaseService_1.default.updateProviderByID(testProviderID, updateInfo).then(function () {
                    return firebaseService_1.default.getProviderByID(testProviderID);
                }).then(function (providerAfter) {
                    chai_1.expect(providerAfter.companyName).to.eq(updateInfo.companyName);
                    chai_1.expect(providerAfter.email).to.eq(updateInfo.email);
                }).catch(function (err) {
                    chai_1.expect(err).to.exist;
                });
            });
        });
    });
    describe('Public/Private events', function () {
        var _this = this;
        var testPublicEventID;
        var testPrivateEventID;
        before(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, factories_1.CreateEvent()];
                    case 1:
                        testPublicEventID = _a.sent();
                        return [4 /*yield*/, factories_1.CreatePrivateEvent()];
                    case 2:
                        testPrivateEventID = _a.sent();
                        return [4 /*yield*/, firebaseAuth_1.default.sharedInstance().auth().signOut()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        after(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, firebaseAuth_1.default.signInWithEmailAndPassword("test@gmail.com", "password")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, firebaseService_1.default.deleteResource(types_1.ResourcePaths.events + "/" + testPublicEventID)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, firebaseService_1.default.deleteResource(types_1.ResourcePaths.events + "/" + testPrivateEventID)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should fetch a public event when the auth object is null', function () {
            return firebaseService_1.default.getEventByID(testPublicEventID).then(function (event) {
                chai_1.expect(event).to.exist;
            });
        });
        it('should fail to fetch a private event when the auth object is null', function () {
            return firebaseService_1.default.getEventByID(testPrivateEventID).catch(function (err) {
                chai_1.expect(err).to.exist;
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
//# sourceMappingURL=firebaseService.test.js.map