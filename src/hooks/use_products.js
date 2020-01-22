import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {listenToProducts} from "../actions/product";

export const useProducts = () => {
    const { products, hasReceivedAllProducts } = useSelector((state) => state.product_reducer);
    const dispatch = useDispatch();


    useEffect(() => {
        if(hasReceivedAllProducts === false) {
            console.debug(`[useProducts] Listening to products...`);
            listenToProducts()(dispatch);
        }
    }, []);
    return {
        products,
        loading: hasReceivedAllProducts === null
    };
};
