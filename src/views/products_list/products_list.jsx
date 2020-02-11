import React, {useCallback, useState, useMemo, useEffect} from "react";
import {Button, Col, Container, Row} from "reactstrap";
import {ProductCard} from "../../components/product_card/product_card";
import {useProducts} from "../../hooks/use_products";
import "./products_list.css";
import {ProductsListModal} from "./products_list_modal/products_list_modal";
import {CategoriesList} from "../../components/categories_list/categories_list";
import {SearchBar} from "./search_bar/search_bar";
import {useDispatch} from "react-redux";

export const ProductsList = () => {
    const dispatch = useDispatch();
    const [open, setModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [type, setType] = useState();
    const {products, loading} = useProducts();

    const handleCategorySelected = useCallback(e => {
        setSearchTerm(e.target.value);
    }, []);

    const filteredProducts = useMemo(() => {
        return products.filter(
            products =>
                products.category.name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                products.provider.denomination
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                products.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [products, searchTerm]);

    const handleModal = useCallback(
        formType => {
            setType(formType, "lol");
            return setModal(!open);
        },
        [open]
    );

    if (loading) {
        return null;
    }
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <SearchBar handleSearch={setSearchTerm}/>
                        <CategoriesList {...{handleCategorySelected}} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Row>
                            {filteredProducts.map(product => (
                                <Col key={`product_${product.id}`} className="col-3">
                                    <ProductCard
                                        key={product.id}
                                        {...{product, isManage: false}}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
            {localStorage.role === 'ROLE_ADMIN' && (
                <>
                    <Button
                        className="fix-button-produit shadow rounded"
                        color="info"
                        onClick={e => handleModal("produit")}
                    >
                        Ajouter un produit
                    </Button>
                    <Button
                        className="fix-button-provider shadow rounded"
                        color="info"
                        onClick={e => handleModal("fournisseur")}
                    >
                        Ajouter un fournisseur
                    </Button>
                    <ProductsListModal open={open} handleModal={handleModal} type={type}/>
                </>
            )}
        </>
    );
};
