import {
    LISTEN_TO_PRODUCT_RECEIVED_DATA,
    LISTEN_TO_PRODUCT_STARTED,
    LISTEN_TO_PRODUCTS_RECEIVED_DATA,
    LISTEN_TO_PRODUCTS_STARTED
} from "../../actions/types";

const initialState = {
    hasReceivedAllProducts: false,
    hasReceivedProduct: false,
    products: [],
    product: {}
};

export const product = (state = initialState, action) => {
    switch (action.type) {
        case LISTEN_TO_PRODUCTS_STARTED:
            return {
                ...state,
                hasReceivedAllProducts: null
            };
        case LISTEN_TO_PRODUCTS_RECEIVED_DATA:
            return {
                ...state,
                hasReceivedAllProducts: true,
                products: action.products
            };
        case LISTEN_TO_PRODUCT_STARTED:
            return {
                ...state,
                hasReceivedProduct: null
            };
        case LISTEN_TO_PRODUCT_RECEIVED_DATA:
            return {
                ...state,
                hasReceivedProduct: true,
                product: action.product
            };
        default:
            return state;
    }
};
