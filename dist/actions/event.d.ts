import { ActionCreatorsMapObject, Action } from "redux";
import { Event, Member } from '../Firebase/types';
/**
 * FetchedEventsAction is dispatched after a all events are fetched.
 */
export interface FetchedAllEventsAction extends Action {
    type: string;
    events: Event[];
    receivedAt: number;
}
/**
 * FetchedEventByIdAction is dispatched after an event has been fetched by ID.
 */
export interface FetchedEventByIdAction extends Action {
    type: string;
    event: Event;
    receivedAt: number;
}
/**
 * UpdatedEventAction is dispatched after an event has been updated.
 */
export interface UpdatedEventAction extends Action {
    type: string;
    event: Event;
    receivedAt: number;
}
export interface FetchedEventMembersAction extends Action {
    type: string;
    eventMembers: Member[];
    receivedAt: number;
}
/**
 * Defines the interface for our EventAction object.
 */
export interface EventDispatch extends ActionCreatorsMapObject {
    fetchAllEvents(): any;
    fetchedAllEvents(events: Event[]): FetchedAllEventsAction;
    fetchEventById(eventId: string): any;
    fetchedEventById(event: Event): FetchedEventByIdAction;
    updateEvent(eventId: string, updateInfo: any): any;
    updatedEvent(response: Event): UpdatedEventAction;
    fetchEventMembers(eventId: string, isAdmin: boolean): any;
    fetchedEventMembers(members: Member[]): FetchedEventMembersAction;
}
export declare const FETCHED_ALL_EVENTS = "FETCHED_ALL_EVENTS";
export declare const FETCHED_EVENT_BY_ID = "FETCHED_EVENT_BY_ID";
export declare const UPDATED_EVENT = "UPDATED_EVENT";
export declare const FETCHED_EVENT_MEMBERS = "FETCHED_EVENT_MEMBERS";
export declare const EventActions: EventDispatch;
