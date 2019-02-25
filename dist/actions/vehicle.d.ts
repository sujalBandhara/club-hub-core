import { ActionCreatorsMapObject, Action } from "redux";
import { Vehicle } from '../Firebase/types';
/**
 * FetchedMemberVehiclesByIdAction is dispatched after a member's vehicle has been fetched by ID.
 */
export interface FetchedMemberVehiclesByIdAction extends Action {
    type: string;
    vehicle: Vehicle;
    receivedAt: number;
}
/**
 * UpdatedMemberVehicleAction is dispatched after a member has updated their vehicle.
 */
export interface UpdatedMemberVehicleAction extends Action {
    type: string;
    vehicle: Vehicle;
    receivedAt: number;
}
/**
 * Defines the interface for our VehicleAction object.
 */
export interface VehicleDispatch extends ActionCreatorsMapObject {
    fetchMemberVehicleById(id: string): any;
    fetchedMemberVehicleById(vehicle: Vehicle): FetchedMemberVehiclesByIdAction;
    updateMemberVehicle(id: string, updateInfo: any): any;
    updatedMemberVehicle(response: Vehicle): UpdatedMemberVehicleAction;
}
export declare const FETCHED_MEMBER_VEHICLE_BY_ID = "FETCHED_MEMBER_VEHICLE_BY_ID";
export declare const UPDATED_MEMBER_VEHICLE = "UPDATED_MEMBER_VEHICLE";
export declare const VehicleActions: VehicleDispatch;
