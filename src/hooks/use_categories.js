import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {listenToCategories} from "../actions/category";

export const useCategories = () => {
    const { categories, hasReceivedAllCategories } = useSelector((state) => state.category_reducer);
    const dispatch = useDispatch();

    useEffect(() => {
        if (hasReceivedAllCategories === false) {
            console.debug(`[useCategories] Listening to categories...`);
            listenToCategories()(dispatch);
        }
    }, [hasReceivedAllCategories, dispatch]);
    return {
        categories,
        loadingCategories: hasReceivedAllCategories === null
    };
};
