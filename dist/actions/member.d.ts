import { ActionCreatorsMapObject, Action } from "redux";
import { Member, Event, Vehicle, Service } from '../Firebase/types';
export interface MemberResources {
    events: Event[];
    vehicles: Vehicle[];
    services: Service[];
}
/**
 * RegisteredMemberAction is dispatched after a member has been registered.
 */
export interface RegisteredMemberAction extends Action {
    type: string;
    members: any;
    receivedAt: number;
}
/**
 * AuthenticatedMemberAction is dispatched after a member has been authenticated.
 */
export interface AuthenticatedMemberAction extends Action {
    type: string;
    member: Member;
    receivedAt: number;
}
/**
 * FetchAllMembersAction is dispatched after all members have been fetched.
 */
export interface FetchedAllMembersAction extends Action {
    type: string;
    members: Member[];
    receivedAt: number;
}
/**
 * FetchAllMembersAction is dispatched after all members have been fetched.
 */
export interface UpdatedMemberAction extends Action {
    type: string;
    member: Member;
    receivedAt: number;
}
/**
 * FetchedMemberResourcesAction is dispatched a member's profile has been fetched.
 */
export interface FetchedMemberResourcesAction extends Action {
    type: string;
    memberProfile: MemberResources;
    receivedAt: number;
}
/**
 * FetchEventsForMemberActions is dispatched after a member's events have been fetched.
 */
export interface FetchEventsForMemberAction extends Action {
    type: string;
    events: Event[];
    receivedAt: number;
}
/**
 * FetchedVehiclesForMemberAction is dispatched after a member's vehicles have been fetched.
 */
export interface FetchedVehiclesForMemberAction extends Action {
    type: string;
    vehicles: Vehicle[];
    receivedAt: number;
}
/**
 * FetchedServicesForMemberActions is dispatched after fetching all services for a member.
 */
export interface FetchedServicesForMemberActions extends Action {
    type: string;
    services: Service[];
    receivedAt: number;
}
/**
 * Defines the interface for our MemberAction object.
 */
export interface MemberDispatch extends ActionCreatorsMapObject {
    registerMember(email: string, password: string): any;
    registeredMember(response: any): RegisteredMemberAction;
    authenticateMember(email: string, password: string): any;
    authenticatedMember(response: any): AuthenticatedMemberAction;
    fetchAllMembers(isAdmin: boolean): any;
    fetchedAllMembers(members: Member[]): FetchedAllMembersAction;
    updateMember(memberID: string, updatedInfo: any): any;
    updatedMember(member: Member): UpdatedMemberAction;
    fetchVehiclesForMember(): any;
    fetchedVehiclesForMember(vehicles: Vehicle[]): FetchedVehiclesForMemberAction;
    fetchEventsForMember(memberID: string): any;
    fetchedEventsForMember(events: Event[]): FetchEventsForMemberAction;
    fetchServicesForMember(memberID: string): any;
    fetchedServicesForMember(services: Service[]): FetchedServicesForMemberActions;
    fetchMemberResources(memberID: string): any;
    getAuthMemberFromLocalStorage(): any;
}
export declare const REGISTERED_MEMBER = "REGISTERED_MEMBER";
export declare const AUTHENTICATED_MEMBER = "AUTHENTICATED_MEMBER";
export declare const UPDATED_MEMBER = "UPDATED_MEMBER";
export declare const FETCHED_MEMBER_RESOURCES = "FETCHED_MEMBER_RESOURCES";
export declare const FETCHED_EVENTS_FOR_MEMBER = "FETCHED_EVENTS_FOR_MEMBER";
export declare const FETCHED_VEHICLES_FOR_MEMBER = "FETCHED_VEHICLES_FOR_MEMBER";
export declare const FETCHED_SERVICES_FOR_MEMBER = "FETCHED_SERVICES_FOR_MEMBER";
export declare const FETCHED_ALL_MEMBERS = "FETCHED_ALL_MEMBERS";
export declare const MemberActions: MemberDispatch;
