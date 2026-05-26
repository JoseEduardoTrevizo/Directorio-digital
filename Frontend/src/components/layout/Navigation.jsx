import React from "react";
import Home from "../home/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Vacantes from "../../pages/Vacantes";
import Directorio from "../../pages/Directorio";
import Empresas from "../../pages/Empresas";
import Registro from "../../pages/Registro";
import Login from "../../pages/Login";
import Profile from "../../pages/Profile";
import Nosotros from "../../pages/Nosotros";
import PublicProfile from "../../pages/PublicProfile";

// Rutas que se pre-montan para evitar flashing
const MAIN_PAGES = [
  "/",
  "/home",
  "/vacantes",
  "/directorio",
  "/empresas",
  "/nosotros",
];
export default function Navigation() {
  const { pathname } = useLocation();

  const isMainPage = MAIN_PAGES.includes(pathname);
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
        <Route path="/empresa/:id" element={<PublicProfile />} />{" "}
      </Routes>
    </div>
  );
}
