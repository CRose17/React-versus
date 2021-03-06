import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron }  from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            isNavOpen: false            
         };
         this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() { 
        return ( 
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                            <h1>Versus Obstacle</h1>
                            <h3>The battle within</h3>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"><img className="versusLogo" src="/assets/images/versusLogo.jpg" height="80" width="120" alt="Versus Logo" /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-large" /> Home
                                    </NavLink>
                                </NavItem>
{/*                                 <NavItem>
                                    <NavLink className="nav-link" to="/directory">
                                        <i className="fa fa-list fa-large" /> Directory
                                    </NavLink>
                                </NavItem> */}
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <i className="fa fa-info fa-large" /> About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <i className="fa fa-address-card fa-large" /> Contact
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/schedule">
                                        <i className="fa fa-calendar fa-large" /> Schedule
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/pricing">
                                        <i className="fa fa-superpowers fa-large" /> Pricing
                                    </NavLink>
                                </NavItem>
                            </Nav>                            
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
         );
    }
}
 
export default Header;