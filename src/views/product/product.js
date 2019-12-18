import React from "react";
import {useParams} from "react-router";
import {ProductCard} from "../../components/product_card/product_card";
import {useCategory} from "../../hooks/use_category";

export const Product = () => {
    const { id = '' } = useParams();
    const {category, loading} = useCategory(id)
    if(loading) {
        return null;
    }
    console.log(category)
    return (
        <ProductCard {...{category}} />
    )
}
