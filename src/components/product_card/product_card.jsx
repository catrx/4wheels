import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Row
} from "reactstrap";
import "./product_card.css";
import logo from "../../assets/pictures/car-default.jpg";
import { MdEuroSymbol, MdDriveEta, MdStyle } from "react-icons/md";
import { useHistory } from "react-router";
import { ProductModal } from "./product_modal/product_modal";

export const ProductCard = ({ product, isManage }) => {
  const [open, setModal] = useState(false);
  let history = useHistory();
  if (!product || !product.category || !product.provider) {
    return null;
  }

  const handleModal = () => setModal(!open);

  const handleClick = () => {
    if(!isManage) {
      history.push(`/product/${product.id}`);
    }
  };
  return (
    <>
      <Card
        className="card-container shadow bg-white rounded"
        style={{ cursor: isManage ? "auto" : "pointer" }}
        id="TooltipExample"
        onClick={handleClick}
      >
        <img src={`https://cdn.filestackcontent.com/AwWmRHZ8TlGDVt8xpGRhAz/${product.handle}`} alt="Card image cap" width="100%" />
        <CardBody>
          <Container fluid={true}>
            <Row>
              <Col>
                <CardTitle>{product.name}</CardTitle>
              </Col>
              <Col>
                <CardText>
                  <div className="icon-container">
                    <MdEuroSymbol className="icon" />
                    <div>{product.price}</div>
                  </div>
                </CardText>
              </Col>
            </Row>
            {isManage && (
              <>
                <Row>
                  <Col>
                    <CardText>
                      <div className="icon-container">
                        <MdStyle className="icon" />
                        <div>{product.category.name}</div>
                      </div>
                    </CardText>
                  </Col>
                  <Col>
                    <CardText>
                      <div className="icon-container">
                        <MdDriveEta className="icon" />
                        <div>{product.provider.denomination}</div>
                      </div>
                    </CardText>
                  </Col>
                </Row>
                <hr/>
                <Row style={{marginTop: 5}}>
                  <Col>
                    <CardText>{product.description}</CardText>
                  </Col>
                </Row>
                <Row style={{marginTop: 5}}>
                  <Col>
                    <CardText className="stock">reste {product.stock} véhicule(s)</CardText>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <>
                      <Button
                        color="info"
                        className="float-right"
                        onClick={handleModal}
                      >
                        Editer
                      </Button>
                      <ProductModal {...{product}} open={open} handleModal={handleModal} />
                    </>
                  </Col>
                </Row>
              </>
            )}
          </Container>
        </CardBody>
      </Card>
    </>
  );
};
