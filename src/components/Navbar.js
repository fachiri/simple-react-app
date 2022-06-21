import React from "react";
import "../css/Style.css"
import { Navbar, 
  NavbarBrand, 
  NavbarToggler, 
  Collapse, 
  Nav, 
  NavItem, 
  NavLink,
  NavbarText,
  Input,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  Card,
  CardBody
} from 'reactstrap';
import {
    BrowserRouter as Router,
    Switch,
    Rout,
    Link
  } from "react-router-dom";

class NavbarSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }))
    }

    render() {
        return (
            <div className="container-fluid bg-danger">
                <Navbar color="danger" expand="lg" dark className="container">
                    <NavbarBrand href="/">Test React App</NavbarBrand>
                    <NavbarToggler onClick={this.handleToggle}/>
                    <Collapse navbar isOpen={this.state.isOpen}>
                        <Nav className="ms-auto" navbar>
                            <NavItem>
                                <Link to="/">
                                    <NavLink>Home</NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/get-random">
                                    <NavLink>Get Random</NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/search">
                                    <NavLink>Search</NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/fachiri" className="text-decoration-underline">My GitHub</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavbarSection;