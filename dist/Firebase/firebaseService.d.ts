import { Member, Event, EventRSVP, Vehicle, Provider, Service, CompletedServiceFormInterface, MemberMetadata, AllMemberData, NewVehicleInterface } from './types';
export declare enum NumberType {
    Vehicle = 1,
    Member = 2,
}
export declare enum ClubType {
    All = "All",
    Redmond = "Redmond",
    Scottsdale = "Scottsdale",
}
/**
 * Wrapper for the Firebase SDK.
 */
export default class FirebaseService {
    /**
     * Creates a new member in Firebase.
     */
    static createMember(memberData: Member): Promise<string>;
    /**
     * Creates a new member in Firebase.
     */
    static createMemberMetadata(memberMetadata: MemberMetadata): Promise<string>;
    /**
     * Returns a array of all member's in Firebase.
     */
    static getMembers(isAdmin: boolean): Promise<Member[]>;
    /**
     * Returns a array of all member's in Firebase with their vehicles.
     */
    static getMembersWithVehicles(isAdmin: boolean): Promise<Member[]>;
    /**
     * Returns a single member.
     * @param memberID The ID of the member.
     */
    static getMemberByID(memberID: string): Promise<Member>;
    /**
     * Returns a single member.
     * @param number The number of the member.
     */
    static getMemberByNumber(number: number): Promise<Member[]>;
    /**
     * Updates a member.
     * @param memberID The ID of the member.
     * @param updateInfo The update info.
     * Note: There is support to update all instance in the DB:
     * https://firebase.google.com/docs/database/web/read-and-write
     * search: writeNewPost
     */
    static updateMemberByID(memberID: string, updateInfo: any): Promise<Member>;
    /**
     * Returns a boolean indicating if a member number has already been taken.
     * @param memberID
     * @param memberNumber
     */
    static checkForMemberNumber(memberID: string, memberNumber: number): Promise<boolean>;
    /**
     * Deletes a member
     * @param memberID The ID of the member.
     */
    static deleteMemberByID(memberID: string): Promise<any>;
    /**
     * Fetches all member data. Includes basic information and metadata.
     * @param memberID The ID of the member.
     */
    static getAllMemberData(memberID: string): Promise<AllMemberData>;
    /**
     * Returns the metadata for a member.
     */
    static getMemberMetadata(memberID: string): Promise<MemberMetadata>;
    /**
     * Updates a members metadata.
     * @param memberID The ID of the member.
     * @param updateInfo The update info.
     */
    static updateMemberMetadata(memberID: string, updateInfo: any): Promise<void>;
    /**
     * Returns metadata for member using the ID of the stored metadata.
     * @param metadataID The ID of the metadata
     */
    static getMemberMetadataByID(metadataID: string): Promise<MemberMetadata>;
    /**
     * Creates a new event in Firebase.
     */
    static createEvent(eventData: Event): Promise<string>;
    /**
     * Returns an array of all events in Firebase.
     */
    static getEvents(): Promise<Event[]>;
    /**
     * Returns a single event.
     * @param eventID The ID of the event.
     */
    static getEventByID(eventID: string): Promise<Event>;
    /**
     * Updates an event.
     * @param eventID The ID of the member.
     * @param updateInfo The update info.
     */
    static updateEventByID(eventID: string, updateInfo: any): Promise<Event>;
    /**
     * Fetches an event using it's link name.
     */
    static getEventByLinkName(linkName: string): Promise<Event>;
    /**
     * Deletes a single event and all RSVPs.
     * @param eventID The ID of the event.
     */
    static deleteEventByID(eventID: string): Promise<void>;
    /**
     * Returns a list of events that a member has RSVP'd to.
     * @param memberID The ID of the member.
     */
    static getEventsForMember(memberID: string): Promise<(Event)[]>;
    /**
     * Returns an array of members who have RSVPd to a specified event.
     * @param eventID The ID of the event.
     */
    static getEventMembers(eventID: string, isAdmin: boolean): Promise<(Member)[]>;
    /**
     * Creates an eventRsvp using a member and event.
     * @param memberID The member ID that is RSVPing.
     * @param eventID The ID of the event.
     */
    static rsvpMemberToEvent(memberID: string, eventID: string): Promise<string>;
    /**
     * Un-RSVPs a member to an event.
     * @param memberID The member ID that is RSVPing.
     * @param eventID The ID of the event.
     */
    static removeMemberFromEvent(memberID: string, eventRsvpID: string): Promise<string>;
    /**
     * Returns an array of all event RSVPs for a specified event.
     * @param eventID The ID of the event.
     */
    static getEventRsvps(eventID: string): Promise<EventRSVP[]>;
    /**
     * Fetches an eventRSVP by it's ID.
     * @param rsvpID The ID of the eventRsvp.
     */
    static getEventRsvpByID(rsvpID: string): Promise<EventRSVP>;
    /**
     * Returns an array of all vehicles in Firebase.
     */
    static getVehicles(): Promise<Vehicle[]>;
    /**
     * Returns a single vehicle.
     * @param vehicleID The ID of the event.
     */
    static getVehicleByID(vehicleID: string): Promise<Vehicle>;
    /**
     * Updates a vehicle.
     * @param vehicleID The ID of the member.
     * @param updateInfo The update info.
     */
    static updateVehicleByID(vehicleID: string, updateInfo: any): Promise<Vehicle>;
    /**
     * Will create a new Vehicle with the data provided.
     * @param vehicleInfo Vehicle data
     */
    static postNewVehicle(vehicleInfo: NewVehicleInterface): Promise<string>;
    /**
     * Returns a list of vehicles that a member owns.
     * @param memberID The ID of the member.
     */
    static getMemberVehicles(memberID: string): Promise<(Vehicle)[]>;
    /**
     * Returns an array of all services in Firebase.
     */
    static getServices(): Promise<Service[]>;
    /**
     * Returns a single service.
     * @param serviceID The ID of the service.
     */
    static getServiceByID(serviceID: string): Promise<Service>;
    /**
     * Returns a list of services that a member has signed up for.
     * @param memberID The ID of the member.
     */
    static getServicesForMember(memberID: string): Promise<Service[]>;
    /**
     * Returns an array of all services for a vehicle.
     * @param vehicleID The ID of the vehicle.
     */
    static getServicesForVehicle(vehicleID: string): Promise<(Service)[]>;
    /**
     * Post new Service Data.
     * @param service
     */
    static postService(service: CompletedServiceFormInterface): Promise<string>;
    /**
    * Updates a service request.
    * @param serviceID The ID of the member.
    * @param updateInfo The update info.
    */
    static updateServiceByID(serviceID: string, updateInfo: any): Promise<Service>;
    /**
     * Returns an array of all providers in Firebase.
     */
    static getProviders(): Promise<Provider[]>;
    /**
     * Returns a single provider.
     * @param providerID The ID of the provider.
     */
    static getProviderByID(providerID: string): Promise<Provider>;
    /**
     * Updates a Provider.
     * @param providerID The ID of the provider.
     * @param updateInfo The update info.
     */
    static updateProviderByID(providerID: string, updateInfo: any): Promise<Event>;
    static numberForDisplay(number: number): string;
    /**
     * Returns an array of all nodes located at a given resource ref.
     * @param ref The path to the resource.
     */
    private static fetchAll<T>(methodName, ref);
    /**
     * Returns an array of all nodes located at a given resource ref.
     * @param ref The path to the resource.
     */
    private static fetchAllSorted<T>(methodName, sort, ref);
    /**
     * Fetches a resource by it's ID.
     * @param ref The path to the resource.
     * @param identifier The resource's unique identifier.
     */
    private static fetchByID<T>(methodName, ref, identifier);
    static compare(a: Member, b: Member): 0 | 1 | -1;
    /**
     *
     * @param err The error object.
     * @param methodName The name of the method throwing the error.
     * @param ref The resource ref / path.
     * @param identifier If fetching by ID, this is the ID of the resource.
     */
    private static handleError(err, methodName, ref, identifier?);
    /**
     * Creates a member in the DB.
     * @param path The resource path to write to.
     * @param data The data to write.
     */
    static createResource(path: string, data: any): Promise<string>;
    static createResourceWithOwnID(path: string, data: any): Promise<string>;
    /**
     * Creates a resource in the DB table at a given ID.
     * @param path The resource path to write to, include the ID of the resource.
     * @param data The data to write.
     */
    static createResourceWithID(path: string, data: any): Promise<string>;
    /**
     * Deletes resource at path and all of it's children.
     * @param path The path or name of the resource.
     */
    static deleteResource<T>(path: string): Promise<T>;
    /**
     * Returns an array of Firebase snapshots.
     * @param snapshot The database snapshot returned from Firebase.
     */
    private static addDataToArray<T>(snapshot);
    /**
     * Fetched Firebase object doesn't include the ID of the resource.
     * Attach ID to the data snapshot and return the object.
     * @param snapshot The fetched data.
     * @param id ID of the fetched resource.
     */
    private static addIdToFirebaseObject(snapshot, id);
}
