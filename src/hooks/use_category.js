import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {listenToCategory} from "../actions/category";

export const useCategory = (id) => {
    const { category, hasReceivedCategory } = useSelector((state) => state.category_reducer);
    const dispatch = useDispatch();

    useEffect(() => {
        if (hasReceivedCategory === false) {
            console.debug(`[useCategory] Listening to category`);
            listenToCategory(id)(dispatch);
        }
    }, [hasReceivedCategory, dispatch]);

    return {
        category,
        loading: hasReceivedCategory === null
    };
};
