import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {listenToShippings} from "../actions/shipping";

export const useShippings = () => {
    const { shippings, hasReceivedAllShippings } = useSelector((state) => state.shipping_reducer);
    const dispatch = useDispatch();


    useEffect(() => {
        if(hasReceivedAllShippings === false) {
            console.debug(`[useShippings] Listening to shippings...`);
            listenToShippings()(dispatch);
        }
    }, []);
    return {
        shippings,
        loading: hasReceivedAllShippings === null
    };
};
