import { Provider } from '../Firebase/types';
export interface ProviderState {
    provider: Provider | null;
    providers: Provider[];
}
declare function provider(state: ProviderState, action: any): ProviderState;
export default provider;
