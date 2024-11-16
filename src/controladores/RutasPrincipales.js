import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import IniciarSesion from "../componentes/IniciarSesion";
import RegistrarActividades from "../componentes/RegistrarActividades";
import HistorialDeActividades from "../componentes/HistorialDeActividades";
import Graficos from "../componentes/Graficos";
import MenuPrincipal from "../componentes/MenuPrincipal.js";

const RutasPrincipales = () => {
  const [autenticado, setAutenticado] = useState(false);

  return (
    <BrowserRouter>
      {autenticado && <MenuPrincipal setAutenticado={setAutenticado} />}
      <Routes>
        <Route path="/" element={<IniciarSesion setAutenticado={setAutenticado} />} />
        <Route path="/registrar-actividades" element={<RegistrarActividades />} />
        <Route path="/historial" element={<HistorialDeActividades />} />
        <Route path="/graficos" element={<Graficos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RutasPrincipales;




