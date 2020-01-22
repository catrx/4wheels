import {combineReducers} from 'redux';
import {category} from "./category/category_reducer";
import {product} from "./product/product_reducer";
import {provider} from "./provider/provider_reducer";
import {user} from "./user_reducer";

export default combineReducers({
    category_reducer: category,
    product_reducer: product,
    provider_reducer: provider,
    user_reducer: user
});
