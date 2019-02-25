import { ActionCreatorsMapObject, Action } from "redux";
import { EventRSVP } from '../Firebase/types';
/**
 * RsvpMemberToEventAction is dispatched after a member RSVPs to an event.
 */
export interface FinishedRsvpMemberToEvent extends Action {
    type: string;
    eventRsvpId: string;
    receivedAt: number;
}
/**
 * FetchedEventRsvpByIdAction is dispatched all RSVPs to an event have been fetched.
 */
export interface FetchedEventRsvpsActions extends Action {
    type: string;
    eventRSVPs: EventRSVP[];
    receivedAt: number;
}
/**
 * Defines the interface for our EventRsvpAction object.
 */
export interface EventRsvpDispatch extends ActionCreatorsMapObject {
    rsvpMemberToEvent(memberID: string, eventID: string): any;
    finishedRsvpMemberToEvent(eventRsvpId: string): FinishedRsvpMemberToEvent;
    fetchEventRsvps(eventID: string): any;
    fetchedEventRsvps(eventRsvps: EventRSVP[]): FetchedEventRsvpsActions;
}
export declare const FINISHED_RSVP_MEMBER_TO_EVENT = "FINISHED_RSVP_MEMBER_TO_EVENT";
export declare const FETCHED_EVENT_RSVPS = "FETCHED_EVENT_RSVPS";
export declare const EventRsvpActions: EventRsvpDispatch;
