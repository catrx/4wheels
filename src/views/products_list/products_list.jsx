import React, {useState} from "react";
import {Button, Col, Container, Row} from "reactstrap";
import { ProductCard } from "../../components/product_card/product_card";
import { useProducts } from "../../hooks/use_products";
import './products_list.css'
import {ProductsListModal} from "./products_list_modal/products_list_modal";

export const ProductsList = () => {
  const { products, loading } = useProducts();
  const [open, setModal] = useState(false);

  const handleModal = () => setModal(!open);

  if (loading) {
    return null;
  }
  return (
    <Container>
      <Row>
        <Col className="offset-10">
          <Button className="fix-button shadow rounded" color="info" onClick={handleModal}>Ajouter un produit</Button>
          <ProductsListModal open={open} handleModal={handleModal}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            {products.map(product => (
              <Col className="col-3">
                <ProductCard key={product.id} {...{ product, isManage:false }} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
