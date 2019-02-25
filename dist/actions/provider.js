"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Action types.
exports.FETCHED_ALL_PROVIDERS = 'FETCHED_ALL_PROVIDERS';
// -----------------------------------------------------------------------------
// Fetch All Providers
// -----------------------------------------------------------------------------
/**
 * Fetch all providers.
 */
var fetchAllProviders = function () { return function (dispatch) { }; };
/**
 * Builds a `FetchedAllProvidersAction` after fetching all providers.
 * @return The `FetchedAllProvidersAction` instance.
 */
var fetchedAllProviders = function (providers) {
    var action = {
        receivedAt: Date.now(),
        type: exports.FETCHED_ALL_PROVIDERS,
        providers: providers,
    };
    return action;
};
exports.ProviderActions = {
    fetchAllProviders: fetchAllProviders,
    fetchedAllProviders: fetchedAllProviders
};
//# sourceMappingURL=provider.js.map