import { createTheme } from '@mui/material/styles';
import themeOptions from "./thememui5";

const theme = createTheme({
  ...themeOptions,
  palette: {
    ...themeOptions.palette
  },
  typography: {
    ...themeOptions.typography
  },
  components: {
    ...themeOptions.components
  }
});

export default theme;