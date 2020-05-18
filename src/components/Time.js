import React from "react";

import BotaoGol from "./BotaoGol";
export default function Time({time, gols, event}) {
  return (
    <div>
      <h1>{time.nome}</h1>
      <h2>{gols}</h2>
      <BotaoGol event={event} />
    </div>
  );
}
