import {combineReducers} from 'redux';
import {category} from "./category/category_reducer";
import {product} from "./product/product_reducer";

export default combineReducers({
    category_reducer: category,
    product_reducer: product
});
