import React, {useCallback, useState} from "react";
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

import "./auth.css";
import Logo from "../../components/logo/logo";
import {userLoginFetch} from "../../actions/user";
import {useDispatch} from "react-redux";

const Auth = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = useCallback(() => {
        const userObj = {
            email,
            password
        };
        userLoginFetch(userObj)(dispatch);
    }, [email, password, dispatch]);
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
                            <Input
                                type="text"
                                placeholder="mail"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </InputGroup>
                        <InputGroup className="mb-4">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>...</InputGroupText>
                            </InputGroupAddon>
                            <Input
                                type="password"
                                placeholder="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </InputGroup>
                        <div className="text-center">
                            <Button className="mb-3" onClick={login}>
                                Connexion
                            </Button>
                        </div>
                        <a href="#" className="text-center">
                            Vous n'avez pas de compte ?
                        </a>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Auth;
