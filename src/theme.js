import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          overflow: "unset",
          padding : "32px"
        },
      },
    },
  },
});
theme = responsiveFontSizes(theme);

export default theme;
