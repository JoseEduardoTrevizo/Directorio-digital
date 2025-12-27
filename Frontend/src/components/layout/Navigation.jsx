import React from "react";
import Home from "../home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Vacantes from "../../pages/Vacantes";
import Directorio from "../../pages/Directorio";
import Empresas from "../../pages/Empresas";
import Registro from "../../pages/Registro";
export default function Navigation() {
  return (
    <div className="container_Navigation">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/vacantes" element={<Vacantes />} />
        <Route path="/directorio" element={<Directorio />} />
        <Route path="/empresas" element={<Empresas />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </div>
  );
}
