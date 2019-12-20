import React from "react";
import {useParams} from "react-router";
import {ProductCard} from "../../components/product_card/product_card";
import {useProduct} from "../../hooks/use_product";
import {Col, Container, Row} from "reactstrap";

export const Product = () => {
    const { id = '' } = useParams();
    const {product, loading} = useProduct(id)
    if(loading) {
        return null;
    }
    return (
        <Container>
            <Row>
                <Col className="col-6 offset-3">
                    <ProductCard {...{product, isManage:true}} />
                </Col>
            </Row>
        </Container>
    )
}
