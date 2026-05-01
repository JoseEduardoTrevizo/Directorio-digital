import React, { useEffect, useState } from "react";
import dolar from "../assets/icons/money.svg";
import homeService from "../services/homeService";

export default function ExchangeChart({ sym, moneda, par = "USD", dias = 7 }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tipoCambio, setTipoCambio] = useState(null);

  useEffect(() => {
    homeService
      .getHistorico(par, dias)
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [par, dias]);

  useEffect(() => {
    const fetchTipoCambio = async () => {
      try {
        const Data = await homeService.obtenerTipoCambioUSD();
        // const euroData = await homeService.obtenerTipoCambioEURO();

        setTipoCambio(Data);
      } catch (error) {
        console.error("Error al obtener el tipo de cambio:", error);
      }
    };

    fetchTipoCambio();
  }, []);

  if (loading) return <p>Cargando historial...</p>;
  if (!data) return <p>No disponible</p>;

  const subio = data.tendencia === "alza";
  const formatearFecha = (fechaUtc) => {
    const fecha = new Date(fechaUtc);
    return fecha.toLocaleDateString("es-MX", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="exchange-chart">
      <div className="exchange-chart_header">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            height: "40px",
          }}
        >
          <img src={sym} alt="Dólar" className="exchange-chart_icon" />
          <h2 className="tipo_cambio">{par}/MXN</h2>
        </div>

        <strong className="valorChange">
          {tipoCambio ? tipoCambio[moneda] : ""}
        </strong>
        <div className="content_porcentaje">
          <span className={`badge ${subio ? "badge--alza" : "badge--baja"}`}>
            {subio ? "▲" : "▼"} ({Math.abs(data.cambioPct)}%)
          </span>
          <span className={`badge ${subio ? "badge--alza" : "badge--baja"}`}>
            {subio ? "+" : ""} {data.diferenciaMxn}
          </span>
        </div>
        <p className="fehcaActualizacion">
          Actualizado: {tipoCambio ? formatearFecha(tipoCambio.fecha) : ""}
        </p>
      </div>
    </div>
  );
}
