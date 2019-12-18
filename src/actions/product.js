import axios from "axios";
import {
    LISTEN_TO_PRODUCT_RECEIVED_DATA,
    LISTEN_TO_PRODUCT_STARTED,
    LISTEN_TO_PRODUCTS_RECEIVED_DATA,
    LISTEN_TO_PRODUCTS_STARTED
} from "./types";

export const listenToProducts = () => (dispatch) => {
    dispatch({
        type: LISTEN_TO_PRODUCTS_STARTED
    });
    return axios.get(`http://localhost:8081/product`)
        .then(res => {
            if (res.data) {
                return dispatch({
                    products: res.data,
                    type: LISTEN_TO_PRODUCTS_RECEIVED_DATA
                });
            }
            return null;
        });
};

export const listenToProduct = (id) => (dispatch) => {
    dispatch({
        type: LISTEN_TO_PRODUCT_STARTED
    });
    return axios.get(`http://localhost:8081/product/${id}`)
        .then(res => {
            if (res.data) {
                return dispatch({
                    product: res.data,
                    type: LISTEN_TO_PRODUCT_RECEIVED_DATA
                });
            }
            return null;
        });
};
