import {
    LISTEN_TO_PROVIDERS_RECEIVED_DATA,
    LISTEN_TO_PROVIDERS_STARTED,
    LISTEN_TO_PROVIDER_RECEIVED_DATA,
    LISTEN_TO_PROVIDER_STARTED
} from "../../actions/types";

const initialState = {
    hasReceivedAllProviders: false,
    hasReceivedProvider: false,
    providers: [],
    provider: {}
};

export const provider = (state = initialState, action) => {
    switch (action.type) {
        case LISTEN_TO_PROVIDERS_STARTED:
            return {
                ...state,
                hasReceivedAllProviders: null
            };
        case LISTEN_TO_PROVIDERS_RECEIVED_DATA:
            return {
                ...state,
                hasReceivedAllProviders: true,
                providers: action.providers
            };
        case LISTEN_TO_PROVIDER_STARTED:
            return {
                ...state,
                hasReceivedProvider: null
            };
        case LISTEN_TO_PROVIDER_RECEIVED_DATA:
            return {
                ...state,
                hasReceivedProvider: true,
                provider: action.provider
            };
        default:
            return state;
    }
};
