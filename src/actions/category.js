import {
    LISTEN_TO_CATEGORIES_RECEIVED_DATA,
    LISTEN_TO_CATEGORIES_STARTED,
    LISTEN_TO_CATEGORY_RECEIVED_DATA,
    LISTEN_TO_CATEGORY_STARTED
} from "./types";
import axios from "axios";

export const listenToCategories = () => (dispatch) => {
    dispatch({
        type: LISTEN_TO_CATEGORIES_STARTED
    });
    return axios.get(`http://localhost:8081/category`)
        .then(res => {
            if (res.data) {
                return dispatch({
                    categories: res.data,
                    type: LISTEN_TO_CATEGORIES_RECEIVED_DATA
                });
            }
            return null;
        });
};

export const listenToCategory = (id) => (dispatch) => {
    dispatch({
        type: LISTEN_TO_CATEGORY_STARTED
    });
    return axios.get(`http://localhost:8081/category/${id}`)
        .then(res => {
            if (res.data) {
                return dispatch({
                    category: res.data,
                    type: LISTEN_TO_CATEGORY_RECEIVED_DATA
                });
            }
            return null;
        });
};
