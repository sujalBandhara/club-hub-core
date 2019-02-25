import * as firebase from 'firebase';
import { EnvironmentTypes } from '../constants';
export interface FirebaseConfig {
    apiKey: string;
    authDomain: string;
    databaseURL: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
}
/**
 * Handles Firebase initialization.
 */
declare let FirebaseApp: firebase.app.App;
export declare const initFirebase: (env: EnvironmentTypes) => void;
export { FirebaseApp };
