import React from "react";
import Filter_directory from "../components/directory/Filter_directory";
import Companies_list from "../components/directory/Companies_list";
import Aside_adds from "../components/directory/Aside_adds";
import Aside_addsBottom from "../components/directory/Aside_addsBottom";

export default function Directorio() {
  return (
    <>
      <h2 className="directory-title">Directorio de Empresas</h2>
      <div className="directory_container">
        <aside className="directory_sidebar">
          <Filter_directory />
        </aside>
        <main className="companies_list">
          <Companies_list />
          <Companies_list />
          <Companies_list />
          <Companies_list />
          <Companies_list />
          <Companies_list />
          <Companies_list />
          <Companies_list />
          <Companies_list />
          <Companies_list />
        </main>
        <aside className="directory_ads">
          <Aside_adds />
        </aside>
        <aside className="adds_bottom">
          <Aside_addsBottom />
        </aside>
      </div>
    </>
  );
}
