import { Member } from '../Firebase/types';
export interface EventState {
    event: Event | null;
    events: Event[];
    eventMembers: Member[];
}
export declare const defaultState: EventState;
declare function event(state: EventState, action: any): EventState;
export default event;
