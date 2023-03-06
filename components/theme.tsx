import { alpha, createTheme, ThemeOptions } from "@mui/material/styles"
import { green, purple } from "@mui/material/colors"

const colors = {
  white: "#111633",
}
const options: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      light: "#fff",
      main: alpha("#fff", 0.8),
      dark: "#fff",
      contrastText: "#fff",
    },
    secondary: {
      main: green[500],
    },
    text: {
      primary: alpha("#fff", 0.8),
      secondary: alpha("#fff", 0.7),
      disabled: alpha(colors.white, 0.5),
    },
    background: {
      paper: colors.white,
      default: "#070C27",
    },
  },
}
const theme = createTheme(options)

export default theme
