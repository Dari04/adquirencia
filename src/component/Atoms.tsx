import * as React from 'react';
import { makeStyles } from "@mui/styles";
import { ThemeProvider } from "@mui/material/styles";
import Button from '@mui/material/Button';

import theme from "../theme";

const Atoms = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button>Primary</Button>
      <Button color="secondary">Secondary</Button>
    </ThemeProvider>
  );
}

export default Atoms;
