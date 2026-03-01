import React from "react";
import Home from "../home/Home";
import { Route, Routes } from "react-router-dom";
import Vacantes from "../../pages/Vacantes";
import Directorio from "../../pages/Directorio";
import Empresas from "../../pages/Empresas";
import Registro from "../../pages/Registro";
import Login from "../../pages/Login";
import Profile from "../../pages/Profile";
import Nosotros from "../../pages/Nosotros";
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
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
    </div>
  );
}
