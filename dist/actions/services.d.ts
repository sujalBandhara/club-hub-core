import { ActionCreatorsMapObject, Action } from "redux";
import { Service } from '../Firebase/types';
/**
 * FetchedAllServicesAction is dispatched after all services are fetched.
 */
export interface FetchedAllServicesAction extends Action {
    type: string;
    services: Service[];
    receivedAt: number;
}
/**
 * FetchedServiceByIdAction is dispatched after a service has been fetched by it's ID.
 */
export interface FetchedServiceByIdAction extends Action {
    type: string;
    service: Service;
    receivedAt: number;
}
/**
 * Defines the interface for our ServiceAction object.
 */
export interface ServiceDispatch extends ActionCreatorsMapObject {
    fetchAllServices(): any;
    fetchedAllServices(services: Service[]): FetchedAllServicesAction;
    fetchServiceById(serviceId: string): any;
    fetchedServiceById(service: Service): FetchedServiceByIdAction;
}
export declare const FETCHED_ALL_SERVICES = "FETCHED_ALL_SERVICES";
export declare const FETCHED_SERVICE_BY_ID = "FETCHED_SERVICE_BY_ID";
export declare const FETCHED_MEMBER_SERVICES = "FETCHED_MEMBER_SERVICES";
export declare const ServicesActions: ServiceDispatch;
