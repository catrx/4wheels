import {
    LISTEN_TO_PROVIDERS_RECEIVED_DATA,
    LISTEN_TO_PROVIDERS_STARTED,
    LISTEN_TO_PROVIDER_RECEIVED_DATA,
    LISTEN_TO_PROVIDER_STARTED, DATABASE_EDIT_STARTED, DATABASE_EDIT_FINISH
} from "./types";
import axios from "axios";

export const listenToProviders = () => (dispatch) => {
    dispatch({
        type: LISTEN_TO_PROVIDERS_STARTED
    });
    return axios.get(`http://localhost:8081/provider`)
        .then(res => {
            if (res.data) {
                return dispatch({
                    providers: res.data,
                    type: LISTEN_TO_PROVIDERS_RECEIVED_DATA
                });
            }
            return null;
        });
};

export const listenToProvider = (id) => (dispatch) => {
    dispatch({
        type: LISTEN_TO_PROVIDER_STARTED
    });
    return axios.get(`http://localhost:8081/provider/${id}`)
        .then(res => {
            if (res.data) {
                return dispatch({
                    provider: res.data,
                    type: LISTEN_TO_PROVIDER_RECEIVED_DATA
                });
            }
            return null;
        });
};

export const addProvider = (newProvider) => (dispatch) => {
    dispatch({
        type: DATABASE_EDIT_STARTED
    });
    return axios.post(`http://localhost:8081/provider`, newProvider)
        .then(res => {
            if (res) {
                return dispatch({
                    type: DATABASE_EDIT_FINISH
                });
            }
            return null;
        });
}