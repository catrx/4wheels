import React from "react";
import { useShippings } from "../../hooks/use_shippings";
import { Row, Container, Col, Table } from "reactstrap";

export const Shippings = () => {
    const { shippings } = useShippings();
    //const { shippings } = [];
    console.info(shippings);
    if (!shippings) {
        return (
            <Container>
                <Row>
                    No shippings
                </Row>
            </Container>)
    }
    else {
        return (
            <Container>
                <Row>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>Produit</th>
                                <th>Fournisseur</th>
                                <th>Catégorie</th>
                                <th>Prix</th>
                                <th>Client</th>
                                <th>Date d'envoi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {shippings.map((shipping, key) => {
                                return (
                                    <tr key={key}>
                                        <td>{shipping.product.name}</td>
                                        <td>{shipping.product.provider.denomination}</td>
                                        <td>{shipping.product.category.name}</td>
                                        <td>{shipping.product.price} €</td>
                                        <td>{shipping.users.lastName} {shipping.users.firstName}</td>
                                        <td>{shipping.dateSend}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Row>
            </Container>

        )
    }
}