"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lunr = require("lunr");
var firebaseService_1 = require("./firebaseService");
var SearchIndex = /** @class */ (function () {
    function SearchIndex() {
    }
    /**
     * Builds a new search index for the application.
     */
    SearchIndex.prototype.BuildSearchIndex = function (isAdmin) {
        var _this = this;
        return firebaseService_1.default.getMembers(isAdmin).then(function (members) {
            _this.members = members;
            return firebaseService_1.default.getVehicles();
        }).then(function (vehicles) {
            _this.vehicles = vehicles;
            _this.membersByMemberID = _this.buildMembersByMembersID();
            _this.vehiclesByMemberID = _this.buildVehiclesByMemberID();
            _this.index = _this.buildIndex();
        });
    };
    /**
     * Performs a search on the index.
     * @param searchTerm The search term to perform a search for.
     */
    SearchIndex.prototype.Search = function (searchTerm) {
        var _this = this;
        var filteredMembers;
        if (searchTerm == "") {
            filteredMembers = this.members;
        }
        else {
            var search = searchTerm.trim() + "*";
            var filteredResults = this.index.search(search);
            filteredMembers = filteredResults.map(function (result) {
                var memberID = result.ref;
                return _this.membersByMemberID[memberID];
            });
        }
        return filteredMembers;
    };
    /**
     * Builds the search index.
     */
    SearchIndex.prototype.buildIndex = function () {
        var _this = this;
        return lunr(function (builder) {
            builder.ref('memberID');
            builder.field('firstName');
            builder.field('lastName');
            builder.field('year');
            builder.field('make');
            builder.field('model');
            builder.field('color');
            var membersWithCars = [];
            // Iterate through all members
            for (var _i = 0, _a = _this.members; _i < _a.length; _i++) {
                var member = _a[_i];
                var vehicles = _this.vehiclesByMemberID[member.id];
                if (!vehicles) {
                    var memberWithoutCar = SearchIndex.memberWithoutCar(member);
                    builder.add(memberWithoutCar);
                    continue;
                }
                // Iterate through all members vehicles to make indexable object
                for (var _b = 0, vehicles_1 = vehicles; _b < vehicles_1.length; _b++) {
                    var vehicle = vehicles_1[_b];
                    var memberWithCar = SearchIndex.memberWithCar(member, vehicle);
                    builder.add(memberWithCar);
                }
            }
        });
    };
    /**
     * Builds an object with members IDs keying members.
     */
    SearchIndex.prototype.buildMembersByMembersID = function () {
        var membersByID = {};
        for (var _i = 0, _a = this.members; _i < _a.length; _i++) {
            var member = _a[_i];
            membersByID[member.id] = member;
        }
        return membersByID;
    };
    /**
     * Builds an object with member IDs keying vehicles.
     * @param vehicles
     */
    SearchIndex.prototype.buildVehiclesByMemberID = function () {
        var vehiclesByMember = {};
        for (var _i = 0, _a = this.vehicles; _i < _a.length; _i++) {
            var car = _a[_i];
            if (vehiclesByMember[car.memberID]) {
                vehiclesByMember[car.memberID].push(car);
            }
            else {
                vehiclesByMember[car.memberID] = [car];
            }
        }
        return vehiclesByMember;
    };
    SearchIndex.memberWithoutCar = function (member) {
        var memberWithoutCar = {
            memberID: member.id,
            firstName: member.firstName,
            lastName: member.lastName,
        };
        return memberWithoutCar;
    };
    SearchIndex.memberWithCar = function (member, vehicle) {
        var memberWithCar = {
            make: vehicle.make,
            model: vehicle.model,
            year: vehicle.year,
            color: vehicle.color,
            memberID: member.id,
            firstName: member.firstName,
            lastName: member.lastName,
        };
        return memberWithCar;
    };
    return SearchIndex;
}());
exports.default = SearchIndex;
//# sourceMappingURL=search.js.map