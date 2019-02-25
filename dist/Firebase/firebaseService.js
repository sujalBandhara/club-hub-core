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
Object.defineProperty(exports, "__esModule", { value: true });
// External Dependencies
var Bluebird = require("bluebird");
var firebaseCommon_1 = require("./firebaseCommon");
var types_1 = require("./types");
// Raven (Sentry Client)
var Raven = require('raven-js');
// Constants
var databaseEvent = 'value';
var NumberType;
(function (NumberType) {
    NumberType[NumberType["Vehicle"] = 1] = "Vehicle";
    NumberType[NumberType["Member"] = 2] = "Member";
})(NumberType = exports.NumberType || (exports.NumberType = {}));
var ClubType;
(function (ClubType) {
    ClubType["All"] = "All";
    ClubType["Redmond"] = "Redmond";
    ClubType["Scottsdale"] = "Scottsdale";
})(ClubType = exports.ClubType || (exports.ClubType = {}));
/**
 * Wrapper for the Firebase SDK.
 */
var FirebaseService = /** @class */ (function () {
    function FirebaseService() {
    }
    //------------------------------------------------------------------------------
    // Members API
    //------------------------------------------------------------------------------ 
    /**
     * Creates a new member in Firebase.
     */
    FirebaseService.createMember = function (memberData) {
        var resourcePath = types_1.ResourcePaths.members + "/" + memberData.id;
        return this.createResourceWithID(resourcePath, memberData);
    };
    /**
     * Creates a new member in Firebase.
     */
    FirebaseService.createMemberMetadata = function (memberMetadata) {
        var resourcePath = types_1.ResourcePaths.memberMetadata;
        return this.createResource(resourcePath, memberMetadata);
    };
    /**
     * Returns a array of all member's in Firebase.
     */
    FirebaseService.getMembers = function (isAdmin) {
        var _this = this;
        var methodName = '[getMembers] -';
        var ref;
        if (isAdmin) {
            ref = firebaseCommon_1.FirebaseApp.database().ref(types_1.ResourcePaths.members);
        }
        else {
            ref = firebaseCommon_1.FirebaseApp.database().ref(types_1.ResourcePaths.members).orderByChild('public').equalTo(true);
        }
        return this.fetchAll(methodName, ref).then(function (members) {
            members.sort(_this.compare);
            return members.filter(function (member) {
                return member.role == "Member" || member.role == "Social";
            }).sort(function (memberOne, memberTwo) {
                if (memberOne.firstName < memberTwo.firstName)
                    return -1;
                if (memberOne.firstName > memberTwo.firstName)
                    return 1;
                return 0;
            });
        }).catch(function (error) {
            Raven.captureException(error);
            throw error;
        });
    };
    /**
     * Returns a array of all member's in Firebase with their vehicles.
     */
    FirebaseService.getMembersWithVehicles = function (isAdmin) {
        var methodName = '[getMembersWithVehicles] -';
        return FirebaseService.getMembers(isAdmin).then(function (members) {
            return Bluebird.map(members, function (member) {
                return FirebaseService.getMemberVehicles(member.id).then(function (vehicles) {
                    var memberWithVehicles = member;
                    memberWithVehicles.vehicles = vehicles;
                    return memberWithVehicles;
                });
            });
        }).catch(function (error) {
            Raven.captureException(error);
            throw error;
        });
    };
    /**
     * Returns a single member.
     * @param memberID The ID of the member.
     */
    FirebaseService.getMemberByID = function (memberID) {
        var methodName = '[getMemberByID] -';
        var ref = firebaseCommon_1.FirebaseApp.database().ref(types_1.ResourcePaths.members);
        return this.fetchByID(methodName, ref, memberID);
    };
    /**
     * Returns a single member.
     * @param number The number of the member.
     */
    FirebaseService.getMemberByNumber = function (number) {
        var methodName = '[getMemberByNumber] -';
        var tableKey = 'memberNumber';
        var ref = firebaseCommon_1.FirebaseApp.database().ref(types_1.ResourcePaths.members).ref.orderByChild(tableKey).equalTo(number);
        return this.fetchAll(methodName, ref);
    };
    /**
     * Updates a member.
     * @param memberID The ID of the member.
     * @param updateInfo The update info.
     * Note: There is support to update all instance in the DB:
     * https://firebase.google.com/docs/database/web/read-and-write
     * search: writeNewPost
     */
    FirebaseService.updateMemberByID = function (memberID, updateInfo) {
        var methodName = '[updateMemberByID] -';
        var ref = firebaseCommon_1.FirebaseApp.database().ref(types_1.ResourcePaths.members + "/" + memberID);
        return ref.update(updateInfo).catch(function (err) {
            Raven.captureException(err);
            throw err;
        });
    };
    /**
     * Returns a boolean indicating if a member number has already been taken.
     * @param memberID
     * @param memberNumber
     */
    FirebaseService.checkForMemberNumber = function (memberID, memberNumber) {
        if (!memberNumber)
            return Promise.resolve(false);
        return this.getMemberByNumber(memberNumber).then(function (member) {
            if (member && member.length && member[0].id !== memberID) {
                return Promise.resolve(true);
            }
            return Promise.resolve(false);
        });
    };
    /**
     * Deletes a member
     * @param memberID The ID of the member.
     */
    FirebaseService.deleteMemberByID = function (memberID) {
        var methodName = '[deleteMemberByID] -';
        var eventPath = types_1.ResourcePaths.members + "/" + memberID;
        return this.deleteResource(eventPath).catch(function (error) {
            Raven.captureException(error);
            throw error;
        });
    };
    /**
     * Fetches all member data. Includes basic information and metadata.
     * @param memberID The ID of the member.
     */
    FirebaseService.getAllMemberData = function (memberID) {
        var _this = this;
        var basicMemberData;
        var memberMetadata;
        return this.getMemberByID(memberID).then(function (member) {
            basicMemberData = member;
            return _this.getMemberMetadata(memberID);
        }).then(function (metadata) {
            memberMetadata = metadata;
            return {
                member: basicMemberData,
                metadata: memberMetadata
            };
        }).catch(function (error) {
            Raven.captureException(error);
            throw error;
        });
    };
    //------------------------------------------------------------------------------
    // Members Metadata API
    //------------------------------------------------------------------------------ 
    /**
     * Returns the metadata for a member.
     */
    FirebaseService.getMemberMetadata = function (memberID) {
        var _this = this;
        var methodName = '[getMemberMetadata] -';
        var metadataRef = firebaseCommon_1.FirebaseApp.database().ref(types_1.ResourcePaths.memberMetadata);
        return metadataRef.orderByChild(types_1.QueryValues.memberID).equalTo(memberID).once(databaseEvent).then(function (res) {
            return _this.addDataToArray(res.val())[0];
        }).catch(function (error) {
            Raven.captureException(error);
            throw error;
        });
    };
    /**
     * Updates a members metadata.
     * @param memberID The ID of the member.
     * @param updateInfo The update info.
     */
    FirebaseService.updateMemberMetadata = function (memberID, updateInfo) {
        var methodName = '[updateMemberMetadata] -';
        return this.getMemberMetadata(memberID).then(function (metadata) {
            var ref = firebaseCommon_1.FirebaseApp.database().ref(types_1.ResourcePaths.memberMetadata + "/" + metadata.id);
            return ref.update(updateInfo);
        }).catch(function (error) {
            Raven.captureException(error);
            throw error;
        });
    };
    /**
     * Returns metadata for member using the ID of the stored metadata.
     * @param metadataID The ID of the metadata
     */
    FirebaseService.getMemberMetadataByID = function (metadataID) {
        var methodName = '[getMemberMetadataByID] -';
        var metadataRef = firebaseCommon_1.FirebaseApp.database().ref(types_1.ResourcePaths.memberMetadata);
        return this.fetchByID(methodName, metadataRef, metadataID);
    };
    //------------------------------------------------------------------------------
    // Event API
    //------------------------------------------------------------------------------ 
    /**
     * Creates a new event in Firebase.
     */
    FirebaseService.createEvent = function (eventData) {
        var resourcePath = types_1.ResourcePaths.events;
        return this.createResource(resourcePath, eventData);
    };
    /**
     * Returns an array of all events in Firebase.
     */
    FirebaseService.getEvents = function () {
        var methodName = '[getEvents] -';
        var ref = firebaseCommon_1.FirebaseApp.database().ref(types_1.ResourcePaths.events);
        return this.fetchAll(methodName, ref);
    };
    /**
     * Returns a single event.
     * @param eventID The ID of the event.
     */
    FirebaseService.getEventByID = function (eventID) {
        var _this = this;
        var methodName = '[getEventByID] -';
        var ref = firebaseCommon_1.FirebaseApp.database().ref(types_1.ResourcePaths.events + "/" + eventID);
        return ref.once(databaseEvent).then(function (snapshot) {
            if (!snapshot.val()) {
                throw new Error(types_1.ErrorTypes.RESOURCE_NOT_FOUND);
            }
            return _this.addIdToFirebaseObject(snapshot.val(), eventID);
        }).catch(function (error) {
            Raven.captureException(error);
            throw error;
        });
    };
    /**
     * Updates an event.
     * @param eventID The ID of the member.
     * @param updateInfo The update info.
     */
    FirebaseService.updateEventByID = function (eventID, updateInfo) {
        var methodName = '[updateEventByID] -';
        var ref = firebaseCommon_1.FirebaseApp.database().ref(types_1.ResourcePaths.events + "/" + eventID);
        return ref.update(updateInfo).catch(function (error) {
            Raven.captureException(error);
            throw error;
        });
    };
    /**
     * Fetches an event using it's link name.
     */
    FirebaseService.getEventByLinkName = function (linkName) {
        var _this = this;
        var methodName = '[getEventByLinkName] -';
        var tableKey = 'linkName';
        var ref = firebaseCommon_1.FirebaseApp.database().ref(types_1.ResourcePaths.events).orderByChild(tableKey).equalTo(linkName);
        return ref.once(databaseEvent).then(function (snapshot) {
            return _this.addDataToArray(snapshot.val())[0];
        }).catch(function (err) {
            Raven.captureException(err);
            throw err;
        });
    };
    /**
     * Deletes a single event and all RSVPs.
     * @param eventID The ID of the event.
     */
    FirebaseService.deleteEventByID = function (eventID) {
        var _this = this;
        var methodName = '[deleteEventByID] -';
        var eventPath = types_1.ResourcePaths.events + "/" + eventID;
        return this.getEventRsvps(eventID).then(function (rsvps) {
            return Bluebird.map(rsvps, function (rsvp) {
                return _this.deleteResource(types_1.ResourcePaths.eventRsvps + "/" + rsvp.id);
            });
        }).then(function () {
            return _this.deleteResource(eventPath);
        }).catch(function (error) {
            Raven.captureException(error);
            throw error;
        });
    };
    /**
     * Returns a list of events that a member has RSVP'd to.
     * @param memberID The ID of the member.
     */
    FirebaseService.getEventsForMember = function (memberID) {
        var _this = this;
        var methodName = '[getEventsForMember] -';
        var eventRsvpRef = firebaseCommon_1.FirebaseApp.database().ref(types_1.ResourcePaths.eventRsvps);
        return eventRsvpRef.orderByChild(types_1.QueryValues.memberID).equalTo(memberID).once(databaseEvent).then(function (res) {
            var data = _this.addDataToArray(res.val());
            return Bluebird.map(data, function (snap) {
                return _this.getEventByID(snap.eventID);
            });
        }).catch(function (error) {
            Raven.captureException(error);
            throw error;
        });
    };
    /**
     * Returns an array of members who have RSVPd to a specified event.
     * @param eventID The ID of the event.
     */
    FirebaseService.getEventMembers = function (eventID, isAdmin) {
        var _this = this;
        var methodName = '[getEventMembers] -';
        var ref = firebaseCommon_1.FirebaseApp.database().ref(types_1.ResourcePaths.eventRsvps);
        var result = [];
        return this.getEventRsvps(eventID).then(function (eventRSVPs) {
            return Bluebird.map(eventRSVPs, function (rsvp) {
                return Bluebird.all([
                    _this.getMemberByID(rsvp.memberID),
                    _this.getMemberVehicles(rsvp.memberID)
                ]).then(function (res) {
                    var member = res[0];
                    member.vehicles = res[1];
                    if (isAdmin || member.public) {
                        result.push(member);
                    }
                });
            }).then(function () { return result; });
        }).catch(function (error) {
            Raven.captureException(error);
            throw _this.handleError(error, methodName, ref, eventID);
        });
    };
    //------------------------------------------------------------------------------
    // EventRSVPs API
    //------------------------------------------------------------------------------ 
    /**
     * Creates an eventRsvp using a member and event.
     * @param memberID The member ID that is RSVPing.
     * @param eventID The ID of the event.
     */
    FirebaseService.rsvpMemberToEvent = function (memberID, eventID) {
        var methodName = '[rsvpMemberToEvent] -';
        var eventRSVP = { memberID: memberID, eventID: eventID };
        return this.createResource(types_1.ResourcePaths.eventRsvps, eventRSVP);
    };
    /**
     * Un-RSVPs a member to an event.
     * @param memberID The member ID that is RSVPing.
     * @param eventID The ID of the event.
     */
    FirebaseService.removeMemberFromEvent = function (memberID, eventRsvpID) {
        var methodName = '[removeMemberFromEvent] -';
        var path = types_1.ResourcePaths.eventRsvps + "/" + eventRsvpID;
        return this.deleteResource(path);
    };
    /**
     * Returns an array of all event RSVPs for a specified event.
     * @param eventID The ID of the event.
     */
    FirebaseService.getEventRsvps = function (eventID) {
        var _this = this;
        var methodName = '[getEventRsvps] -';
        var ref = firebaseCommon_1.FirebaseApp.database().ref(types_1.ResourcePaths.eventRsvps);
        var errorMessage = "Error: Failed to locate resource at ref.orderByChild.equalTo.once.then";
        return ref.orderByChild(types_1.QueryValues.eventID).equalTo(eventID).once(databaseEvent).then(function (snapshot) {
            if (!snapshot.val()) {
                return [];
            }
            return _this.addDataToArray(snapshot.val());
        }).catch(function (error) {
            Raven.captureException(error);
            /**
             * Adding this guard here to prevent the error from throwing.
             * The eventRSVP table won't have any values until someone RSVPs.
             * This means that if we fetch an events RSVPs when none are present,
             * the 'resource not found' error will be thrown. In this case we return null to prevent the error.
             * TODO A better way of dealing with this.
             */
            if (error.message === types_1.ErrorTypes.RESOURCE_NOT_FOUND)
                return [];
            throw _this.handleError(error, methodName, ref, eventID);
        });
    };
    /**
     * Fetches an eventRSVP by it's ID.
     * @param rsvpID The ID of the eventRsvp.
     */
    FirebaseService.getEventRsvpByID = function (rsvpID) {
        var methodName = '[getEventRsvpByID] -';
        var ref = firebaseCommon_1.FirebaseApp.database().ref(types_1.ResourcePaths.eventRsvps);
        return this.fetchByID(methodName, ref, rsvpID);
    };
    //------------------------------------------------------------------------------
    // Vehicle API
    //------------------------------------------------------------------------------ 
    /**
     * Returns an array of all vehicles in Firebase.
     */
    FirebaseService.getVehicles = function () {
        var methodName = '[getVehicles] -';
        var ref = firebaseCommon_1.FirebaseApp.database().ref(types_1.ResourcePaths.vehicles);
        return this.fetchAll(methodName, ref);
    };
    /**
     * Returns a single vehicle.
     * @param vehicleID The ID of the event.
     */
    FirebaseService.getVehicleByID = function (vehicleID) {
        var methodName = '[getVehiclesByID] -';
        var ref = firebaseCommon_1.FirebaseApp.database().ref(types_1.ResourcePaths.vehicles);
        return this.fetchByID(methodName, ref, vehicleID);
    };
    /**
     * Updates a vehicle.
     * @param vehicleID The ID of the member.
     * @param updateInfo The update info.
     */
    FirebaseService.updateVehicleByID = function (vehicleID, updateInfo) {
        var methodName = '[updateVehicleByID] -';
        var ref = firebaseCommon_1.FirebaseApp.database().ref(types_1.ResourcePaths.vehicles + "/" + vehicleID);
        return ref.update(updateInfo).catch(function (error) {
            Raven.captureException(error);
            throw error;
        });
    };
    /**
     * Will create a new Vehicle with the data provided.
     * @param vehicleInfo Vehicle data
     */
    FirebaseService.postNewVehicle = function (vehicleInfo) {
        return FirebaseService.createResource(types_1.ResourcePaths.vehicles, vehicleInfo);
    };
    /**
     * Returns a list of vehicles that a member owns.
     * @param memberID The ID of the member.
     */
    FirebaseService.getMemberVehicles = function (memberID) {
        var _this = this;
        var methodName = '[getMemberVehicles] -';
        var ref = firebaseCommon_1.FirebaseApp.database().ref(types_1.ResourcePaths.vehicles);
        return ref.orderByChild(types_1.QueryValues.memberID).equalTo(memberID).once(databaseEvent).then(function (res) {
            var data = _this.addDataToArray(res.val());
            return Bluebird.map(data, function (snap) {
                return _this.getVehicleByID(snap.id);
            });
        }).catch(function (error) {
            Raven.captureException(error);
            throw error;
        });
    };
    //------------------------------------------------------------------------------
    // Services API
    //------------------------------------------------------------------------------
    /**
     * Returns an array of all services in Firebase.
     */
    FirebaseService.getServices = function () {
        var methodName = '[getServices] -';
        var ref = firebaseCommon_1.FirebaseApp.database().ref(types_1.ResourcePaths.services);
        return this.fetchAll(methodName, ref).then(function (services) {
            // Filter old services.
            return Bluebird.filter(services, function (service) {
                return service.date > Date.now().toString();
            });
        }).catch(function (error) {
            Raven.captureException(error);
            throw error;
        });
    };
    /**
     * Returns a single service.
     * @param serviceID The ID of the service.
     */
    FirebaseService.getServiceByID = function (serviceID) {
        var methodName = '[getServiceByID] -';
        var ref = firebaseCommon_1.FirebaseApp.database().ref(types_1.ResourcePaths.services);
        return this.fetchByID(methodName, ref, serviceID);
    };
    /**
     * Returns a list of services that a member has signed up for.
     * @param memberID The ID of the member.
     */
    FirebaseService.getServicesForMember = function (memberID) {
        var _this = this;
        var methodName = '[getServicesForMember] -';
        var foundServices = [];
        return this.getMemberVehicles(memberID).then(function (vehicles) {
            return Bluebird.map(vehicles, function (vehicle) {
                return _this.getServicesForVehicle(vehicle.id).then(function (services) {
                    if (services === undefined) {
                        return;
                    }
                    foundServices = foundServices.concat(services);
                });
            }).then(function () {
                return foundServices;
            });
        }).catch(function (error) {
            Raven.captureException(error);
            throw error;
        });
    };
    /**
     * Returns an array of all services for a vehicle.
     * @param vehicleID The ID of the vehicle.
     */
    FirebaseService.getServicesForVehicle = function (vehicleID) {
        var _this = this;
        var ref = firebaseCommon_1.FirebaseApp.database().ref(types_1.ResourcePaths.services);
        return ref.orderByChild(types_1.QueryValues.vehicleID).equalTo(vehicleID).once(databaseEvent).then(function (res) {
            if (!res.val()) {
                return;
            }
            var data = _this.addDataToArray(res.val());
            return Bluebird.map(data, function (snap) {
                return _this.getServiceByID(snap.id);
            }).then(function (services) {
                // Filter old services.
                return Bluebird.filter(services, function (service) {
                    return service.date > Date.now().toString();
                });
            });
        }).catch(function (error) {
            Raven.captureException(error);
            throw error;
        });
    };
    /**
     * Post new Service Data.
     * @param service
     */
    FirebaseService.postService = function (service) {
        return FirebaseService.createResource(types_1.ResourcePaths.services, service);
    };
    /**
    * Updates a service request.
    * @param serviceID The ID of the member.
    * @param updateInfo The update info.
    */
    FirebaseService.updateServiceByID = function (serviceID, updateInfo) {
        var methodName = '[updateServiceByID] -';
        var ref = firebaseCommon_1.FirebaseApp.database().ref(types_1.ResourcePaths.services + "/" + serviceID);
        return ref.update(updateInfo).catch(function (error) {
            Raven.captureException(error);
            throw error;
        });
    };
    //------------------------------------------------------------------------------
    // Providers API
    //------------------------------------------------------------------------------
    /**
     * Returns an array of all providers in Firebase.
     */
    FirebaseService.getProviders = function () {
        var methodName = '[getProviders] -';
        var ref = firebaseCommon_1.FirebaseApp.database().ref(types_1.ResourcePaths.providers);
        return this.fetchAll(methodName, ref);
    };
    /**
     * Returns a single provider.
     * @param providerID The ID of the provider.
     */
    FirebaseService.getProviderByID = function (providerID) {
        var methodName = '[getProviderByID] -';
        var ref = firebaseCommon_1.FirebaseApp.database().ref(types_1.ResourcePaths.providers);
        return this.fetchByID(methodName, ref, providerID);
    };
    /**
     * Updates a Provider.
     * @param providerID The ID of the provider.
     * @param updateInfo The update info.
     */
    FirebaseService.updateProviderByID = function (providerID, updateInfo) {
        var methodName = '[updateProviderByID] -';
        var ref = firebaseCommon_1.FirebaseApp.database().ref(types_1.ResourcePaths.providers + "/" + providerID);
        return ref.update(updateInfo).catch(function (error) {
            Raven.captureException(error);
            throw error;
        });
    };
    //------------------------------------------------------------------------------
    // Numbers
    //------------------------------------------------------------------------------
    FirebaseService.numberForDisplay = function (number) {
        var methodName = '[updateProviderByID] -';
        if (!number) {
            return '';
        }
        var numberPrefix = '';
        switch (number.toString().length) {
            case 1:
                numberPrefix = '00';
                break;
            case 2:
                numberPrefix = '0';
                break;
        }
        return "01-" + numberPrefix + number;
    };
    //------------------------------------------------------------------------------
    // Utility Fetch Methods
    //------------------------------------------------------------------------------
    /**
     * Returns an array of all nodes located at a given resource ref.
     * @param ref The path to the resource.
     */
    FirebaseService.fetchAll = function (methodName, ref) {
        var _this = this;
        return ref.once(databaseEvent).then(function (snapshot) {
            var dataArray = FirebaseService.addDataToArray(snapshot.val());
            return dataArray;
        }).catch(function (error) {
            Raven.captureException(error);
            throw _this.handleError(error, methodName, ref);
        });
    };
    /**
     * Returns an array of all nodes located at a given resource ref.
     * @param ref The path to the resource.
     */
    FirebaseService.fetchAllSorted = function (methodName, sort, ref) {
        var _this = this;
        return ref.orderByChild(sort).once(databaseEvent).then(function (snapshot) {
            var dataArray = FirebaseService.addDataToArray(snapshot.val());
            return dataArray;
        }).catch(function (error) {
            Raven.captureException(error);
            throw _this.handleError(error, methodName, ref);
        });
    };
    /**
     * Fetches a resource by it's ID.
     * @param ref The path to the resource.
     * @param identifier The resource's unique identifier.
     */
    FirebaseService.fetchByID = function (methodName, ref, identifier) {
        var _this = this;
        return ref.orderByKey().equalTo(identifier).once(databaseEvent).then(function (snapshot) {
            if (!snapshot.val()) {
                throw new Error(types_1.ErrorTypes.RESOURCE_NOT_FOUND);
            }
            return _this.addDataToArray(snapshot.val())[0];
        }).catch(function (error) {
            Raven.captureException(error);
            throw _this.handleError(error, methodName, ref, identifier);
        });
    };
    //------------------------------------------------------------------------------
    // Error Handling
    //------------------------------------------------------------------------------
    FirebaseService.compare = function (a, b) {
        if (a.lastName < b.lastName) {
            return -1;
        }
        if (a.lastName > b.lastName) {
            return 1;
        }
        return 0;
    };
    //------------------------------------------------------------------------------
    // Error Handling
    //------------------------------------------------------------------------------
    /**
     *
     * @param err The error object.
     * @param methodName The name of the method throwing the error.
     * @param ref The resource ref / path.
     * @param identifier If fetching by ID, this is the ID of the resource.
     */
    FirebaseService.handleError = function (err, methodName, ref, identifier) {
        if (err.message === types_1.ErrorTypes.RESOURCE_NOT_FOUND) {
            return new Error(methodName + " Failed to locate resource: " + ref.key + " by identifer: " + identifier);
        }
        return new Error(methodName + " encountered a promise error locating resource: " + ref.key + " by identifer: " + identifier + ". Error: " + err);
    };
    //------------------------------------------------------------------------------
    // Creation / Deletion Helpers
    //------------------------------------------------------------------------------
    /**
     * Creates a member in the DB.
     * @param path The resource path to write to.
     * @param data The data to write.
     */
    FirebaseService.createResource = function (path, data) {
        return __awaiter(this, void 0, void 0, function () {
            var refPath, ref, postRef, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        refPath = "/" + path;
                        ref = firebaseCommon_1.FirebaseApp.database().ref(refPath);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, ref.push(data)];
                    case 2:
                        postRef = _a.sent();
                        return [2 /*return*/, postRef.key];
                    case 3:
                        error_1 = _a.sent();
                        Raven.captureException(error_1);
                        throw error_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    FirebaseService.createResourceWithOwnID = function (path, data) {
        return __awaiter(this, void 0, void 0, function () {
            var refPath, ref, postRef, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        refPath = "/" + path;
                        ref = firebaseCommon_1.FirebaseApp.database().ref(refPath);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, ref.set(data)];
                    case 2:
                        postRef = _a.sent();
                        return [2 /*return*/, postRef];
                    case 3:
                        error_2 = _a.sent();
                        Raven.captureException(error_2);
                        throw error_2;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Creates a resource in the DB table at a given ID.
     * @param path The resource path to write to, include the ID of the resource.
     * @param data The data to write.
     */
    FirebaseService.createResourceWithID = function (path, data) {
        var refPath = "/" + path;
        var ref = firebaseCommon_1.FirebaseApp.database().ref(refPath);
        return ref.set(data).catch(function (err) {
            Raven.captureException(err);
            throw err;
        });
    };
    /**
     * Deletes resource at path and all of it's children.
     * @param path The path or name of the resource.
     */
    FirebaseService.deleteResource = function (path) {
        var refPath = "/" + path;
        var ref = firebaseCommon_1.FirebaseApp.database().ref(refPath);
        return ref.remove().catch(function (error) {
            Raven.captureException(error);
            throw error;
        });
    };
    /**
     * Returns an array of Firebase snapshots.
     * @param snapshot The database snapshot returned from Firebase.
     */
    FirebaseService.addDataToArray = function (snapshot) {
        if (!snapshot)
            return [];
        var keys = Object.keys(snapshot);
        return keys.map(function (key) {
            snapshot[key].id = key;
            return snapshot[key];
        });
    };
    /**
     * Fetched Firebase object doesn't include the ID of the resource.
     * Attach ID to the data snapshot and return the object.
     * @param snapshot The fetched data.
     * @param id ID of the fetched resource.
     */
    FirebaseService.addIdToFirebaseObject = function (snapshot, id) {
        snapshot.id = id;
        return snapshot;
    };
    return FirebaseService;
}());
exports.default = FirebaseService;
//# sourceMappingURL=firebaseService.js.map