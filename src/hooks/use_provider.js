import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {listenToProvider} from "../actions/provider";

export const useProvider = (id) => {
    const { provider, hasReceivedProvider } = useSelector((state) => state.provider_reducer);
    const dispatch = useDispatch();

    useEffect(() => {
        console.debug(`[useProduct] Listening to product`);
        listenToProvider(id)(dispatch);
    }, []);

    return {
        provider,
        loading: hasReceivedProvider === null
    };
};
