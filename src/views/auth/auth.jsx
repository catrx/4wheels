import React from "react";
import {
    Button,
    Card, CardHeader,
    Col,
    Container,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Row
} from "reactstrap";

import logo from '../../assets/pictures/logo1.png';
import './auth.css'

const Auth = () => {
  return (
      <div className="fond">
    <Container className="container">
      <Row>
        <Col sm="col-sm-12 col-md-5 offset-md-3">
          <Card body>
              <div className="text-center mb-4">
                  <img src={logo} alt="logo" className="logo" />
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
      </div>
  );
};

export default Auth;
