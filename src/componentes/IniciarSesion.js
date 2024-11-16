import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";

const IniciarSesion = ({ setAutenticado }) => {
    const [usuario, setUsuario] = useState("");
    const [contrasena, setContrasena] = useState("");

    const navigate = useNavigate();

    const credenciales = {
        usuario: "admin",
        contrasena: "123",
    };

    const manejarInicioSesion = (e) => {
        e.preventDefault();

        if (usuario === credenciales.usuario && contrasena === credenciales.contrasena) {
            setAutenticado(true);
            navigate("/registrar-actividades");
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    };

    return (
        <Container
            fluid
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "100vh" }}
        >
            <Row className="w-100 justify-content-center">
                <Col md={6} lg={4}>
                    <Card className="shadow-lg">
                        <Card.Body>
                            <h3 className="text-center mb-4">INICIAR SESIÓN</h3>
                            <Form onSubmit={manejarInicioSesion}>
                                <Form.Group className="mb-3" controlId="formUsuario">
                                    <Form.Label>Usuario</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Ingrese su usuario"
                                        value={usuario}
                                        onChange={(e) => setUsuario(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formContrasena">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Ingrese su contraseña"
                                        value={contrasena}
                                        onChange={(e) => setContrasena(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                                <Button variant="primary" size="sm" type="submit" className="mb-4">
                                    Iniciar Sesión
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default IniciarSesion;



