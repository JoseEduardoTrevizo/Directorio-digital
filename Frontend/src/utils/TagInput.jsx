import React, { useState } from "react";

export default function TagInput({ value = [], onChange, placeholder }) {
  const [inputVal, setInputVal] = useState("");

  const agregarTag = (texto) => {
    const nuevo = texto.trim();
    if (nuevo && !value.includes(nuevo)) {
      onChange([...value, nuevo]);
    }
    setInputVal("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "," || e.key === "Enter") {
      e.preventDefault();
      agregarTag(inputVal);
    }
    // Borrar último tag con Backspace si el input está vacío
    if (e.key === "Backspace" && inputVal === "" && value.length > 0) {
      onChange(value.slice(0, -1));
    }
  };

  const eliminarTag = (index) => {
    onChange(value.filter((_, i) => i !== index));
  };

  return (
    <div className="tag_input_container">
      <div className="tags_wrapper">
        {value.map((tag, i) => (
          <span key={i} className="tag_chip">
            {tag}
            <button type="button" onClick={() => eliminarTag(i)}>
              ✕
            </button>
          </span>
        ))}
        <input
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={() => agregarTag(inputVal)} // por si sale sin presionar Enter
          placeholder={value.length === 0 ? placeholder : ""}
        />
      </div>
      <small className="tag_hint">
        Presiona , o Enter para agregar habilidades
      </small>
    </div>
  );
}
