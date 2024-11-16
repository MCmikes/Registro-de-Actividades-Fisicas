import React, { useEffect, useState } from "react";
import { Card, ListGroup, Alert } from "react-bootstrap";

const HistorialDeActividades = () => {
  const [actividades, setActividades] = useState([]);

  useEffect(() => {
    // Recuperar actividades almacenadas
    const actividadesGuardadas = JSON.parse(localStorage.getItem("actividades")) || [];
    setActividades(actividadesGuardadas);
  }, []);

  return (
    <div className="p-3">
      <h2 className="text-center mb-4">Historial de Actividades</h2>
      {actividades.length === 0 ? (
        <Alert variant="info" className="text-center">
          No hay actividades registradas.
        </Alert>
      ) : (
        <Card >
          <Card.Body>
            <ListGroup variant="flush">
              {actividades.map((actividad, index) => (
                <ListGroup.Item key={index}>
                  <strong>Tipo:</strong> {actividad.actividad} |{" "}
                  <strong>Duración:</strong> {actividad.duracion} min |{" "}
                  <strong>Distancia:</strong> {actividad.distancia} km
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default HistorialDeActividades;

