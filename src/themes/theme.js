import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#b085f5",
      main: "#7e57c2",
      dark: "#4d2c91",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: "Raleway",
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontFamily: "Verdana",
      },
    },
  },
});

export default theme;
