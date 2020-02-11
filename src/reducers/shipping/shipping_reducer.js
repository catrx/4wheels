import {
    LISTEN_TO_SHIPPINGS_RECEIVED_DATA,
    LISTEN_TO_SHIPPINGS_STARTED
} from "../../actions/types";

const initialState = {
    hasReceivedAllShippings: false,
    products: []
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
                products: action.shippings
            };
        default:
            return state;
    }
};
