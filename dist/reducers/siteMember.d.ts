import { Member, Vehicle, Event, Service } from '../Firebase/types';
export interface SiteMemberState {
    member: Member | null;
    members: Member[];
    vehicles: Vehicle[];
    events: Event[];
    services: Service[];
}
export declare const defaultState: SiteMemberState;
declare function siteMember(state: SiteMemberState, action: any): SiteMemberState;
export default siteMember;
