import React, { Component } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

import { NavLink as RRNavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggleIsOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return <Navbar color="primary" dark expand="md">
            <Container>
                <NavLink
                    tag={RRNavLink}
                    className="navbar-brand"
                    exact to="/">
                    <i className="fa fa-cubes mr-3"></i>
                    <span className="project-name">Software Technologies</span>
                </NavLink>
            <NavbarToggler onClick={this.toggleIsOpen} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink
                            tag={RRNavLink}
                            exact to="/"
                            activeClassName="active">
                            Начало
                        </NavLink>
                    </NavItem>

                    {/* Това означава, че добавяш линк в навигацията, който води към /learning   */}

                    {/* TODO 
                        1. Да махна всички линкове в навигацията, които не използвам
                        2. Да добавя всички линкове, които смятам да имам в проекта (по подобие на learning)
                    */}

                    <NavItem>
                        <NavLink
                            tag={RRNavLink}
                            exact to="/learning"
                            activeClassName="active">
                            Учене
                        </NavLink>
                    </NavItem>


                    <NavItem>
                        <NavLink
                            tag={RRNavLink}
                            exact to="/popularmovies"
                            activeClassName="active">
                            Popular Movies
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            tag={RRNavLink}
                            exact 
                            to="/gallery"
                            activeClassName="active">
                            Gallery
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
            </Container>
        </Navbar>
    }
}

export default Header;