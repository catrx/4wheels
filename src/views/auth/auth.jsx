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
              <div className="text-center">
                  <img src={logo} alt="logo" className="logo" />
              </div>
              <br/>
              <InputGroup>
                  <InputGroupAddon addonType="prepend">
                      <InputGroupText>@</InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="mail" />
              </InputGroup>
              <br/>
              <InputGroup>
                  <InputGroupAddon addonType="prepend">
                      <InputGroupText>...</InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="password" />
              </InputGroup>
              <br/>
            <Button>Connexion</Button>
          </Card>
        </Col>
      </Row>
    </Container>
      </div>
  );
};

export default Auth;
