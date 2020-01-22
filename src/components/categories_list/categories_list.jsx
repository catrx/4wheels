import React from "react";
import {useCategories} from "../../hooks/use_categories";
import './categories_list.css'
import ScrollContainer from "react-indiana-drag-scroll";
import {Button} from "reactstrap";
import {useProviders} from "../../hooks/use_providers";

export const CategoriesList = ({handleCategorySelected}) => {
    const {categories = []} = useCategories();
    const {providers = []} = useProviders();
    return(
        <ScrollContainer horizontal nativeMobileScroll>
            <div className="categories">
                <Button className="category" value={null} onClick={handleCategorySelected}>{'Tous'}</Button>
                {categories.map(category => (
                    <Button className="category" value={category.name} onClick={handleCategorySelected}>{category.name}</Button>
                ))}
                {providers.map(provider => (
                    <Button className="category" value={provider.denomination} onClick={handleCategorySelected}>{provider.denomination}</Button>
                ))}
            </div>
        </ScrollContainer>
    )
}
