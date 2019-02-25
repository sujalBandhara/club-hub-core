import { ActionCreatorsMapObject, Action } from "redux";
import { Member, Event, Vehicle, Service } from '../Firebase/types';
export interface MemberResources {
    events: Event[];
    vehicles: Vehicle[];
    services: Service[];
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
 * FetchedMemberResourcesAction is dispatched a member's profile has been fetched.
 */
export interface FetchedMemberResourcesAction extends Action {
    type: string;
    memberProfile: MemberResources;
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
 * FetchedMemberByIDAction is dispatched after fetching a member by their ID.
 */
export interface FetchedMemberByIDAction extends Action {
    type: string;
    member: Member;
    receivedAt: number;
}
/**
 * Defines the interface for our MemberAction object.
 */
export interface SiteMemberDispatch extends ActionCreatorsMapObject {
    fetchAllMembers(isAdmin: boolean): any;
    fetchedAllMembers(members: Member[]): FetchedAllMembersAction;
    fetchMemberByID(memberID: string): any;
    fetchedMemberByID(member: Member): FetchedMemberByIDAction;
    fetchVehiclesForMember(): any;
    fetchedVehiclesForMember(vehicles: Vehicle[]): FetchedVehiclesForMemberAction;
    fetchMemberResources(memberID: string): any;
}
export declare const UPDATED_MEMBER = "UPDATED_MEMBER";
export declare const FETCHED_MEMBER_RESOURCES = "FETCHED_MEMBER_RESOURCES";
export declare const FETCHED_VEHICLES_FOR_MEMBER = "FETCHED_VEHICLES_FOR_MEMBER";
export declare const FETCHED_ALL_MEMBERS = "FETCHED_ALL_MEMBERS";
export declare const FETCHED_MEMBER_BY_ID = "FETCHED_MEMBER_BY_ID";
export declare const SiteMemberActions: SiteMemberDispatch;
