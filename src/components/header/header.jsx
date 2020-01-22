import React, {useCallback, useState} from "react";
import {
    Collapse, DropdownItem, DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand, NavbarText,
    NavbarToggler,
    NavItem, NavLink,
    Button,
    UncontrolledDropdown
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
    },[localStorage, dispatch]);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <Navbar color="dark" dark expand="md" style={{marginBottom: 20}}>
            <NavbarBrand tag={Link} to="/index">
                <Logo size="80"/>
            </NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/products-list">Produits</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Options
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                Option 1
                            </DropdownItem>
                            <DropdownItem>
                                Option 2
                            </DropdownItem>
                            <DropdownItem divider/>
                            <DropdownItem>
                                Reset
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
                <NavbarText>Connecté en tant que Utilisateur
                    <Button style={{marginLeft: 5}} color="danger" onClick={logout}>Déconnexion</Button>
                </NavbarText>
            </Collapse>
        </Navbar>
    );
}
