import React, { useEffect, useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js";
import { Card, Container } from "react-bootstrap";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Graficos = () => {
  const [datosGrafico, setDatosGrafico] = useState({});
  const [datosPie, setDatosPie] = useState({});

  useEffect(() => {
    const actividades = JSON.parse(localStorage.getItem("actividades")) || [];
    const actividadesPorTipo = actividades.reduce((acc, actividad) => {
      acc[actividad.actividad] = (acc[actividad.actividad] || 0) + 1;
      return acc;
    }, {});

    // Ordenar las actividades por cantidad y seleccionar las 5 más realizadas
    const actividadesOrdenadas = Object.entries(actividadesPorTipo)
      .sort((a, b) => b[1] - a[1]) // Ordena por frecuencia
      .slice(0, 5); // Toma los 5 primeros

    const labels = actividadesOrdenadas.map((item) => item[0]);
    const data = actividadesOrdenadas.map((item) => item[1]);

    setDatosGrafico({
      labels: labels,
      datasets: [
        {
          label: "Cantidad de Actividades",
          data: data,
          backgroundColor: "rgba(75, 192, 192, 0.6)",
        },
      ],
    });

    setDatosPie({
      labels: labels,
      datasets: [
        {
          label: "Distribución de Actividades",
          data: data,
          backgroundColor: ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FF9133"],
        },
      ],
    });
  }, []);

  if (!datosGrafico.datasets || datosGrafico.datasets.length === 0) {
    return <div>Loading...</div>;
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    height: 250, // Ajustar la altura de los gráficos
  };

  return (
    <Container className="p-3">
      <h2 className="text-center mb-4">Gráficos de Actividades</h2>

      {/* Card para Gráfico de Barras */}
      <Card className="mb-4">
        <Card.Body>
          <Card.Title className="text-center">Cantidad de Actividades</Card.Title>
          <div style={{ height: "250px" }}>
            <Bar data={datosGrafico} options={chartOptions} />
          </div>
        </Card.Body>
      </Card>

      {/* Card para Gráfico de Pastel */}
      <Card className="mb-4">
        <Card.Body>
          <Card.Title className="text-center">Distribución de los 5 deportes más realizados</Card.Title>
          <div style={{ height: "250px" }}>
            <Pie data={datosPie} options={chartOptions} />
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Graficos;



