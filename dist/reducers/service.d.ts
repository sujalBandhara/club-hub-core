import { Service } from '../Firebase/types';
export interface ServiceState {
    service: Service | null;
    services: Service[];
}
declare function service(state: ServiceState, action: any): ServiceState;
export default service;
