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
import {Link} from "react-router-dom";

const Auth = () => {
  return (
    <Container className="auth-container">
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
              <div className="text-center">
              <Link to="/index">
                  <Button className="mb-3">Connexion</Button>
              </Link>
              </div>
              <a href="#" className="text-center">Vous n'avez pas de compte ?</a>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;
