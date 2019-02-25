import * as firebase from 'firebase';
import { MemberAuthInterface, DecodedIdToken } from './types';
export declare type authStateChangeCallback = ((a: any | null) => any);
export declare type AuthUser = firebase.User;
export default class FirebaseAuth {
    /**
     * Return the initialized Firebase SDK.
     */
    static sharedInstance(): firebase.app.App;
    /**
     * Creates a user account with email and password.
     * Returns the UID of the created auth member
     * @param email User email.
     * @param password User password.
     */
    static createMemberWithEmailAndPassword(email: string, password: string): Promise<string>;
    /**
     * Sends a password reset email to the Auth'd member's email.
     * After providing a new password, the member will be redirected to the /signin page.
     * @param email The email of the logged in member.
     */
    static sendPasswordResetEmail(email: string): Promise<any>;
    /**
     * Returns a signed ID token for the currently logged in member.
     * This token will be used to authenticate requests to the Firebase Cloud Function endpoints.
     */
    static getCurrentMemberIDToken(): Promise<DecodedIdToken>;
    /**
     * Signs a user in using an email and password.
     * @param email User email.
     * @param password User password.
     */
    static signInWithEmailAndPassword(email: string, password: string): Promise<string>;
    /**
     * Returns the uid of the currently logged in user. This will
     * return null if there is no authenticated user.
     */
    static getCurrentMember(): AuthUser;
    /**
     * Observer on the Firebase auth instance. Listens for sign-in or sign-out by the logged in member.
     * @param callBack
     */
    static subscribeAuthListener(callBack: authStateChangeCallback): any;
    /**
     * Returns the user object located in Local Storage. This is
     * only used in the web app since local storage works differently
     * in mobile.
     */
    static getAuthMemberFromLocalStorage(): MemberAuthInterface;
    /**
     * Signs out the user.
     */
    static signOut(): Promise<void | Error>;
    private static setSessionPersistence();
}
