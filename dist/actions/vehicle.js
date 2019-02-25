"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Firebase
var firebaseService_1 = require("../Firebase/firebaseService");
// Action types.
exports.FETCHED_MEMBER_VEHICLE_BY_ID = 'FETCHED_MEMBER_VEHICLE_BY_ID';
exports.UPDATED_MEMBER_VEHICLE = 'UPDATED_MEMBER_VEHICLE';
// -----------------------------------------------------------------------------
// Fetch Vehicle By ID
// -----------------------------------------------------------------------------
/**
 * Fetches a vehicle by it's ID
 * @param vehicleId The ID of the vehicle.
 */
var fetchMemberVehicleById = function (vehicleID) { return function (dispatch) {
    return firebaseService_1.default.getVehicleByID(vehicleID).then(function (vehicle) {
        dispatch(fetchedMemberVehicleById(vehicle));
    }).catch(function (err) {
        return Promise.reject(err);
    });
}; };
/**
 * Builds an `FetchedMemberVehiclesByIdAction` upon successful fetch a vehicle.
 * @param vehicle The fetched vehicle.
 * @return The `FetchedMemberVehiclesByIdAction` instance.
 */
var fetchedMemberVehicleById = function (vehicle) {
    var action = {
        receivedAt: Date.now(),
        type: exports.FETCHED_MEMBER_VEHICLE_BY_ID,
        vehicle: vehicle,
    };
    return action;
};
// -----------------------------------------------------------------------------
// Update A Vehicle
// -----------------------------------------------------------------------------
/**
 * Updates a vehicle by it's ID
 * @param vehicleId The ID of the vehicle.
 * @param updateInfo The update information.
 */
var updateMemberVehicle = function (vehicleID, updateInfo) { return function (dispatch) {
    return firebaseService_1.default.updateVehicleByID(vehicleID, updateInfo).then(function (updatedVehicle) {
        dispatch(updatedMemberVehicle(updatedVehicle));
    }).catch(function (err) {
        return Promise.reject(err);
    });
}; };
/**
 * Builds an `UpdatedMemberVehicleAction` upon successful update of a vehicle.
 * @param vehicle The updated vehicle.
 * @return The `UpdatedMemberVehicleAction` instance.
 */
var updatedMemberVehicle = function (vehicle) {
    var action = {
        receivedAt: Date.now(),
        type: exports.UPDATED_MEMBER_VEHICLE,
        vehicle: vehicle,
    };
    return action;
};
exports.VehicleActions = {
    fetchMemberVehicleById: fetchMemberVehicleById,
    fetchedMemberVehicleById: fetchedMemberVehicleById,
    updateMemberVehicle: updateMemberVehicle,
    updatedMemberVehicle: updatedMemberVehicle,
};
//# sourceMappingURL=vehicle.js.map