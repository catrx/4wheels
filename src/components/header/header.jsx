import React, {useCallback, useState} from "react";
import {
    Collapse,
    Nav,
    Navbar,
    NavbarBrand, NavbarText,
    NavbarToggler,
    NavItem, NavLink,
    Button,
} from "reactstrap";
import {Link} from "react-router-dom";
import Logo from "../logo/logo";
import {logoutUser} from "../../actions/user";
import {useDispatch} from "react-redux";

export const Header = () => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);

    const logout = useCallback(() => {
        localStorage.removeItem("token")
        logoutUser()(dispatch)
    },[ dispatch]);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <Navbar color="dark" dark expand="md" style={{marginBottom: 20}}>
            <NavbarBrand tag={Link} to="/products-list">
                <Logo size="80"/>
            </NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/products-list">Produits</NavLink>
                    </NavItem>
                    {localStorage.role === 'ROLE_ADMIN' && (
                        <NavItem>
                        <NavLink tag={Link} to="/shippings">Transactions</NavLink>
                    </NavItem>
                    )}
                </Nav>
                <NavbarText>Connecté en tant que {localStorage.role === 'ROLE_ADMIN'? 'Gestionnaire': 'Utilisateur' }
                    <Button style={{marginLeft: 5}} color="danger" onClick={logout}>Déconnexion</Button>
                </NavbarText>
            </Collapse>
        </Navbar>
    );
}
