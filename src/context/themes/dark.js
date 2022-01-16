import {createTheme} from "@mui/system";


// A custom theme for this app
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: '#000',
    },
    text: {
      primary: "#fff",
      secondary: "#e30b5d"
    }
  },
})

export default theme
