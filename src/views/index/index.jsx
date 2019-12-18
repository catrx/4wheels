import React from "react";
import {Col, Container, Row, Button} from "reactstrap";
import {useCategory} from "../../hooks/use_category";

const Index = () => {
    const {category, loading} = useCategory('1')

    if(loading) {
        return null;
    }

    console.log(category)

    return (
        <Container>
            <Row>
                <Col lg="12">
                    <Row className="mb-2 p-1">
                        <Col className="col-12 p-0">
                            <Button color="danger">Geo LaD</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Index
