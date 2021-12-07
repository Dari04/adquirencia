import * as React from 'react';
import { makeStyles } from "@mui/styles";
import { styled } from '@mui/material/styles';
import { ThemeProvider } from "@mui/material/styles";
import {Box, Button, Stack, Typography, Grid, Snackbar, SnackbarOrigin, Chip, Zoom} from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import theme from "../theme";
import DoneIcon from '@mui/icons-material/Done';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';


const useStyles = makeStyles((theme?: any) => ({
  gradientA: { background: theme.palette.gradients.gradientA},
  gradientB: { background: theme.palette.gradients.gradientB},
  gradientC: { background: theme.palette.gradients.gradientC},
  gradientD: { background: theme.palette.gradients.gradientD},
  gradientE: { background: theme.palette.gradients.gradientE}
}));

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export interface State extends SnackbarOrigin {
  open: boolean;
}

const Atoms: React.FC = () => {
  //Gradients
  const gradients = useStyles();
  //Gradients

  //Start Alert
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: "top",
    horizontal: "center"
  });

  const { vertical, horizontal, open } = state;

  const snackClick = (newState: SnackbarOrigin) => () => {
    setState({ open: true, ...newState });
  };

  const snackClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    setState({ ...state, open: false });
    if (reason === 'clickaway') {
      return;
    }
  };
  //Finish Alert

  //Start Chip
  const chipClick = () => {
    console.info('Clickeaste el chip.');
  };
  
  const chipDelete = () => {
    console.info('Clickeaste el ícono borrar.');
  };
  //Finish Chip
  //Start Tooltip HTML
  const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} 
    classes={{ popper: className }} />))(() => ({}));
  //Finish Tooltip HTML
  return (
    <React.Fragment>
    <ThemeProvider theme={theme}>
      <Grid container spacing={2} alignItems="center" className="colorPalette">
        {/* ----------------  START THEME COLOR PALETTE  ---------------- */}
        <Grid item sx={{ mx: "auto", width: `calc(90%)`, }} id="themeColors">
          <Typography className="titleComponents">
            Paletas de color - Theme colors
          </Typography>
          {/* --- Start Color Primary --- */}
          <Typography variant="h3" component="div" sx={{ pb: "10px" }}>
            Primary
          </Typography>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={0} alignItems="center" mb={15}>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="primary.dark2" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h5">
                  primary.dark2
                </Typography>
                <Typography variant="body2">
                  #0E1E2E<br />rgba(14, 30, 46, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="primary.dark" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h5">
                  primary.dark
                </Typography>
                <Typography variant="body2">
                  #112B45<br />rgba(17, 43, 69, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="primary.main" height="350px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h5">
                  primary.main
                </Typography>
                <Typography variant="body2">
                  #023365<br />rgba(2, 51, 101, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="primary.light" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h5">
                  primary.light
                </Typography>
                <Typography variant="body2">
                  #1E65AE<br />rgba(30, 101, 174, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="primary.light2" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h5">
                  primary.light2
                </Typography>
                <Typography variant="body2">
                  #4498EE<br />rgba(68, 152, 238, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="primary.light3" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h5">
                  primary.light3
                </Typography>
                <Typography variant="body2">
                  #EEF6FF<br />rgba(238, 246, 255, 1)
                </Typography>
              </Box>
            </Box>
          </Box>
          <Typography variant="h3" component="div" sx={{ pb: "10px" }}>
            Primary Components
          </Typography>
          <Typography variant="body1" component="div" sx={{ pb: "30px" }}>
            Primary light state for general use.
          </Typography>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={0} alignItems="center" mb={15}>
            <Box gridColumn="span 3">
              <Box>
                <Box
                  bgcolor="primary.components.light.default" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h5">
                  primary.components.<br/>light.default
                </Typography>
                <Typography variant="body2">
                    #4499EE<br />rgba(68, 153, 238, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 3">
              <Box>
                <Box
                  bgcolor="primary.components.light.hover" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h5">
                  primary.components.<br/>light.hover
                </Typography>
                <Typography variant="body2">
                  #3879CD<br />rgba(56, 121, 205, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 3">
              <Box>
                <Box
                  bgcolor="primary.components.light.focus" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h5">
                  primary.components.<br/>light.focus
                </Typography>
                <Typography variant="body2">
                  #3F8BE0<br />rgba(63, 139, 224, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 3">
              <Box>
                <Box
                  bgcolor="primary.components.light.disable" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h5">
                  primary.components.<br/>light.disable
                </Typography>
                <Typography variant="body2">
                    #BFDFFA<br />rgba(191, 223, 250, 1)
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* --- Finish Color Primary --- */}
          {/* --- Start Color Secondary --- */}
          <Typography variant="h3" component="div" sx={{ pb: "10px" }}>
            Secondary
          </Typography>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={0} alignItems="center" mb={15}>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="secondary.dark2" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h5">
                  secondary.dark2
                </Typography>
                <Typography variant="body2">
                  #3B9D86<br />rgba(59, 157, 134, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="secondary.dark" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h5">
                  secondary.dark
                </Typography>
                <Typography variant="body2">
                  #0DC298<br />rgba(13, 194, 152, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="secondary.main" height="350px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h5">
                  secondary.main
                </Typography>
                <Typography variant="body2">
                  #00E6B2<br />rgba(0, 230, 178, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="secondary.light" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h5">
                  secondary.light
                </Typography>
                <Typography variant="body2">
                  #00FCC1<br />rgba(0, 252, 193, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="secondary.light2" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h5">
                  secondary.light2
                </Typography>
                <Typography variant="body2">
                  #B7FFEE<br />rgba(183, 255, 238, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="secondary.light3" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h5">
                  secondary.light3
                </Typography>
                <Typography variant="body2">
                  #E0FFF8<br />rgba(224, 255, 248, 1)
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* --- Finish Color Secondary --- */}
          {/* --- Start Color Error --- */}
          <Typography variant="h3" component="div" sx={{ pb: "10px" }}>
            Error
          </Typography>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={0} alignItems="center" mb={15}>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="error.dark2" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h5">
                  error.dark2
                </Typography>
                <Typography variant="body2">
                  #3B9D86<br />rgba(173, 12, 42, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="error.dark" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h5">
                  error.dark
                </Typography>
                <Typography variant="body2">
                  #AD0C2A<br />rgba(214, 44, 75, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="error.main" height="350px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h5">
                  error.main
                </Typography>
                <Typography variant="body2">
                  #E24763<br />rgba(226, 71, 99, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="error.light" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h5">
                  error.light
                </Typography>
                <Typography variant="body2">
                  #E26C81<br />rgba(226, 108, 129, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="error.light2" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h5">
                  error.light2
                </Typography>
                <Typography variant="body2">
                  #F6AEBB<br />rgba(246, 174, 187, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="error.light3" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h5">
                  error.light3
                </Typography>
                <Typography variant="body2">
                  #FFEAEE<br />rgba(255, 234, 238, 1)
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* --- Finish Color Error --- */}
          {/* --- Start Color Alternate --- */}
          <Typography variant="h3" component="div" sx={{ pb: "10px" }}>
            Alternate
          </Typography>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={0} alignItems="center" mb={15}>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="alternate.dark2" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h5">
                  alternate.dark2
                </Typography>
                <Typography variant="body2">
                  #8F4F8B<br />rgba(143, 79, 139, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="alternate.dark" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h5">
                  alternate.dark
                </Typography>
                <Typography variant="body2">
                  #BD62B4<br />rgba(189, 98, 180, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="alternate.main" height="350px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h5">
                  alternate.main
                </Typography>
                <Typography variant="body2">
                  #DD85C3<br />rgba(221, 133, 195, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="alternate.light" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h5">
                  alternate.light
                </Typography>
                <Typography variant="body2">
                  #E6A6D3<br />rgba(230, 166, 211, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="alternate.light2" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h5">
                  alternate.light2
                </Typography>
                <Typography variant="body2">
                  #FDD9F2<br />rgba(253, 217, 242, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="alternate.light3" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h5">
                  alternate.light3
                </Typography>
                <Typography variant="body2">
                  #FEECF8<br />rgba(254, 236, 248, 1)
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* --- Finish Color Alternate --- */}
          {/* --- Start Color Warning --- */}
          <Typography variant="h3" component="div" sx={{ pb: "10px" }}>
            Warning
          </Typography>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={0} alignItems="center" mb={15}>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="warning.dark2" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h5">
                  warning.dark2
                </Typography>
                <Typography variant="body2">
                  #CF711A<br />rgba(207, 113, 26, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="warning.dark" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h5">
                  warning.dark
                </Typography>
                <Typography variant="body2">
                  #DFA720<br />rgba(223, 167, 32, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="warning.main" height="350px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h5">
                  warning.main
                </Typography>
                <Typography variant="body2">
                  #FBC748<br />rgba(251, 199, 72, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="warning.light" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h5">
                  warning.light
                </Typography>
                <Typography variant="body2">
                  #FFD879<br />rgba(255, 216, 121, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="warning.light2" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h5">
                  warning.light2
                </Typography>
                <Typography variant="body2">
                  #FEE19B<br />rgba(254, 225, 155, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="warning.light3" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h5">
                  warning.light3
                </Typography>
                <Typography variant="body2">
                  #FFF1D0<br />rgba(255, 241, 208, 1)
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* --- Finish Color Warning --- */}
          {/* --- Start Color Paper --- */}
          <Typography variant="h3" component="div" sx={{ pb: "30px" }}>
            Paper
          </Typography>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={3} alignItems="top" mb={15}>
            <Box gridColumn="span 6">
              <Box>
                <Box
                  bgcolor="background.paper" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h5">
                  background.paper (Paper1)
                </Typography>
                <Typography variant="body2">
                  #FAFCFD<br />rgba(250, 252, 253, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 6">
              <Box>
                <Box
                  bgcolor="background.default" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h5">
                  background.default (Paper2)
                </Typography>
                <Typography variant="body2">
                  #FFFFFF<br />rgba(255, 255, 255, 1)
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* --- Finish Color Paper --- */}
        </Grid>
        {/* ----------------  FINISH THEME COLOR PALETTE  ---------------- */}
        {/* ----------------  START NEUTRALS COLOR PALETTE  ---------------- */}
        <Grid item sx={{ mx: "auto", width: `calc(90%)`, }}  id="neutralColors">
          <Typography className="titleComponents">
            Paletas de color - Neutrals
          </Typography>
          {/* --- Start Grey --- */}
          <Typography variant="h3" component="div" sx={{ pb: "10px" }}>
            Grey
          </Typography>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={0} alignItems="center" mb={15}>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="neutral.grey8" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h5">
                  neutral.grey8
                </Typography>
                <Typography variant="body2">
                  #293036<br />rgba(41, 48, 54, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="neutral.grey7" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h5">
                  neutral.grey7
                </Typography>
                <Typography variant="body2">
                  #46525C<br />rgba(70, 82, 92, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="neutral.grey6" height="350px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h5">
                  neutral.grey6
                </Typography>
                <Typography variant="body2">
                  #677684<br />rgba(103, 118, 132, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="neutral.grey5" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h5">
                  neutral.grey5
                </Typography>
                <Typography variant="body2">
                  #CBD5E0<br />rgba(203, 213, 224, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="neutral.grey4" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h5">
                  neutral.grey4
                </Typography>
                <Typography variant="body2">
                  #E2E8F0<br />rgba(226, 232, 240, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="neutral.grey3" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h5">
                  neutral.grey3
                </Typography>
                <Typography variant="body2">
                  #F0F4F8<br />rgba(240, 244, 249, 1)
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* --- Finish Grey --- */}
          {/* --- Start Grey and Components --- */}
          <Typography variant="h3" component="div" sx={{ pb: "10px" }}>
            Grey and Components
          </Typography>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={0} alignItems="center" mb={15}>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="neutral.grey2" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h5">
                  neutral.grey2
                </Typography>
                <Typography variant="body2">
                  #F7FAFC<br />rgba(247, 250, 252, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="neutral.grey1" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h5">
                  neutral.grey1
                </Typography>
                <Typography variant="body2">
                  #FBFCFE<br />rgba(251, 252, 254, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="neutral.white" height="350px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h5">
                  neutral.white
                </Typography>
                <Typography variant="body2">
                  #FFFFFF<br />rgba(255, 255, 255, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 3">
              <Box>
                <Box
                  bgcolor="neutral.components.shadow" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h5">
                  neutral.components.<br />shadow
                </Typography>
                <Typography variant="body2">
                  #0E1E2E<br />rgba(14, 30, 46, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 3">
              <Box>
                <Box
                  bgcolor="neutral.components.disabled" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h5">
                  neutral.components.<br />disabled
                </Typography>
                <Typography variant="body2">
                  #B4B9BE<br />rgba(180, 185, 190, 1)
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* --- Finish Grey and Components --- */}
        </Grid>
        {/* ----------------  FINISH NEUTRALS COLOR PALETTE  ---------------- */}
        {/* ----------------  START TYPOGRAPHY COLOR PALETTE  ---------------- */}
        <Grid item sx={{ mx: "auto", width: `calc(90%)`, }}  id="typographyColors">
          <Typography className="titleComponents">
            Paletas de color - Typography
          </Typography>
          {/* --- Start Typography Color Text --- */}
          <Typography variant="h3" component="div" sx={{ pb: "30px" }}>
            Typography
          </Typography>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={3} alignItems="top" mb={15}>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="text.primary" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h6" color="text.primary">
                  text.primary (Blue)
                </Typography>
                <Typography variant="body2">
                  #023365<br />rgba(2, 51, 101, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="text.dark" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h6" color="text.dark">
                  text.dark (Dark)
                </Typography>
                <Typography color="text.dark" variant="body2">
                  #293036<br />rgba(41, 48, 54, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="text.white" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h5">
                  text.white
                </Typography>
                <Typography variant="body2">
                  #FFFFFF<br />rgba(255, 255, 255, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="text.lightGrey" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h6" color="text.lightGrey">
                  text.lightGrey
                </Typography>
                <Typography variant="body2">
                  #B4B9BE<br />rgba(180, 185, 190, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="text.grey" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h6" color="text.grey">
                  text.grey
                </Typography>
                <Typography variant="body2">
                  #6D7781<br />rgba(109, 119, 129, 1)
                </Typography>
              </Box>
            </Box>
            <Box gridColumn="span 2">
              <Box>
                <Box
                  bgcolor="text.secondary" height="300px" py={3} px={3} mb={1}>
                </Box>
                <Typography variant="h6" color="text.secondary">
                  text.secondary
                </Typography>
                <Typography variant="body2">
                  #0DC298<br />rgba(13, 194, 152, 1)
                </Typography>
              </Box>
            </Box>

          </Box>
          {/* --- Finish Typography Color Text --- */}
        </Grid>
        {/* ----------------  FINISH TYPOGRAPHY COLOR PALETTE  ---------------- */}
        {/* ----------------  START GRADIENTS COLOR PALETTE  ---------------- */}
        <Grid item sx={{ mx: "auto", width: `calc(90%)`, }} id="gradientColors">
          <Typography className="titleComponents">
            Paletas de color - Gradients
          </Typography>
          {/* --- Start Typography Color Text --- */}
          <Typography variant="h3" component="div" sx={{ pb: "30px" }}>
            Gradients
          </Typography>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={3} alignItems="center" mb={15}>
            <Box gridColumn="span 7">
              <Box className={gradients.gradientA} height="80px" py={3} px={3} mb={1}>
              </Box>
            </Box>
            <Box gridColumn="span 5">
              <Typography variant="h5" color="text.grey">
                Gradient A
              </Typography>
              <Typography variant="body2">
                linear-gradient(180deg, #00E6B2 0%, #023365 100%)<br/>
                linear-gradient(180deg, rgba(0, 230, 178, 1) 0%, rgba(2, 51, 101, 1) 100%)
              </Typography>
            </Box>
          </Box>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={3} alignItems="center" mb={15}>
            <Box gridColumn="span 7">
              <Box className={gradients.gradientB} height="80px" py={3} px={3} mb={1}>
              </Box>
            </Box>
            <Box gridColumn="span 5">
              <Typography variant="h5" color="text.grey">
                Gradient B
              </Typography>
              <Typography variant="body2">
                linear-gradient(180deg, #0093A2 0%, #00E6B2 100%)<br/>
                linear-gradient(180deg, rgba(0, 147, 162, 1) 0%, rgba(0, 230, 178, 1) 100%)
              </Typography>
            </Box>
          </Box>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={3} alignItems="center" mb={15}>
            <Box gridColumn="span 7">
              <Box className={gradients.gradientC} height="80px" py={3} px={3} mb={1}>
              </Box>
            </Box>
            <Box gridColumn="span 5">
              <Typography variant="h5" color="text.grey">
                Gradient C
              </Typography>
              <Typography variant="body2">
                linear-gradient(135deg, #023365 0%, #1E65AE 100%)<br/>
                linear-gradient(135deg, rgba(2, 51, 101, 1) 0%, rgba(30, 101, 174, 1) 100%)
              </Typography>
            </Box>
          </Box>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={3} alignItems="center" mb={15}>
            <Box gridColumn="span 7">
              <Box className={gradients.gradientD} height="80px" py={3} px={3} mb={1}>
              </Box>
            </Box>
            <Box gridColumn="span 5">
              <Typography variant="h5" color="text.grey">
                Gradient D
              </Typography>
              <Typography variant="body2">
                linear-gradient(180deg, #00E6B2 0%, #023365 100%)<br/>
                linear-gradient(180deg, rgba(0, 230, 178, 1) 0%, rgba(2, 51, 101, 1) 100%)
              </Typography>
            </Box>
          </Box>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={3} alignItems="center" mb={15}>
            <Box gridColumn="span 7">
              <Box className={gradients.gradientE} height="80px" py={3} px={3} mb={1}>
              </Box>
            </Box>
            <Box gridColumn="span 5">
              <Typography variant="h5" color="text.grey">
                Gradient E
              </Typography>
              <Typography variant="body2">
                linear-gradient(180deg, #FFFFFF 0%, #F7FAFC 100%)<br/>
                linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(247, 250, 252, 1) 100%)
              </Typography>
            </Box>
          </Box>
          {/* --- Finish Typography Color Text --- */}
        </Grid>
        {/* ----------------  FINISH GRADIENTS COLOR PALETTE  ---------------- */}
      </Grid>
      {/* ----------------  START TYPOGRAPHY  ---------------- */}
      <Grid container spacing={2} alignItems="center">
        <Grid item sx={{ mx: "auto", width: `calc(90%)`, }} id="typographyNav">
          <Typography className="titleComponents">
          Typography - Headers & Contents
          </Typography>
          {/* --- Start Color Primary --- */}
          <Typography variant="h3" component="div" sx={{ pb: "30px" }}>
              Blue Primary (color="text.primary")
          </Typography>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={0} alignItems="center" mb={15}>
            <Box gridColumn="span 12">
              <Typography color="text.primary" variant="h1" gutterBottom>
                h1. Kushki La pasarela de pagos de nuestra región
              </Typography>
              <Typography color="text.primary" variant="h2" gutterBottom>
                h2. Kushki La pasarela de pagos de nuestra región
              </Typography>
              <Typography color="text.primary" variant="h3" gutterBottom>
                h3. Kushki La pasarela de pagos de nuestra región
              </Typography>
              <Typography color="text.primary" variant="h4" gutterBottom>
                h4. Kushki La pasarela de pagos de nuestra región
              </Typography>
              <Typography color="text.primary" variant="h5" gutterBottom>
                h5. Kushki La pasarela de pagos de nuestra región
              </Typography>
              <Typography color="text.primary" variant="h6" gutterBottom>
                h6. Kushki La pasarela de pagos de nuestra región
              </Typography>
              <Typography color="text.primary" variant="subtitle1" gutterBottom component="div">
                subtitle1. Kushki es una empresa fundada con el fin de conectar y estandarizar las tuberías de pagos en Latinoamérica.
              </Typography>
              <Typography color="text.primary" variant="subtitle2" gutterBottom component="div">
                subtitle2. Kushki es una empresa fundada con el fin de conectar y estandarizar las tuberías de pagos en Latinoamérica.
              </Typography>
              <Typography color="text.primary" variant="body2" gutterBottom>
                body2. Kushki es una empresa fundada con el fin de conectar y estandarizar las tuberías de pagos en Latinoamérica. Fue creada en 2016 en Nueva York, por emprendedores e inversionistas con previa trayectoria en Fintech en los Estados Unidos y Europa y en la actualidad Kushki hoy opera ya en 7 países de la región.
              </Typography>
              <Typography color="text.primary" variant="body2" gutterBottom>
                body2. Kushki es una empresa fundada con el fin de conectar y estandarizar las tuberías de pagos en Latinoamérica. Fue creada en 2016 en Nueva York, por emprendedores e inversionistas con previa trayectoria en Fintech en los Estados Unidos y Europa y en la actualidad Kushki hoy opera ya en 7 países de la región.
              </Typography>
              <Typography color="text.primary" variant="caption" gutterBottom component="div">
                caption. Kushki es una empresa fundada con el fin de conectar y estandarizar las tuberías de pagos en Latinoamérica. Fue creada en 2016 en Nueva York, por emprendedores e inversionistas con previa trayectoria en Fintech en los Estados Unidos y Europa y en la actualidad Kushki hoy opera ya en 7 países de la región.
              </Typography>
              <Typography color="text.primary" variant="overline" gutterBottom component="div">
                overline. Kushki es una empresa fundada con el fin de conectar y estandarizar las tuberías de pagos en Latinoamérica. Fue creada en 2016 en Nueva York, por emprendedores e inversionistas con previa trayectoria en Fintech en los Estados Unidos y Europa y en la actualidad Kushki hoy opera ya en 7 países de la región.
              </Typography>
              <Typography color="text.primary" variant="button" gutterBottom component="div">
                Numeric text. Kushki La pasarela de pagos de nuestra región
              </Typography>
            </Box>
          </Box>
          {/* --- Finish Color Primary --- */}
          {/* --- Start Color Dark --- */}
          <Typography variant="h3" component="div" sx={{ pb: "30px" }}>
          DarkGrey (color="text.dark")
          </Typography>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={0} alignItems="center" mb={15}>
            <Box gridColumn="span 12">
              <Typography color="text.dark" variant="h1" gutterBottom>
                h1. Kushki La pasarela de pagos de nuestra región
              </Typography>
              <Typography color="text.dark" variant="h2" gutterBottom>
                h2. Kushki La pasarela de pagos de nuestra región
              </Typography>
              <Typography color="text.dark" variant="h3" gutterBottom>
                h3. Kushki La pasarela de pagos de nuestra región
              </Typography>
              <Typography color="text.dark" variant="h4" gutterBottom>
                h4. Kushki La pasarela de pagos de nuestra región
              </Typography>
              <Typography color="text.dark" variant="h5" gutterBottom>
                h5. Kushki La pasarela de pagos de nuestra región
              </Typography>
              <Typography color="text.dark" variant="h6" gutterBottom>
                h6. Kushki La pasarela de pagos de nuestra región
              </Typography>
              <Typography color="text.dark" variant="subtitle1" gutterBottom component="div">
                subtitle1. Kushki es una empresa fundada con el fin de conectar y estandarizar las tuberías de pagos en Latinoamérica.
              </Typography>
              <Typography color="text.dark" variant="subtitle2" gutterBottom component="div">
                subtitle2. Kushki es una empresa fundada con el fin de conectar y estandarizar las tuberías de pagos en Latinoamérica.
              </Typography>
              <Typography color="text.dark" variant="body2" gutterBottom>
                body2. Kushki es una empresa fundada con el fin de conectar y estandarizar las tuberías de pagos en Latinoamérica. Fue creada en 2016 en Nueva York, por emprendedores e inversionistas con previa trayectoria en Fintech en los Estados Unidos y Europa y en la actualidad Kushki hoy opera ya en 7 países de la región.
              </Typography>
              <Typography color="text.dark" variant="body2" gutterBottom>
                body2. Kushki es una empresa fundada con el fin de conectar y estandarizar las tuberías de pagos en Latinoamérica. Fue creada en 2016 en Nueva York, por emprendedores e inversionistas con previa trayectoria en Fintech en los Estados Unidos y Europa y en la actualidad Kushki hoy opera ya en 7 países de la región.
              </Typography>
              <Typography color="text.dark" variant="caption" gutterBottom component="div">
                caption. Kushki es una empresa fundada con el fin de conectar y estandarizar las tuberías de pagos en Latinoamérica. Fue creada en 2016 en Nueva York, por emprendedores e inversionistas con previa trayectoria en Fintech en los Estados Unidos y Europa y en la actualidad Kushki hoy opera ya en 7 países de la región.
              </Typography>
              <Typography color="text.dark" variant="overline" gutterBottom component="div">
                overline. Kushki es una empresa fundada con el fin de conectar y estandarizar las tuberías de pagos en Latinoamérica. Fue creada en 2016 en Nueva York, por emprendedores e inversionistas con previa trayectoria en Fintech en los Estados Unidos y Europa y en la actualidad Kushki hoy opera ya en 7 países de la región.
              </Typography>
              <Typography color="text.dark" variant="button" gutterBottom component="div">
                Numeric text. Kushki La pasarela de pagos de nuestra región
              </Typography>
            </Box>
          </Box>
          {/* --- Finish Color Dark --- */}
          {/* --- Start Color Grey --- */}
          <Typography variant="h3" component="div" sx={{ pb: "30px" }}>
          Grey (color="text.grey")
          </Typography>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={0} alignItems="center" mb={15}>
            <Box gridColumn="span 12">
              <Typography color="text.grey" variant="h1" gutterBottom>
                h1. Kushki La pasarela de pagos de nuestra región
              </Typography>
              <Typography color="text.grey" variant="h2" gutterBottom>
                h2. Kushki La pasarela de pagos de nuestra región
              </Typography>
              <Typography color="text.grey" variant="h3" gutterBottom>
                h3. Kushki La pasarela de pagos de nuestra región
              </Typography>
              <Typography color="text.grey" variant="h4" gutterBottom>
                h4. Kushki La pasarela de pagos de nuestra región
              </Typography>
              <Typography color="text.grey" variant="h5" gutterBottom>
                h5. Kushki La pasarela de pagos de nuestra región
              </Typography>
              <Typography color="text.grey" variant="h6" gutterBottom>
                h6. Kushki La pasarela de pagos de nuestra región
              </Typography>
              <Typography color="text.grey" variant="subtitle1" gutterBottom component="div">
                subtitle1. Kushki es una empresa fundada con el fin de conectar y estandarizar las tuberías de pagos en Latinoamérica.
              </Typography>
              <Typography color="text.grey" variant="subtitle2" gutterBottom component="div">
                subtitle2. Kushki es una empresa fundada con el fin de conectar y estandarizar las tuberías de pagos en Latinoamérica.
              </Typography>
              <Typography color="text.grey" variant="body2" gutterBottom>
                body2. Kushki es una empresa fundada con el fin de conectar y estandarizar las tuberías de pagos en Latinoamérica. Fue creada en 2016 en Nueva York, por emprendedores e inversionistas con previa trayectoria en Fintech en los Estados Unidos y Europa y en la actualidad Kushki hoy opera ya en 7 países de la región.
              </Typography>
              <Typography color="text.grey" variant="body2" gutterBottom>
                body2. Kushki es una empresa fundada con el fin de conectar y estandarizar las tuberías de pagos en Latinoamérica. Fue creada en 2016 en Nueva York, por emprendedores e inversionistas con previa trayectoria en Fintech en los Estados Unidos y Europa y en la actualidad Kushki hoy opera ya en 7 países de la región.
              </Typography>
              <Typography color="text.grey" variant="caption" gutterBottom component="div">
                caption. Kushki es una empresa fundada con el fin de conectar y estandarizar las tuberías de pagos en Latinoamérica. Fue creada en 2016 en Nueva York, por emprendedores e inversionistas con previa trayectoria en Fintech en los Estados Unidos y Europa y en la actualidad Kushki hoy opera ya en 7 países de la región.
              </Typography>
              <Typography color="text.grey" variant="overline" gutterBottom component="div">
                overline. Kushki es una empresa fundada con el fin de conectar y estandarizar las tuberías de pagos en Latinoamérica. Fue creada en 2016 en Nueva York, por emprendedores e inversionistas con previa trayectoria en Fintech en los Estados Unidos y Europa y en la actualidad Kushki hoy opera ya en 7 países de la región.
              </Typography>
              <Typography color="text.grey" variant="button" gutterBottom component="div">
                Numeric text. Kushki La pasarela de pagos de nuestra región
              </Typography>
            </Box>
          </Box>
          {/* --- Finish Color Grey --- */}
          {/* --- Start Color Light Grey --- */}
          <Typography variant="h3" component="div" sx={{ pb: "30px" }}>
          LightGrey (color="text.lightGrey")
          </Typography>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={0} alignItems="center" mb={15}>
            <Box gridColumn="span 12">
              <Typography color="text.lightGrey" variant="h1" gutterBottom>
                h1. Kushki La pasarela de pagos de nuestra región
              </Typography>
              <Typography color="text.lightGrey" variant="h2" gutterBottom>
                h2. Kushki La pasarela de pagos de nuestra región
              </Typography>
              <Typography color="text.lightGrey" variant="h3" gutterBottom>
                h3. Kushki La pasarela de pagos de nuestra región
              </Typography>
              <Typography color="text.lightGrey" variant="h4" gutterBottom>
                h4. Kushki La pasarela de pagos de nuestra región
              </Typography>
              <Typography color="text.lightGrey" variant="h5" gutterBottom>
                h5. Kushki La pasarela de pagos de nuestra región
              </Typography>
              <Typography color="text.lightGrey" variant="h6" gutterBottom>
                h6. Kushki La pasarela de pagos de nuestra región
              </Typography>
              <Typography color="text.lightGrey" variant="subtitle1" gutterBottom component="div">
                subtitle1. Kushki es una empresa fundada con el fin de conectar y estandarizar las tuberías de pagos en Latinoamérica.
              </Typography>
              <Typography color="text.lightGrey" variant="subtitle2" gutterBottom component="div">
                subtitle2. Kushki es una empresa fundada con el fin de conectar y estandarizar las tuberías de pagos en Latinoamérica.
              </Typography>
              <Typography color="text.lightGrey" variant="body2" gutterBottom>
                body2. Kushki es una empresa fundada con el fin de conectar y estandarizar las tuberías de pagos en Latinoamérica. Fue creada en 2016 en Nueva York, por emprendedores e inversionistas con previa trayectoria en Fintech en los Estados Unidos y Europa y en la actualidad Kushki hoy opera ya en 7 países de la región.
              </Typography>
              <Typography color="text.lightGrey" variant="body2" gutterBottom>
                body2. Kushki es una empresa fundada con el fin de conectar y estandarizar las tuberías de pagos en Latinoamérica. Fue creada en 2016 en Nueva York, por emprendedores e inversionistas con previa trayectoria en Fintech en los Estados Unidos y Europa y en la actualidad Kushki hoy opera ya en 7 países de la región.
              </Typography>
              <Typography color="text.lightGrey" variant="button" gutterBottom component="div">
                button text
              </Typography>
              <Typography color="text.lightGrey" variant="caption" gutterBottom component="div">
                caption. Kushki es una empresa fundada con el fin de conectar y estandarizar las tuberías de pagos en Latinoamérica. Fue creada en 2016 en Nueva York, por emprendedores e inversionistas con previa trayectoria en Fintech en los Estados Unidos y Europa y en la actualidad Kushki hoy opera ya en 7 países de la región.
              </Typography>
              <Typography color="text.lightGrey" variant="overline" gutterBottom component="div">
                overline. Kushki es una empresa fundada con el fin de conectar y estandarizar las tuberías de pagos en Latinoamérica. Fue creada en 2016 en Nueva York, por emprendedores e inversionistas con previa trayectoria en Fintech en los Estados Unidos y Europa y en la actualidad Kushki hoy opera ya en 7 países de la región.
              </Typography>
            </Box>
          </Box>
          {/* --- Finish Color Light Grey --- */}
          {/* --- Start Color White --- */}
          <Typography variant="h3" component="div" sx={{ pb: "30px" }}>
          White (color="text.white")
          </Typography>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={0} alignItems="center" mb={15}>
            <Box gridColumn="span 12" bgcolor="neutral.grey5" p={3} sx={{ borderRadius: 2 }}>
              <Typography color="text.white" variant="h1" gutterBottom>
                h1. Kushki La pasarela de pagos de nuestra región
              </Typography>
              <Typography color="text.white" variant="h2" gutterBottom>
                h2. Kushki La pasarela de pagos de nuestra región
              </Typography>
              <Typography color="text.white" variant="h3" gutterBottom>
                h3. Kushki La pasarela de pagos de nuestra región
              </Typography>
              <Typography color="text.white" variant="h4" gutterBottom>
                h4. Kushki La pasarela de pagos de nuestra región
              </Typography>
              <Typography color="text.white" variant="h5" gutterBottom>
                h5. Kushki La pasarela de pagos de nuestra región
              </Typography>
              <Typography color="text.white" variant="h6" gutterBottom>
                h6. Kushki La pasarela de pagos de nuestra región
              </Typography>
              <Typography color="text.white" variant="subtitle1" gutterBottom component="div">
                subtitle1. Kushki es una empresa fundada con el fin de conectar y estandarizar las tuberías de pagos en Latinoamérica.
              </Typography>
              <Typography color="text.white" variant="subtitle2" gutterBottom component="div">
                subtitle2. Kushki es una empresa fundada con el fin de conectar y estandarizar las tuberías de pagos en Latinoamérica.
              </Typography>
              <Typography color="text.white" variant="body2" gutterBottom>
                body2. Kushki es una empresa fundada con el fin de conectar y estandarizar las tuberías de pagos en Latinoamérica. Fue creada en 2016 en Nueva York, por emprendedores e inversionistas con previa trayectoria en Fintech en los Estados Unidos y Europa y en la actualidad Kushki hoy opera ya en 7 países de la región.
              </Typography>
              <Typography color="text.white" variant="body2" gutterBottom>
                body2. Kushki es una empresa fundada con el fin de conectar y estandarizar las tuberías de pagos en Latinoamérica. Fue creada en 2016 en Nueva York, por emprendedores e inversionistas con previa trayectoria en Fintech en los Estados Unidos y Europa y en la actualidad Kushki hoy opera ya en 7 países de la región.
              </Typography>
              <Typography color="text.white" variant="caption" gutterBottom component="div">
                caption. Kushki es una empresa fundada con el fin de conectar y estandarizar las tuberías de pagos en Latinoamérica. Fue creada en 2016 en Nueva York, por emprendedores e inversionistas con previa trayectoria en Fintech en los Estados Unidos y Europa y en la actualidad Kushki hoy opera ya en 7 países de la región.
              </Typography>
              <Typography color="text.white" variant="overline" gutterBottom component="div">
                overline. Kushki es una empresa fundada con el fin de conectar y estandarizar las tuberías de pagos en Latinoamérica. Fue creada en 2016 en Nueva York, por emprendedores e inversionistas con previa trayectoria en Fintech en los Estados Unidos y Europa y en la actualidad Kushki hoy opera ya en 7 países de la región.
              </Typography>
              <Typography color="text.white" variant="button" gutterBottom component="div">
                Numeric text. Kushki La pasarela de pagos de nuestra región
              </Typography>
            </Box>
          </Box>
          {/* --- Finish Color White --- */}
        </Grid>
      </Grid>
      {/* ----------------  FINISH TYPOGRAPHY  ---------------- */}
      {/* ----------------  START BUTTONS  ---------------- */}
      <Grid container spacing={2} alignItems="center">
        <Grid item sx={{ mx: "auto", width: `calc(90%)`, }} id="buttonNav">
          <Typography className="titleComponents">
          Buttons - Button Text
          </Typography>
          {/* --- Start Button Primary --- */}
          <Typography variant="h3" component="div" sx={{ pb: "30px" }}>
              Primary button
          </Typography>
          <Grid container spacing={3}>
              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button
                    size="small"
                    startIcon={<AddIcon />}
                    variant="contained"
                    color="primary"
                  >
                    Nuevo Botón S
                  </Button>
                </Box>
              </Grid>
              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button size="small" variant="contained" color="primary">
                    Nuevo Botón S
                  </Button>
                </Box>
              </Grid>
              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button
                    size="small"
                    disabled
                    variant="contained"
                    color="primary"
                  >
                    Nuevo Botón S
                  </Button>
                </Box>
              </Grid>
          </Grid>
          <Grid container spacing={3}>
              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button
                    startIcon={<AddIcon />}
                    variant="contained"
                    color="primary"
                  >
                    Nuevo Botón M
                  </Button>
                </Box>
              </Grid>
              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button variant="contained" color="primary">
                    Nuevo Botón M
                  </Button>
                </Box>
              </Grid>
              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button
                    disabled
                    variant="contained"
                    color="primary"
                  >
                    Nuevo Botón M
                  </Button>
                </Box>
              </Grid>
          </Grid>
          <Grid container spacing={3}>
              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button
                    startIcon={<AddIcon />}
                    variant="contained"
                    color="primary" size="large"
                  >
                    Nuevo Botón L
                  </Button>
                </Box>
              </Grid>
              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button variant="contained" color="primary" size="large">
                    Nuevo Botón L
                  </Button>
                </Box>
              </Grid>
              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button
                    disabled
                    variant="contained"
                    color="primary" size="large"
                  >
                    Nuevo Botón L
                  </Button>
                </Box>
              </Grid>
          </Grid>
          {/* --- Finish Button Primary --- */}
          {/* --- Start Button Secondary --- */}
          <Typography variant="h3" component="div" sx={{ pb: "30px" }}>
              Secondary button
          </Typography>
          <Grid container spacing={3}>
              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button
                    size="small"
                    startIcon={<AddIcon />}
                    variant="contained"
                    color="secondary"
                  >
                    Nuevo Botón S
                  </Button>
                </Box>
              </Grid>
              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button size="small" variant="contained" color="secondary">
                    Nuevo Botón S
                  </Button>
                </Box>
              </Grid>
              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button
                    size="small"
                    disabled
                    variant="contained"
                    color="secondary"
                  >
                    Nuevo Botón S
                  </Button>
                </Box>
              </Grid>
          </Grid>
          <Grid container spacing={3}>
              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button
                    startIcon={<AddIcon />}
                    variant="contained"
                    color="secondary"
                  >
                    Nuevo Botón M
                  </Button>
                </Box>
              </Grid>
              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button variant="contained" color="secondary">
                    Nuevo Botón M
                  </Button>
                </Box>
              </Grid>
              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button
                    disabled
                    variant="contained"
                    color="secondary"
                  >
                    Nuevo Botón M
                  </Button>
                </Box>
              </Grid>
          </Grid>
          <Grid container spacing={3}>
              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button
                    startIcon={<AddIcon />}
                    variant="contained"
                    color="secondary" size="large"
                  >
                    Nuevo Botón L
                  </Button>
                </Box>
              </Grid>
              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button variant="contained" color="secondary" size="large">
                    Nuevo Botón L
                  </Button>
                </Box>
              </Grid>
              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button
                    disabled
                    variant="contained"
                    color="secondary" size="large"
                  >
                    Nuevo Botón L
                  </Button>
                </Box>
              </Grid>
          </Grid>
          {/* --- Finish Button Secondary --- */}
          {/* --- Start Button Error --- */}
          <Typography variant="h3" component="div" sx={{ pb: "30px" }}>
              Error button
          </Typography>
          <Grid container spacing={3}>
              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button
                    size="small"
                    startIcon={<AddIcon />}
                    variant="contained"
                    color="error"
                  >
                    Nuevo Botón S
                  </Button>
                </Box>
              </Grid>
              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button size="small" variant="contained" color="error">
                    Nuevo Botón S
                  </Button>
                </Box>
              </Grid>
              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button
                    size="small"
                    disabled
                    variant="contained"
                    color="error"
                  >
                    Nuevo Botón S
                  </Button>
                </Box>
              </Grid>
          </Grid>
          <Grid container spacing={3}>
              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button
                    startIcon={<AddIcon />}
                    variant="contained"
                    color="error"
                  >
                    Nuevo Botón M
                  </Button>
                </Box>
              </Grid>
              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button variant="contained" color="error">
                    Nuevo Botón M
                  </Button>
                </Box>
              </Grid>
              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button
                    disabled
                    variant="contained"
                    color="error"
                  >
                    Nuevo Botón M
                  </Button>
                </Box>
              </Grid>
          </Grid>
          <Grid container spacing={3}>
              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button
                    startIcon={<AddIcon />}
                    variant="contained"
                    color="error" size="large"
                  >
                    Nuevo Botón L
                  </Button>
                </Box>
              </Grid>
              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button variant="contained" color="error" size="large">
                    Nuevo Botón L
                  </Button>
                </Box>
              </Grid>
              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button
                    disabled
                    variant="contained"
                    color="error" size="large"
                  >
                    Nuevo Botón L
                  </Button>
                </Box>
              </Grid>
          </Grid>
          {/* --- Finish Button Error --- */}
          {/* --- Start Button Text--- */}
          <Typography variant="h3" component="div" sx={{ pb: "30px" }}>
              Text button
          </Typography>
          <Grid container spacing={3}>
              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button
                    size="small"
                    startIcon={<AddIcon />}
                    variant="text"
                  >
                    Nuevo Botón S
                  </Button>
                </Box>
              </Grid>
              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button size="small" variant="text">
                    Nuevo Botón S
                  </Button>
                </Box>
              </Grid>
              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button
                    size="small"
                    disabled
                    variant="text"
                  >
                    Nuevo Botón S
                  </Button>
                </Box>
              </Grid>
          </Grid>
          <Grid container spacing={3}>
              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button
                    startIcon={<AddIcon />}
                    variant="text"
                  >
                    Nuevo Botón M
                  </Button>
                </Box>
              </Grid>
              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button variant="text">
                    Nuevo Botón M
                  </Button>
                </Box>
              </Grid>
              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button
                    disabled
                    variant="text"
                  >
                    Nuevo Botón M
                  </Button>
                </Box>
              </Grid>
          </Grid>
          <Grid container spacing={3}>
              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button
                    startIcon={<AddIcon />}
                    variant="text"
                    size="large"
                  >
                    Nuevo Botón L
                  </Button>
                </Box>
              </Grid>
              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button variant="text"
                  size="large">
                    Nuevo Botón L
                  </Button>
                </Box>
              </Grid>
              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button
                    disabled
                    variant="text"
                    size="large"
                  >
                    Nuevo Botón L
                  </Button>
                </Box>
              </Grid>
          </Grid>
          {/* --- Finish Button Text--- */}
        </Grid>
      </Grid>
      {/* ----------------  FINISH BUTTONS  ---------------- */}
      {/* ----------------  START DATA DISPLAY  ---------------- */}
      <Grid container spacing={2} alignItems="center">
        <Grid item sx={{ mx: "auto", width: `calc(90%)`, }} id="displayNav">
          <Typography className="titleComponents">
          Data Display
          </Typography>
          {/* --- Start SnackBar --- */}
          <Typography variant="h3" component="div" sx={{ pb: "30px" }}>
               Snackbar
          </Typography>
          <Button variant="outlined" onClick={snackClick({vertical: "top", horizontal: "center"})} sx={{  margin: 'auto auto 30px auto',}}>
                Demo
          </Button>
          <Snackbar open={open} autoHideDuration={6000} anchorOrigin={{ vertical, horizontal }} key={vertical + horizontal} onClose={snackClose}>
            <Alert severity="success" icon={<DoneIcon />} sx={{ width: '100%' }} onClose={snackClose}>
              Esto es un snackbar  <a href="#">Info con link</a>
            </Alert>
          </Snackbar>
          <Grid>
            <Typography variant="h5" component="div" sx={{ pb: "30px" }}>
                  No close
            </Typography>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={3} alignItems="end" mb={5} sx={{ width: "100%" }}>
                <Box gridColumn="span 3">
                  <Stack spacing={2} mx={0}>
                      <Alert severity="error" icon={false}>Esto es un snackbar</Alert>
                      <Alert severity="success" icon={false}>Esto es un snackbar</Alert> 
                  </Stack>
                </Box>
                <Box gridColumn="span 4">
                  <Stack spacing={2} mx={0}>
                      <Alert severity="error">Esto es un snackbar</Alert>
                      <Alert severity="success" icon={<DoneIcon />}>Esto es un snackbar</Alert> 
                  </Stack>
                </Box>
                <Box gridColumn="span 5">
                  <Stack spacing={2} mx={0}>
                      <Alert severity="error" icon={false}>Esto es un snackbar <a href="#">Info con link</a></Alert>
                      <Alert severity="success" icon={false}>Esto es un snackbar <a href="#">Info con link</a></Alert> 
                      {/* --- 
                      <Alert severity="warning">This is a warning message!</Alert>
                      
                      <Alert severity="info" icon={false}>This is an information message!</Alert>
                      ---- */}
                  </Stack>
                </Box>
            </Box>
            <Typography variant="h5" component="div" sx={{ pb: "30px" }}>
                Close
            </Typography>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={3} alignItems="end" mb={15} sx={{ width: "100%" }}>
                <Box gridColumn="span 3">
                  <Stack spacing={2} mx={0}>
                      <Alert severity="error" icon={false} onClose={snackClose}>Esto es un snackbar</Alert>
                      <Alert severity="success" icon={false} onClose={snackClose}>Esto es un snackbar</Alert> 
                  </Stack>
                </Box>
                <Box gridColumn="span 4">
                  <Stack spacing={2} mx={0}>
                      <Alert severity="error" onClose={snackClose}>Esto es un snackbar</Alert>
                      <Alert severity="success" icon={<DoneIcon />} onClose={snackClose}>Esto es un snackbar</Alert> 
                  </Stack>
                </Box>
                <Box gridColumn="span 5">
                  <Stack spacing={2} mx={0}>
                      <Alert severity="error" icon={false} onClose={snackClose}>Esto es un snackbar <a href="#">Info con link</a></Alert>
                      <Alert severity="success" icon={false} onClose={snackClose}>Esto es un snackbar <a href="#">Info con link</a></Alert> 
                  </Stack>
                </Box>
            </Box>
          </Grid>
          {/* --- Finish SnackBar --- */}
          {/* --- Start Chip --- */}
          <Typography variant="h3" component="div" sx={{ pb: "30px" }}>
                  Chip
          </Typography>
          <Grid container spacing={3}>
              <Grid item md={4} sm={12}>
                  <Box mt={2}>
                    <Typography variant="h5" component="div" sx={{ pb: "30px" }}>
                      Small
                    </Typography>
                    <Chip
                          label="Chip base"
                          size="small"
                          onClick={chipClick}
                      />
                  </Box>
                  <Box mt={5}>
                    <Chip
                      label="Chip base"
                      size="small"
                      onClick={chipClick}
                      onDelete={chipDelete}
                      deleteIcon={<CloseIcon />}
                    />
                  </Box>
              </Grid>
              <Grid item md={4} sm={12}>
                  <Box mt={2}>
                  <Typography variant="h5" component="div" sx={{ pb: "30px" }}>
                    Medium
                  </Typography>
                  <Chip
                        label="Chip base"
                        onClick={chipClick}
                    />
                  </Box>
                  <Box mt={5}>
                    <Chip
                      label="Chip base"
                      onClick={chipClick}
                      onDelete={chipDelete}
                      deleteIcon={<CloseIcon />}
                    />
                  </Box>
              </Grid>
              <Grid item md={4} sm={12}>
                  <Box  mt={2}>
                    <Typography variant="h5" component="div" sx={{ pb: "30px" }}>
                      Large
                    </Typography>
                    <Chip
                          label="Chip base"
                          className="sizeLarge"
                          onClick={chipClick}
                        />
                  </Box>
                  <Box  mt={5}>
                    <Chip
                      label="Chip base"
                      className="sizeLarge"
                      onClick={chipClick}
                      onDelete={chipDelete}
                      deleteIcon={<CloseIcon />}
                    />
                  </Box>
              </Grid>
          </Grid>
          {/* --- Finish Chip --- */}        
          {/* --- Start Tooltip --- */}
          <Typography variant="h3" component="div" sx={{ pb: "30px" }}>
            Tooltip
          </Typography>
          <Grid container>
              <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={3} alignItems="end" mt={2} sx={{ width: "100%" }}>
                  <Box gridColumn="span 3">
                    <Tooltip TransitionComponent={Zoom} title="Tooltip" placement="bottom" arrow>
                      <Button variant="outlined">Arrow Bottom</Button>
                    </Tooltip>
                  </Box>
                  <Box gridColumn="span 3">
                    <Tooltip TransitionComponent={Zoom} title="Tooltip" placement="top" arrow>
                      <Button variant="outlined">Arrow Top</Button>
                    </Tooltip>
                  </Box>
                  <Box gridColumn="span 3">
                    <Tooltip TransitionComponent={Zoom} title="Tooltip" placement="right" arrow>
                      <Button variant="outlined">Arrow Right</Button>
                    </Tooltip>
                  </Box>
                  <Box gridColumn="span 3">
                    <Tooltip TransitionComponent={Zoom} title="Tooltip" placement="left" arrow>
                      <Button variant="outlined">Arrow Left</Button>
                    </Tooltip>
                  </Box>
              </Box>
          </Grid>
          <Grid container>
              <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={3} alignItems="end" mb={5} sx={{ width: "100%" }}>
                  <Box gridColumn="span 3">
                    <HtmlTooltip
                    placement="bottom" arrow
                      title={
                        <React.Fragment>
                          <Typography>Title</Typography>
                          {"Description"}
                        </React.Fragment>
                      }
                    >
                      <Button variant="outlined" color="secondary">Arrow Bottom</Button>
                    </HtmlTooltip>
                  </Box>
                  <Box gridColumn="span 3">
                    <HtmlTooltip
                    placement="top" arrow
                      title={
                        <React.Fragment>
                          <Typography>Title</Typography>
                          {"Description"}
                        </React.Fragment>
                      }
                    >
                      <Button variant="outlined" color="secondary">Arrow Top</Button>
                    </HtmlTooltip>
                  </Box>
                  <Box gridColumn="span 3">
                    <HtmlTooltip
                    placement="right" arrow
                      title={
                        <React.Fragment>
                          <Typography>Title</Typography>
                          {"Description"}
                        </React.Fragment>
                      }
                    >
                      <Button variant="outlined" color="secondary">Arrow Right</Button>
                    </HtmlTooltip>
                  </Box>
                  <Box gridColumn="span 3">
                    <HtmlTooltip
                    placement="left" arrow
                      title={
                        <React.Fragment>
                          <Typography>Title</Typography>
                          {"Description"}
                        </React.Fragment>
                      }
                    >
                      <Button variant="outlined" color="secondary">Arrow Left</Button>
                    </HtmlTooltip>
                  </Box>
              </Box>
          </Grid>
          {/* --- Finish Tooltip --- */}     
        </Grid>
      </Grid>
      {/* ----------------  FINISH DATA DISPLAY  ---------------- */}
    </ThemeProvider>
    </React.Fragment>
  );
}
export default Atoms;