import React from "react";
import "./App.css";
import Placar from "./components/Placar";

const dados = {
  partida: {
    estadio: "Maracanã/RJ",
    data: "12/10/2018",
    horario: "21:00",
  },
  casa: {
    nome: "Flamento",
  },
  visitante: {
    nome: "Vasco",
  },
};
export default function App() {
  return (
    <div>
      <Placar {...dados} />
    </div>
  );
}
