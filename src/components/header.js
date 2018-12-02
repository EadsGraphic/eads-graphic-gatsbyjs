import React from 'react';
import Link from 'gatsby-link';

import logo from '../assets/images/eg-logo.svg';

import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }
    render() {
        return (
            <header>
                <Container>
                    <Navbar className="eg-navbar" expand="sm">
                        <NavbarBrand href="/">
                            <img
                                src={logo}
                                alt={'EadsGraphic Logo'}
                                className="logo"
                            />
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Link className="nav-link" to="/about">
                                        About
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to="/services">
                                        Services
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to="/portfolio">
                                        Portfolio
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to="/contact">
                                        Contact
                                    </Link>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Social
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>Instagram</DropdownItem>
                                        <DropdownItem>Dribbble</DropdownItem>
                                        <DropdownItem>LinkedIn</DropdownItem>
                                        <DropdownItem>Facebook</DropdownItem>
                                        <DropdownItem>YouTube</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Email</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Container>
            </header>
        );
    }
}

export default Header;
