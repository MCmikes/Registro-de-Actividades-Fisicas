import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const RegistrarActividades = () => {
  
  const [actividad, setActividad] = useState("");
  const [duracion, setDuracion] = useState("");
  const [distancia, setDistancia] = useState("");
  

  const manejarRegistro = (e) => {
    e.preventDefault();

   
    const nuevaActividad = {
      actividad,
      duracion,
      distancia,
    
    };

    
    const actividadesGuardadas = JSON.parse(localStorage.getItem("actividades")) || [];
    actividadesGuardadas.push(nuevaActividad);
    localStorage.setItem("actividades", JSON.stringify(actividadesGuardadas));

   
    alert("¡Actividad registrada con éxito!");

    
    setActividad("");
    setDuracion("");
    setDistancia("");
    
  };

  return (
    <Form
      className="p-3"
      style={{ maxWidth: "500px", margin: "auto" }}
      onSubmit={manejarRegistro}
    >
      <h2 className="text-center mb-4">Registrar Actividad Física</h2>

      {/* Campo: Tipo de actividad */}
      <Form.Group className="mb-3" controlId="formActividad">
        <Form.Label>Tipo de Actividad</Form.Label>
        <Form.Select
          value={actividad}
          onChange={(e) => setActividad(e.target.value)}
          required
        >
          <option value="">Seleccionar actividad</option>
          <option value="Correr">Correr</option>
          <option value="Nadar">Nadar</option>
          <option value="Ciclismo">Ciclismo</option>
          <option value="Caminar">Caminar</option>
          <option value="Yoga">Yoga</option>
          <option value="Levantamiento de Pesas">Levantamiento de Pesas</option>
          <option value="Pilates">Pilates</option>
          <option value="Otro">Otro</option>
        </Form.Select>
      </Form.Group>

      {/* Campo: Duración */}
      <Form.Group className="mb-3" controlId="formDuracion">
        <Form.Label>Duración (en minutos)</Form.Label>
        <Form.Control
          type="number"
          placeholder="Ejemplo: 60"
          value={duracion}
          onChange={(e) => setDuracion(e.target.value)}
          required
        />
      </Form.Group>

      {/* Campo: Distancia */}
      <Form.Group className="mb-3" controlId="formDistancia">
        <Form.Label>Distancia (en kilómetros)</Form.Label>
        <Form.Control
          type="number"
          placeholder="Ejemplo: 5"
          value={distancia}
          onChange={(e) => setDistancia(e.target.value)}
          //required
        />
      </Form.Group>

      

      {/* Botón para enviar */}
      <Button variant="success" type="submit" className="w-100">
        Registrar Actividad
      </Button>
    </Form>
  );
};

export default RegistrarActividades;

