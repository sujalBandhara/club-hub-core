import * as firebase from 'firebase';
export interface FirebaseAppInterface extends firebase.app.App {
}
export interface FirebaseAuthInterface extends firebase.auth.Auth {
}
export interface DataSnapshot extends firebase.database.DataSnapshot {
}
export interface Reference extends firebase.database.Reference {
}
export interface FirebaseUser extends firebase.User {
}
/**
 * This string 'enum' defines the possible states
 * a Service request can be in.
 */
export declare enum ServiceStatus {
    Submitted = "Submitted",
    Confirmed = "Confirmed",
    InProgress = "In-Progress",
    Done = "Done",
}
export declare type MemberRole = 'Admin' | 'Member' | 'Social';
export interface Member {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    memberNumber: number;
    memberSince: string;
    phoneNumber: string;
    profileImage: string;
    showContactInfo: boolean;
    public: boolean;
    role: MemberRole;
    club: ClubType;
    pushToken: string;
    vehicles?: Vehicle[];
}
export interface MemberMetadata {
    id: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    initiationAmount: string;
    preferredVendors: string;
    parkingSpace: string;
    automotivePassion: string;
    carShowcase: string;
    significantOther: string;
    club: ClubType;
    keyOnsite: string;
    shirtSize: string;
    hatSize: string;
    memberReference: string;
    membershipPlan: string;
    memberID: string;
}
export interface AllMemberData {
    member: Member;
    metadata: MemberMetadata;
}
export declare type ClubType = 'Redmond' | 'Scottsdale';
export declare type EventType = 'Hosted by DC' | 'Member event' | 'Outside event';
export interface Event {
    id: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    public: boolean;
    location: string;
    club: ClubType;
    eventType: EventType;
    date: string;
    fullMonth: boolean;
    description: string;
    endTime: string;
    images: string[];
    name: string;
    price: string;
    startTime: string;
    linkName: string;
}
export interface EventRSVP {
    id: string;
    memberID: string;
    eventID: string;
}
export interface Vehicle {
    id: string;
    club: ClubType;
    color: string;
    image: string;
    memberID: string;
    model: string;
    make: string;
    vehicleNumber: number;
    year: string;
    description: string;
}
export interface Provider {
    id: string;
    companyName: string;
    contactName: string;
    phoneNumber: string;
    email: string;
    street: string;
    city: string;
    state: string;
    zip: string;
}
export interface Service {
    id: string;
    date: string;
    memberID: string;
    notes: string;
    providerID: string;
    status: ServiceStatus;
    time: string;
    vehicleID: string;
}
export interface MemberAuthInterface {
    uid: string;
    displayName: string;
    apiKey: string;
    appName: string;
    email: string;
}
export interface ResourceTitleInterface {
    members: string;
    memberMetadata: string;
    events: string;
    eventRsvps: string;
    vehicles: string;
    providers: string;
    services: string;
    vehicleNumbers: string;
    memberNumbers: string;
}
export interface CompletedServiceFormInterface {
    vehicleID: string;
    date: string;
    memberID: string;
    notes: string;
    providerID: string;
    status: string;
}
export interface NewProviderInterface {
    companyName: string;
    contactName: string;
    phoneNumber: string;
    email: string;
    street: string;
    city: string;
    state: string;
    zip: string;
}
export interface NewVehicleInterface {
    memberID: string;
    make: string;
    model: string;
    color: string;
    year: string;
    club: string;
    vehicleNumber: number;
    description?: string;
}
export interface VehicleNumberData {
    id: string;
    vehicleID: string;
}
export interface MemberNumberData {
    id: string;
    memberID: string;
}
export interface PublicMemberRSVPInterface {
    member_email: string;
    member_name: string;
    plus_one: boolean;
    event_id: string;
}
export interface DecodedIdToken {
    aud: string;
    auth_time: number;
    exp: number;
    firebase: {
        identities: {
            [key: string]: any;
        };
        sign_in_provider: string;
        [key: string]: any;
    };
    iat: number;
    iss: string;
    sub: string;
    uid: string;
    [key: string]: any;
}
export declare const ResourcePaths: ResourceTitleInterface;
export declare const ErrorTypes: {
    RESOURCE_NOT_FOUND: string;
    MEMBER_NUMBER_TAKEN: string;
};
export declare const QueryValues: {
    vehicleID: string;
    memberID: string;
    eventID: string;
};
