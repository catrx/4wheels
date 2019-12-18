import {
    LISTEN_TO_CATEGORIES_RECEIVED_DATA,
    LISTEN_TO_CATEGORIES_STARTED, LISTEN_TO_CATEGORY_RECEIVED_DATA, LISTEN_TO_CATEGORY_STARTED
} from '../../actions/types';

const initialState = {
    hasReceivedAllCategories: false,
    hasReceivedCategory: false,
    categories: [],
    category: {}
};

export const category = (state = initialState, action) => {
    switch (action.type) {
        case LISTEN_TO_CATEGORIES_STARTED:
            return {
                ...state,
                hasReceivedAllCategories: null
            };
        case LISTEN_TO_CATEGORIES_RECEIVED_DATA:
            return {
                ...state,
                hasReceivedAllCategories: true,
                categories: action.categories
            };
        case LISTEN_TO_CATEGORY_STARTED:
            return {
                ...state,
                hasReceivedCategory: null
            };
        case LISTEN_TO_CATEGORY_RECEIVED_DATA:
            return {
                ...state,
                hasReceivedCategory: true,
                category: action.category
            };
        default:
            return state;
    }
};
