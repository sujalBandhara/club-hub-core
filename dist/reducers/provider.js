"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Action Types
var provider_1 = require("../actions/provider");
var defaultState = {
    provider: null,
    providers: []
};
function provider(state, action) {
    if (state === void 0) { state = defaultState; }
    switch (action.type) {
        case provider_1.FETCHED_ALL_PROVIDERS:
            return Object.assign({}, state, {
                providers: action.providers
            });
        default:
            return state;
    }
}
exports.default = provider;
//# sourceMappingURL=provider.js.map