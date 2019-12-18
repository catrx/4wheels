import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {listenToProduct} from "../actions/product";

export const useProduct = (id) => {
    const { product, hasReceivedProduct } = useSelector((state) => state.product_reducer);
    const dispatch = useDispatch();

    useEffect(() => {
        if (hasReceivedProduct === false) {
            console.debug(`[useProduct] Listening to product`);
            listenToProduct(id)(dispatch);
        }
    }, [hasReceivedProduct]);

    return {
        product,
        loading: hasReceivedProduct === null
    };
};
