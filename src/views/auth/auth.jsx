import React from "react";
import {
    Button,
    Card,
    Col,
    Container,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Row
} from "reactstrap";

import './auth.css'
import Logo from "../../components/logo/logo";

const Auth = () => {
  return (
    <Container className="container">
      <Row>
        <Col sm="col-sm-12 col-md-5 offset-md-3">
          <Card body>
              <div className="text-center mb-4">
                  <Logo/>
              </div>
              <InputGroup className="mb-4">
                  <InputGroupAddon addonType="prepend">
                      <InputGroupText>@</InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="mail" />
              </InputGroup>
              <InputGroup className="mb-4">
                  <InputGroupAddon addonType="prepend">
                      <InputGroupText>...</InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="password" />
              </InputGroup>
            <Button className="mb-3">Connexion</Button>
              <a href="#" className="text-center">Vous n'avez pas de compte ?</a>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;
