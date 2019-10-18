import React from "react";
import { Link } from "react-router-dom";

import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
class NavbarUsuario extends React.Component {
  render() {
    return (
      <div style = {{position: "fixed", width: "100%", zIndex :"99", top:"0"}}>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Reservar Restaurante</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Reservas" id="basic-nav-dropdown">
         <Link to ="/Reservas">       <NavDropdown.Item href="#action/3.1">Reservar</NavDropdown.Item></Link>
                <NavDropdown.Item href="#action/3.2">
                  Reservas Previas
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Agenda de Reservas
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
          <Link to ="/login"  >  <Button variant="outline-success">LogIn</Button></Link>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarUsuario;
