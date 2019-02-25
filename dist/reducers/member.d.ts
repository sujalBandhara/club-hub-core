import { Member, Vehicle, Event, Service } from '../Firebase/types';
export interface MemberState {
    member: Member | null;
    vehicles: Vehicle[];
    events: Event[];
    services: Service[];
}
export declare const defaultState: MemberState;
declare function member(state: MemberState, action: any): MemberState;
export default member;
