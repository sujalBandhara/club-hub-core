import { EnvironmentTypes } from '../constants';
export interface FirebaseConfigurationInterface {
    apiKey: string;
    authDomain: string;
    databaseURL: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
}
export declare const testFunctionURL = "https://us-central1-drivers-club-test.cloudfunctions.net";
export declare const testConfig: FirebaseConfigurationInterface;
export declare const devFunctionURL = "https://us-central1-drivers-club-dev.cloudfunctions.net";
export declare const devConfig: FirebaseConfigurationInterface;
export declare const prodFunctionURL = "https://us-central1-drivers-club-prod.cloudfunctions.net";
export declare const prodConfig: FirebaseConfigurationInterface;
export declare const stageFunctionURL = "https://us-central1-drivers-club-stage.cloudfunctions.net";
export declare const stageConfig: FirebaseConfigurationInterface;
export declare const GetConfig: (env: EnvironmentTypes) => FirebaseConfigurationInterface;
export declare const GetFunctionURL: (env: EnvironmentTypes) => string;
