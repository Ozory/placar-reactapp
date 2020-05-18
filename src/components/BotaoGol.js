import React from "react";
import Button from "@material-ui/core/Button";

export default function BotaoGol({ event }) {
  return (
    <Button
      color="primary"
      size="large"
      disableElevation
      variant="contained"
      onClick={() => event()}
    >
      Gol
    </Button>
  );
}
