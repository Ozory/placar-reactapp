import React, { useState, useEffect } from "react";
import Time from "./Time";
import Partida from "./Partida";

export default function Placar(dados) {
  const [golCasa, setGolCasa] = useState(0);
  const [golVisitante, setGolVisitante] = useState(0);

  useEffect(() => {
    document.title = `Total gols ${golCasa + golVisitante}`;
  });

  function handleGolsCasa() {
    setGolCasa(golCasa + 1);
  }

  function handleGolsVisitante() {
    setGolVisitante(golVisitante + 1);
  }

  const { partida, casa, visitante } = dados;
  const estilo = { float: "left", marginRight: "20px" };

  return (
    <div>
      <h1>Placar de futebol</h1>
      <div style={estilo}>
        <h3>Casa</h3>
        <Time time={casa} gols={golCasa} event={() => handleGolsCasa()} />
      </div>
      <div style={estilo}>
        <Partida {...partida} />
      </div>
      <div style={estilo}>
        <h3>Visitante</h3>
        <Time
          time={visitante}
          gols={golVisitante}
          event={() => handleGolsVisitante()}
        />
      </div>
    </div>
  );
}
