import { Member, MemberMetadata, Vehicle, NewProviderInterface } from './types';
import { EnvironmentTypes } from '../constants';
export declare const setFirebaseFunctionsURL: (env: EnvironmentTypes) => void;
export default class FirebaseFunctions {
    /**
     * Calls the `createNewMember` firebase cloud function.
     * @param provider the new provider to submit a request for.
     */
    static createNewMemberRequest(member: Member, metadata: MemberMetadata): Promise<Response>;
    /**
     * Calls the `deleteMember` firebase cloud function.
     * @param memberID The ID of the member to delete.
     */
    static deleteMemberRequest(memberID: string): Promise<Response>;
    /**
     * Calls the `createNewVehicle` firebase cloud function.
     * @param provider the new vehicle to submit a request for.
     */
    static createNewVehicleRequest(vehicle: Vehicle): Promise<Response>;
    /**
     * Calls the `submitNewProvider` firebase cloud function.
     * @param provider the new provider to submit a request for.
     */
    static submitNewProviderRequest(provider: NewProviderInterface): Promise<Response>;
    /**
     * Sends an email to an admin with the email of a public member who wants to RSVP for an event.
     * @param memberEmail The email of the public member.
     * @param eventID The ID of the event the Public member wants to RSVP to.
     */
    static submitPublicMemberRSVP(memberName: string, memberEmail: string, plusOne: boolean, eventID: string): Promise<any>;
    /**
     * Sends out push notifications on admin action.
     * @param eventID
     */
    static sendPushNotificationsForEvent(eventID: string): Promise<any>;
    /**
     * Executes an authenticated post request.
     */
    private static executePostRequest(url, body);
    /**
    * Executes an unauthenticated post request.
    */
    private static executePublicPostRequest(url, body);
}
