import {
    LISTEN_TO_SHIPPINGS_RECEIVED_DATA,
    LISTEN_TO_SHIPPINGS_STARTED
} from "./types";

import { axios } from './utils';

export const listenToShippings = () => (dispatch) => {
    dispatch({
        type: LISTEN_TO_SHIPPINGS_STARTED
    });
    return axios.get(`/shipping`)
        .then(res => {
            if (res.data) {
                return dispatch({
                    shippings: res.data,
                    type: LISTEN_TO_SHIPPINGS_RECEIVED_DATA
                });
            }
            return null;
        });
};