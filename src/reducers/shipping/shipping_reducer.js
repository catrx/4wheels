import {
    LISTEN_TO_SHIPPINGS_RECEIVED_DATA,
    LISTEN_TO_SHIPPINGS_STARTED
} from "../../actions/types";

const initialState = {
    hasReceivedAllShippings: false,
    shippings: []
};

export const shipping = (state = initialState, action) => {
    switch (action.type) {
        case LISTEN_TO_SHIPPINGS_STARTED:
            return {
                ...state,
                hasReceivedAllShippings: null
            };
        case LISTEN_TO_SHIPPINGS_RECEIVED_DATA:
            return {
                ...state,
                hasReceivedAllShippings: true,
                shippings: action.shippings
            };
        default:
            return state;
    }
};
