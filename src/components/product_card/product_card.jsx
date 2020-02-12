import React, {useCallback, useState} from "react";
import {
    Button,
    Card,
    CardBody,
    CardText,
    CardTitle,
    Col,
    Container,
    Row,
    Badge
} from "reactstrap";
import "./product_card.css";
import {MdDriveEta, MdStyle} from "react-icons/md";
import {useHistory} from "react-router";
import {ProductModal} from "./product_modal/product_modal";
import * as jsPDF from "jspdf";

export const ProductCard = ({product, isManage}) => {
    const [open, setModal] = useState(false);
    let history = useHistory();

    const convertToPDF = useCallback(() => {
        const pdfObject = [
            `Identifiant : ${product.id}`,
            `Nom du Véhicule : ${product.name}`,
            `Prix : ${product.price}`,
            `Description : ${product.description}`,
            `Stock : ${product.stock}`,
            `Categorie : ${product.category.name}`,
            `Fournisseur : ${product.provider.denomination}`,
            `Image : ${product.handle}`
        ];
        const doc = new jsPDF();
        pdfObject.map((value, i) => {
            doc.text(value, 20, 10 + i * 10);
        });
        return doc.save(`product_${product.id}.pdf`);
    }, [product]);

    if (!product || !product.category || !product.provider) {
        return null;
    }

    const handleModal = () => setModal(!open);

    const handleClick = () => {
        if (!isManage) {
            history.push(`/product/${product.id}`);
        }
    };
    return (
        <>
            <Card
                className={`card-container shadow bg-white rounded ${
                    !isManage ? "card-hoverable" : ""
                }`}
                onClick={handleClick}
            >
                <h4 className="mb-0 position-absolute price-badge">
                    <Badge color="warning">{product.price} €</Badge>
                </h4>
                <img
                    className="img-fluid"
                    src={`https://cdn.filestackcontent.com/AwWmRHZ8TlGDVt8xpGRhAz/resize=w:400,h:300,fit:crop/${product.handle}`}
                    alt={product.id}
                    width="100%"
                    height={isManage ? "100%" : 150}
                />
                <CardBody>
                    <Container fluid={true}>
                        <CardTitle className="mb-0 text-center font-weight-bold">
                            {product.name}
                        </CardTitle>
                        {isManage && (
                            <>
                                <Row>
                                    <Col>
                                        <CardText>
                                            <div className="icon-container">
                                                <MdStyle className="icon"/>
                                                <div>{product.category.name}</div>
                                            </div>
                                        </CardText>
                                    </Col>
                                    <Col>
                                        <CardText>
                                            <div className="icon-container">
                                                <MdDriveEta className="icon"/>
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
                                        <CardText className="stock">
                                            reste {product.stock} véhicule(s)
                                        </CardText>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        {localStorage.role === "ROLE_ADMIN" && (
                                            <>
                                                <Button
                                                    color="info"
                                                    className="float-right"
                                                    style={{margin: 5}}
                                                    onClick={handleModal}
                                                >
                                                    Editer
                                                </Button>
                                                <Button
                                                    color="info"
                                                    className="float-right"
                                                    style={{margin: 5}}
                                                    onClick={convertToPDF}
                                                >
                                                    Exporter en PDF
                                                </Button>
                                                <ProductModal
                                                    {...{product}}
                                                    open={open}
                                                    handleModal={handleModal}
                                                />
                                            </>
                                        )}
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
