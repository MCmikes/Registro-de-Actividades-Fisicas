import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

const MenuPrincipal = ({ setAutenticado }) => {
  const navigate = useNavigate();

  
  const manejarCerrarSesion = () => {
    setAutenticado(false);
    navigate("/");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-3">
      <Container>
        <Navbar.Brand as={Link} to="/registrar-actividades">
          Fitness
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/registrar-actividades">
              Registrar Actividades
            </Nav.Link>
            <Nav.Link as={Link} to="/historial">
              Historial
            </Nav.Link>
            <Nav.Link as={Link} to="/graficos">
              Gráficos
            </Nav.Link>
          </Nav>
          {/* Botón para cerrar sesión */}
          <Nav>
            <Nav.Link onClick={manejarCerrarSesion} style={{ color: "white" }}>
              Cerrar Sesión
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MenuPrincipal;

