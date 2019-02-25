import { EventRSVP } from '../Firebase/types';
export interface EventRSVPState {
    eventRSVP: EventRSVP | null;
    eventsRSVPs: EventRSVP[];
}
export declare const defaultState: EventRSVPState;
declare function eventRSVP(state: EventRSVPState, action: any): EventRSVPState;
export default eventRSVP;
