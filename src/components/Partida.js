import React from "react";

export default function Partida(partida) {
  return (
    <div>
      <h2>{partida.estadio}</h2>
      <span>{partida.data}</span>
      <span> - </span>
      <span> {partida.horario} </span>
    </div>
  );
}
