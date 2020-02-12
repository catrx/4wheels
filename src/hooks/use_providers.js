import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {listenToProviders} from "../actions/provider";

export const useProviders = () => {
    const { providers, hasReceivedAllProviders } = useSelector((state) => state.provider_reducer);
    const dispatch = useDispatch();

    useEffect(() => {
        if (hasReceivedAllProviders === false) {
            console.debug(`[useProducts] Listening to products...`);
            listenToProviders()(dispatch);
        }
    }, [hasReceivedAllProviders, dispatch]);
    return {
        providers,
        loadingProviders: hasReceivedAllProviders === null
    };
};
