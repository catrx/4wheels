import {
    DATABASE_EDIT_FINISH,
    DATABASE_EDIT_STARTED,
    LISTEN_TO_PRODUCT_RECEIVED_DATA,
    LISTEN_TO_PRODUCT_STARTED,
    LISTEN_TO_PRODUCTS_RECEIVED_DATA,
    LISTEN_TO_PRODUCTS_STARTED
} from "./types";

import {axios} from './utils';

export const listenToProducts = () => (dispatch) => {
    dispatch({
        type: LISTEN_TO_PRODUCTS_STARTED
    });
    return axios.get(`/product`,{
        headers: {
            'Authorization': `${localStorage.getItem("token")}`
        }
    }).then(res => {
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
    return axios.get(`/product/${id}`, {
        headers: {
            'Authorization': `${localStorage.getItem("token")}`
        }
    }).then(res => {
            if (res.data) {
                return dispatch({
                    product: res.data,
                    type: LISTEN_TO_PRODUCT_RECEIVED_DATA
                });
            }
            return null;
        });
};

export const updateProduct = (newProduct) => (dispatch) => {
    dispatch({
        type: DATABASE_EDIT_STARTED
    });
    return axios.put(`http://localhost:8081/product`, newProduct, {
        headers: {
            'Authorization': `${localStorage.getItem("token")}`
        }
    }).then(res => {
            if (res) {
                return dispatch({
                    type: DATABASE_EDIT_FINISH
                });
            }
            return null;
        });
}

export const addProduct = (newProduct) => (dispatch) => {
    dispatch({
        type: DATABASE_EDIT_STARTED
    });
    return axios.post(`http://localhost:8081/product`, newProduct, {
        headers: {
            'Authorization': `${localStorage.getItem("token")}`
        }
    }).then(res => {
            if (res) {
                return dispatch({
                    type: DATABASE_EDIT_FINISH
                });
            }
            return null;
        });
}
