import { createTheme } from '@material-ui/core/styles'
import { primaryColors, secondaryColors } from './colors'

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColors,
      contrastText: "#FFFFFF"
    },
    secondary: {
      main: secondaryColors,
      contrastText: "#000000"
    },
    text: {
      primary: "#000000"
    }
  }
})

export default theme