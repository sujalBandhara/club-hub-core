"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Firebase
var firebaseService_1 = require("../Firebase/firebaseService");
// Action types.
exports.FETCHED_ALL_SERVICES = 'FETCHED_ALL_SERVICES';
exports.FETCHED_SERVICE_BY_ID = 'FETCHED_SERVICE_BY_ID';
exports.FETCHED_MEMBER_SERVICES = 'FETCHED_MEMBER_SERVICES';
// -----------------------------------------------------------------------------
// Fetches All Service
// -----------------------------------------------------------------------------
/**
 * Fetches all services.
 */
var fetchAllServices = function () { return function (dispatch) {
    return firebaseService_1.default.getServices().then(function (services) {
        dispatch(fetchedAllServices(services));
    }).catch(function (err) {
        console.log('Error took place while fetching services: ', err);
        return Promise.reject(err);
    });
}; };
/**
 * Builds a `FetchedAllServicesAction` upon successful fetch of all services.
 * @param services An array of services.
 * @return The `FetchedAllServicesAction` instance.
 */
var fetchedAllServices = function (services) {
    var action = {
        receivedAt: Date.now(),
        type: exports.FETCHED_ALL_SERVICES,
        services: services,
    };
    return action;
};
// -----------------------------------------------------------------------------
// Fetching A Service By ID
// -----------------------------------------------------------------------------
/**
 * Fetches a service by it's ID
 * @param serviceID The ID of the service.
 */
var fetchServiceById = function (serviceID) { return function (dispatch) {
    return firebaseService_1.default.getServiceByID(serviceID).then(function (service) {
        dispatch(fetchedServiceById(service));
    }).catch(function (err) {
        console.log("Error took place while fetching serviceID: " + serviceID, err);
        return Promise.reject(err);
    });
}; };
/**
 * Builds a `FetchedServiceByIdAction` upon successful fetch of a service by it's ID
 * @param service The fetched service.
 * @return The `FetchedServiceByIdAction` instance.
 */
var fetchedServiceById = function (service) {
    var action = {
        receivedAt: Date.now(),
        type: exports.FETCHED_SERVICE_BY_ID,
        service: service,
    };
    return action;
};
exports.ServicesActions = {
    fetchAllServices: fetchAllServices,
    fetchedAllServices: fetchedAllServices,
    fetchServiceById: fetchServiceById,
    fetchedServiceById: fetchedServiceById
};
//# sourceMappingURL=services.js.map