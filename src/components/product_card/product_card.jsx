import React from "react";
import {
  Card,
  CardBody,
  CardLink,
  CardSubtitle,
  CardText,
  CardTitle,
  Col
} from "reactstrap";
import './product_card.css'
import logo from '../../assets/pictures/wait.png'

export const ProductCard = ({ product }) => {
  if (!product) {
    return null;
  }
  return (
    <Col className="col-4">
      <Card className="card-container">
        <img
          src={logo}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>{product.name}</CardTitle>
          <CardSubtitle>{product.price} $</CardSubtitle>
          <CardText>{product.description}</CardText>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </CardBody>
      </Card>
    </Col>
  );
};
