import { ActionCreatorsMapObject, Action } from "redux";
import { Provider } from '../Firebase/types';
/**
 * FetchedAllProvidersAction is dispatched after all providers are fetched.
 */
export interface FetchedAllProvidersAction extends Action {
    type: string;
    providers: Provider[];
    receivedAt: number;
}
/**
 * Defines the interface for our ProviderAction object.
 */
export interface ProviderDispatch extends ActionCreatorsMapObject {
    fetchAllProviders(): any;
    fetchedAllProviders(providers: Provider[]): FetchedAllProvidersAction;
}
export declare const FETCHED_ALL_PROVIDERS = "FETCHED_ALL_PROVIDERS";
export declare const ProviderActions: ProviderDispatch;
