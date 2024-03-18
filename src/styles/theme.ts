// Fonts

import { createTheme, PaletteColorOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    tertiary: PaletteColorOptions;
    light: PaletteColorOptions;
    gray: PaletteColorOptions;
    halfGray: PaletteColorOptions;


  }
  interface PaletteOptions {
    tertiary: PaletteColorOptions;
    light: PaletteColorOptions;
    gray: PaletteColorOptions;
    halfGray: PaletteColorOptions;

  }
}

const theme = createTheme({
  palette: {
    primary: { main: "#FFFFFF" },
    secondary: { main: "#041314" },
    tertiary: { main: "#2DDDE9" },
    light: { main: "#B3EEF2" },
    halfGray: { main: "#D9DCDC" },
    gray: {main:"#434E4F"},
  },
  typography: {
    fontFamily: "Poppins",
    h1: {
      fontSize: "3rem",
      fontWeight: "700",
      lineHeight: "3.5rem",
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: "700",
      lineHeight: "150%",
    },
    h3: {
      fontSize: "2rem",
      fontWeight: "600",
      lineHeight: "150%",
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: "600",
      lineHeight: "150%",
    },
    body1: {
      fontSize: "1.5rem",
      fontWeight: "500",
      lineHeight: "150%",
    },
    body2: {
      fontSize: "1.25rem",
      fontWeight: "500",
      lineHeight: "150%",
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: "400",
      lineHeight: "150%",
    },
  },
});

export default theme;
