import React from "react";
import { Col, Container, Row } from "reactstrap";
import { ProductCard } from "../../components/product_card/product_card";
import { useProducts } from "../../hooks/use_products";

export const ProductsList = () => {
  const { products, loading } = useProducts();

  if (loading) {
    return null;
  }
  return (
    <Container>
      <Row>
        <Col lg="12">
          <Row className="mb-2 p-1">
              {products.map(product => (
                <ProductCard key={product.id} {...{ product }} />
              ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
