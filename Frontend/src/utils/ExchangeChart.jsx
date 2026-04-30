import React, { useEffect, useState } from "react";
import dolar from "../assets/icons/money.svg";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
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
          }}
        >
          <img src={sym} alt="Dólar" className="exchange-chart_icon" />
          <h2 className="tipo_cambio">{par}/MXN</h2>
        </div>

        <strong className="valorChange">
          {tipoCambio ? tipoCambio[moneda] : ""}
        </strong>
        <p className="fehcaActualizacion">
          Actualizado:
          <br />
          {tipoCambio ? formatearFecha(tipoCambio.fecha) : ""}
        </p>
      </div>

      <div className="exchange-chart_body">
        <ResponsiveContainer width="100%" height={100}>
          <LineChart data={data.historial}>
            <XAxis
              dataKey="fecha"
              tick={{ fontSize: 11, fill: "#888" }}
              tickFormatter={(val) => val.slice(5)} // muestra solo "MM-DD"
              axisLine={{ strokeDasharray: "2 2", stroke: "#e0e0e0" }}
              tickLine={false}
            />
            <YAxis
              domain={["auto", "auto"]}
              tick={{ fontSize: 11 }}
              width={55}
              axisLine={{ strokeDasharray: "2 2", stroke: "#e0e0e0" }}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "transparent", // fondo
                border: "none",
                borderRadius: "8px",
                padding: "8px 12px",
              }}
              itemStyle={{
                color: subio ? "#22c55e" : "#ef4444",
                fontWeight: "bold",
                fontSize: "10px",
                marginTop: "35px",
              }}
              labelFormatter={() => null}
              labelStyle={{
                display: "none",
              }}
              formatter={(val) => [`${val} Mxn`]}
              cursor={{
                stroke: "#888",
                strokeWidth: 1,
                strokeDasharray: "4 4",
              }}
            />
            <Line
              type="monotone"
              dataKey="mxn"
              stroke={subio ? "#22c55e" : "#ef4444"}
              strokeWidth={2}
              dot={false}
              activeDot={{
                r: 4,
                fill: subio ? "#22c55e" : "#ef4444",
                strokeWidth: 0,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
        <span className={`badge ${subio ? "badge--alza" : "badge--baja"}`}>
          {subio ? "▲" : "▼"} {Math.abs(data.cambioPct)}%
        </span>
        <span className={`badge ${subio ? "badge--alza" : "badge--baja"}`}>
          {subio ? "+" : ""} {data.diferenciaMxn}
        </span>
      </div>
    </div>
  );
}
