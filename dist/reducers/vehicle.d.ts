import { Vehicle } from '../Firebase/types';
export interface VehicleState {
    vehicle: Vehicle | null;
    vehicles: Array<Vehicle>;
}
declare function vehicle(state: VehicleState, action: any): VehicleState;
export default vehicle;
