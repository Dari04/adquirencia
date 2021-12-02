import * as React from 'react';
import { makeStyles } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import { Typography, Grid, MenuItem } from "@mui/material";


import theme from "../theme";

const Atoms = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={2}  alignItems="center" >
        {/* ----------------  Start Theme Color Palette  ---------------- */}
        <Grid item sx={{ mx: "auto", width: `calc(85%)`, }} id="colorPalette">
          <Typography className="titleComponents">
            Paletas de color - Theme colors
          </Typography>
          {/* --- Start Color Primary --- */}
          <Typography variant="h4" component="div" sx={{ pb: "10px" }}>
            Primary
          </Typography>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={0} alignItems="center" mb={15}>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="primary.dark2" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h6">
                  primary.dark2
                </Typography>
                <Typography color="textPrimary" variant="body2">
                      #0E1E2E<br/>rgba(14, 30, 46, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="primary.dark" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h6" >
                  primary.dark
                </Typography>
                <Typography color="textPrimary" variant="body2" >
                  #112B45<br/>rgba(17, 43, 69, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="primary.main" height="350px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h6" >
                  primary.main
                </Typography>
                <Typography color="textPrimary" variant="body2" >
                  #023365<br/>rgba(2, 51, 101, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="primary.light" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h6" >
                  primary.light
                </Typography>
                <Typography color="textPrimary" variant="body2" >
                  #1E65AE<br/>rgba(30, 101, 174, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="primary.light2" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h6" >
                  primary.light2
                </Typography>
                <Typography color="textPrimary" variant="body2" >
                  #4498EE<br/>rgba(68, 152, 238, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="primary.light3" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h6" >
                  primary.light3
                </Typography>
                <Typography color="textPrimary" variant="body2" >
                  #EEF6FF<br/>rgba(238, 246, 255, 1)
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* --- Finish Color Primary --- */}
          {/* --- Start Color Secondary --- */}
          <Typography variant="h4" component="div" sx={{ pb: "10px" }}>
            Secondary
          </Typography>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={0} alignItems="center" mb={15}>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="secondary.dark2" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h6">
                  secondary.dark2
                </Typography>
                <Typography color="textPrimary" variant="body2">
                  #3B9D86<br/>rgba(59, 157, 134, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="secondary.dark" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h6" >
                  secondary.dark
                </Typography>
                <Typography color="textPrimary" variant="body2" >
                  #0DC298<br/>rgba(13, 194, 152, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="secondary.main" height="350px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h6" >
                  secondary.main
                </Typography>
                <Typography color="textPrimary" variant="body2" >
                  #00E6B2<br/>rgba(0, 230, 178, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="secondary.light" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h6" >
                  secondary.light
                </Typography>
                <Typography color="textPrimary" variant="body2" >
                  #00FCC1<br/>rgba(0, 252, 193, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="secondary.light2" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h6" >
                  secondary.light2
                </Typography>
                <Typography color="textPrimary" variant="body2" >
                  #B7FFEE<br/>rgba(183, 255, 238, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="secondary.light3" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h6" >
                  secondary.light3
                </Typography>
                <Typography color="textPrimary" variant="body2" >
                  #E0FFF8<br/>rgba(224, 255, 248, 1)
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* --- Finish Color Secondary --- */}
          {/* --- Start Color Error --- */}
          <Typography variant="h4" component="div" sx={{ pb: "10px" }}>
            Error
          </Typography>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={0} alignItems="center" mb={15}>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="error.dark2" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h6">
                  error.dark2
                </Typography>
                <Typography color="textPrimary" variant="body2">
                  #3B9D86<br/>rgba(173, 12, 42, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="error.dark" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h6" >
                  error.dark
                </Typography>
                <Typography color="textPrimary" variant="body2" >
                  #AD0C2A<br/>rgba(214, 44, 75, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="error.main" height="350px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h6" >
                  error.main
                </Typography>
                <Typography color="textPrimary" variant="body2" >
                  #E24763<br/>rgba(226, 71, 99, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="error.light" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h6" >
                  error.light
                </Typography>
                <Typography color="textPrimary" variant="body2" >
                  #E26C81<br/>rgba(226, 108, 129, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="error.light2" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h6" >
                  error.light2
                </Typography>
                <Typography color="textPrimary" variant="body2" >
                  #F6AEBB<br/>rgba(246, 174, 187, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="error.light3" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h6" >
                  error.light3
                </Typography>
                <Typography color="textPrimary" variant="body2" >
                  #FFEAEE<br/>rgba(255, 234, 238, 1)
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* --- Finish Color Error --- */}
          {/* --- Start Color Alternate --- */}
          <Typography variant="h4" component="div" sx={{ pb: "10px" }}>
            Alternate
          </Typography>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={0} alignItems="center" mb={15}>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="alternate.dark2" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h6">
                  alternate.dark2
                </Typography>
                <Typography color="textPrimary" variant="body2">
                  #8F4F8B<br/>rgba(143, 79, 139, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="alternate.dark" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h6" >
                  alternate.dark
                </Typography>
                <Typography color="textPrimary" variant="body2" >
                  #BD62B4<br/>rgba(189, 98, 180, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="alternate.main" height="350px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h6" >
                  alternate.main
                </Typography>
                <Typography color="textPrimary" variant="body2" >
                  #DD85C3<br/>rgba(221, 133, 195, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="alternate.light" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h6" >
                  alternate.light
                </Typography>
                <Typography color="textPrimary" variant="body2" >
                  #E6A6D3<br/>rgba(230, 166, 211, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="alternate.light2" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h6" >
                  alternate.light2
                </Typography>
                <Typography color="textPrimary" variant="body2" >
                  #FDD9F2<br/>rgba(253, 217, 242, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="alternate.light3" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h6" >
                  alternate.light3
                </Typography>
                <Typography color="textPrimary" variant="body2" >
                  #FEECF8<br/>rgba(254, 236, 248, 1)
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* --- Finish Color Alternate --- */}
          {/* --- Start Color Warning --- */}
          <Typography variant="h4" component="div" sx={{ pb: "10px" }}>
            Warning
          </Typography>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={0} alignItems="center" mb={15}>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="warning.dark2" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h6">
                  warning.dark2
                </Typography>
                <Typography color="textPrimary" variant="body2">
                  #CF711A<br/>rgba(207, 113, 26, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="warning.dark" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h6" >
                  warning.dark
                </Typography>
                <Typography color="textPrimary" variant="body2" >
                  #DFA720<br/>rgba(223, 167, 32, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="warning.main" height="350px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h6" >
                  warning.main
                </Typography>
                <Typography color="textPrimary" variant="body2" >
                  #FBC748<br/>rgba(251, 199, 72, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="warning.light" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h6" >
                  warning.light
                </Typography>
                <Typography color="textPrimary" variant="body2" >
                  #FFD879<br/>rgba(255, 216, 121, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="warning.light2" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h6" >
                  warning.light2
                </Typography>
                <Typography color="textPrimary" variant="body2" >
                  #FEE19B<br/>rgba(254, 225, 155, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="warning.light3" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h6" >
                  warning.light3
                </Typography>
                <Typography color="textPrimary" variant="body2" >
                  #FFF1D0<br/>rgba(255, 241, 208, 1)
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* --- Finish Color Warning --- */}
        </Grid>
        {/* ----------------  Finish Theme Color Palette  ---------------- */}
        {/* ----------------  Start Neutrals Color Palette  ---------------- */}
        <Grid item sx={{ mx: "auto", width: `calc(85%)`, }} id="colorPalette">
          <Typography className="titleComponents">
            Paletas de color - Neutrals
          </Typography>
          {/* --- Start Grey --- */}
          <Typography variant="h4" component="div" sx={{ pb: "10px" }}>
            Grey
          </Typography>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={0} alignItems="center" mb={15}>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="neutral.grey8" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h6">
                  neutral.grey8
                </Typography>
                <Typography color="textPrimary" variant="body2">
                  #293036<br/>rgba(41, 48, 54, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="neutral.grey7" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h6">
                  neutral.grey7
                </Typography>
                <Typography color="textPrimary" variant="body2">
                  #46525C<br/>rgba(70, 82, 92, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="neutral.grey6" height="350px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h6">
                  neutral.grey6
                </Typography>
                <Typography color="textPrimary" variant="body2">
                  #677684<br/>rgba(103, 118, 132, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="neutral.grey5" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h6">
                  neutral.grey5
                </Typography>
                <Typography color="textPrimary" variant="body2">
                  #CBD5E0<br/>rgba(203, 213, 224, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="neutral.grey4" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h6">
                  neutral.grey4
                </Typography>
                <Typography color="textPrimary" variant="body2">
                  #E2E8F0<br/>rgba(226, 232, 240, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="neutral.grey3" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h6">
                  neutral.grey3
                </Typography>
                <Typography color="textPrimary" variant="body2">
                  #F0F4F8<br/>rgba(240, 244, 249, 1)
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* --- Finish Grey --- */}
          {/* --- Start Grey and Components --- */}
          <Typography variant="h4" component="div" sx={{ pb: "10px" }}>
            Grey and Components
          </Typography>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={0} alignItems="center" mb={15}>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="neutral.grey2" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h6">
                  neutral.grey2
                </Typography>
                <Typography color="textPrimary" variant="body2">
                  #F7FAFC<br/>rgba(247, 250, 252, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
            <Box>
              <Box
                bgcolor="neutral.grey1" height="300px" py={3} px={3} mb={1}>
              </Box>
              <Typography variant="h6">
                neutral.grey1
              </Typography>
              <Typography color="textPrimary" variant="body2">
                #FBFCFE<br/>rgba(251, 252, 254, 1)
              </Typography>
            </Box>
            </Box>
            <Box gridColumn="span 2">
            <Box>
              <Box
                bgcolor="neutral.white" height="350px" py={3} px={3} mb={1}>
              </Box>
              <Typography variant="h6">
                neutral.white
              </Typography>
              <Typography color="textPrimary" variant="body2">
                #FFFFFF<br/>rgba(255, 255, 255, 1)
              </Typography>
            </Box>
            </Box>
            <Box gridColumn="span 3">
              <Box>
                <Box
                  bgcolor="neutral.components.shadow" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h6">
                  neutral.components.<br/>shadow
                </Typography>
                <Typography color="textPrimary" variant="body2">
                  #0E1E2E<br/>rgba(14, 30, 46, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 3">
              <Box>
                <Box
                  bgcolor="neutral.components.disabled" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h6">
                  neutral.components.<br/>disabled
                </Typography>
                <Typography color="textPrimary" variant="body2">
                  #B4B9BE<br/>rgba(180, 185, 190, 1)
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* --- Finish Grey and Components --- */}
        </Grid>
        {/* ----------------  Finish Neutrals Color Palette  ---------------- */}
      </Grid>
    </ThemeProvider>
  );
}
1
export default Atoms;