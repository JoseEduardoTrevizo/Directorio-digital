import React from "react";
import Home from "../home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Vacantes from "../../pages/Vacantes";
import Directorio from "../../pages/Directorio";
import Empresas from "../../pages/Empresas";
export default function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/vacantes" element={<Vacantes />} />
      <Route path="/directorio" element={<Directorio />} />
      <Route path="/empresas" element={<Empresas />} />
    </Routes>
  );
}
