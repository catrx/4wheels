import React, {useCallback, useEffect, useState} from "react";
import {Input} from "reactstrap";
import './search_bar.css'

export const SearchBar = ({ handleSearch}) => {
    const [searchTerms, setSearchTerms] = useState('');

    const handleChangeSearch = useCallback(e => {
        setSearchTerms(e.target.value);
    }, []);

    useEffect(() => {
        handleSearch(searchTerms);
    }, [searchTerms, handleSearch]);

    return (
            <Input
                type="text"
                name="search"
                id="search"
                className="search-bar"
                placeholder="rechercher par catégorie, fournisseur ou modèle"
                value={searchTerms || ''}
                onChange={handleChangeSearch}
            />
    );
}
