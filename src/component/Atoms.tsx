import React from "react";

import { makeStyles } from "@mui/styles";
import { ThemeProvider } from "@mui/material/styles";

import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import { Typography, Grid, MenuItem } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SaveIcon from "@mui/icons-material/FavoriteBorderOutlined";
import theme from "../theme";
import iconpluss from "../img/Icons.svg";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Tooltip from "@mui/material/Tooltip";

import MuiAlert, { AlertProps } from "@mui/material/Alert";

const useStyles = makeStyles((theme) => ({}));

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Atoms: React.FC = () => {
  const [setChecked] = React.useState(false);

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [value, setValue] = React.useState("female");

  const [setOpen] = React.useState(false);


  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Grid p={5} alignItems="center">
          <Grid item md={10} sm={11}>
            <Box
              className="DS-HeaderTittle"
              px={2}
              py={2}
              mb={4}
              display={"block"}
              mt={5}
            >
              <div className="span">Colores</div>
            </Box>

            {/* ----------------  Brand color  ---------------- */}
            <Box className="sub" mb={4} display={"block"} mt={5}>
              <div className="span">Primary - Color</div>
            </Box>

            <Grid container spacing={4}>
              <Grid item md={4} sm={6}>
                <Box display="flex">
                  <Box
                    bgcolor="primary.dark2"
                    maxHeight="50px"
                    maxWidth="50px"
                    borderRadius={4}
                    py={3}
                    px={3}
                  ></Box>
                  <Box pl={2}>
                    <Typography color="text.dark" variant="h6">
                      primary.dark2
                    </Typography>
                    <Typography color="textPrimary" variant="body2">
                      rgba(9, 10, 16, 1)
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item md={4} sm={6}>
                <Box display="flex">
                  <Box
                    bgcolor="primary.dark"
                    maxHeight="50px"
                    maxWidth="50px"
                    borderRadius={4}
                    py={3}
                    px={3}
                  ></Box>
                  <Box pl={2}>
                    <Typography color="text.dark" variant={"h6"}>
                      primary.dark
                    </Typography>
                    <Typography color="text.grey" variant={"body2"}>
                      rgba(19, 22, 35, 1)
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item md={4} sm={6}>
                <Box display="flex">
                  <Box
                    bgcolor="primary.main"
                    maxHeight="50px"
                    maxWidth="50px"
                    borderRadius={4}
                    py={3}
                    px={3}
                  ></Box>
                  <Box pl={2}>
                    <Typography color="text.dark" variant={"h6"}>
                      primary.main
                    </Typography>
                    <Typography color="text.grey" variant={"body2"}>
                      rgba(25, 29, 44, 1)
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item md={4} sm={6}>
                <Box display="flex">
                  <Box
                    bgcolor="primary.light"
                    maxHeight="50px"
                    maxWidth="50px"
                    borderRadius={4}
                    py={3}
                    px={3}
                  ></Box>
                  <Box pl={2}>
                    <Typography color="text.dark" variant={"h6"}>
                      primary.light
                    </Typography>
                    <Typography color="text.grey" variant={"body2"}>
                      rgba(39, 43, 61, 1)
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item md={4} sm={6}>
                <Box display="flex">
                  <Box
                    bgcolor="primary.light2"
                    maxHeight="50px"
                    maxWidth="50px"
                    borderRadius={4}
                    py={3}
                    px={3}
                  ></Box>
                  <Box pl={2}>
                    <Typography color="text.dark" variant={"h6"}>
                      primary.light2
                    </Typography>
                    <Typography color="text.grey" variant={"body2"}>
                      rgba(89, 95, 118, 1)
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item md={4} sm={6}>
                <Box display="flex">
                  <Box
                    bgcolor="primary.light3"
                    maxHeight="50px"
                    maxWidth="50px"
                    borderRadius={4}
                    py={3}
                    px={3}
                  ></Box>
                  <Box pl={2}>
                    <Typography color="text.dark" variant={"h6"}>
                      primary.light3
                    </Typography>
                    <Typography color="text.grey" variant={"body2"}>
                      rgba(244, 246, 250, 1)
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            {/* ----------------  Info color  ---------------- */}
            <Box className="sub" mb={4} display={"block"} mt={12}>
              <div className="span">Secondary - color</div>
            </Box>
            <Grid container spacing={4}>
              <Grid item md={4} sm={6}>
                <Box display="flex">
                  <Box
                    bgcolor="secondary.dark2"
                    maxHeight="50px"
                    maxWidth="50px"
                    borderRadius={4}
                    py={3}
                    px={3}
                  ></Box>
                  <Box pl={2}>
                    <Typography color="text.dark" variant={"h6"}>
                      secondary.dark2
                    </Typography>
                    <Typography color="text.grey" variant={"body2"}>
                      rgba(64, 8, 3, 1)
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item md={4} sm={6}>
                <Box display="flex">
                  <Box
                    bgcolor="secondary.dark"
                    maxHeight="50px"
                    maxWidth="50px"
                    borderRadius={4}
                    py={3}
                    px={3}
                  ></Box>
                  <Box pl={2}>
                    <Typography color="text.dark" variant={"h6"}>
                      secondary.dark
                    </Typography>
                    <Typography color="text.grey" variant={"body2"}>
                      rgba(84, 14, 8, 1)
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item md={4} sm={6}>
                <Box display="flex">
                  <Box
                    bgcolor="secondary.main"
                    maxHeight="50px"
                    maxWidth="50px"
                    borderRadius={4}
                    py={3}
                    px={3}
                  ></Box>
                  <Box pl={2}>
                    <Typography color="text.dark" variant={"h6"}>
                      secondary.main
                    </Typography>
                    <Typography color="text.grey" variant={"body2"}>
                      rgba(99, 20, 14, 1)
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item md={4} sm={6}>
                <Box display="flex">
                  <Box
                    bgcolor="secondary.light"
                    maxHeight="50px"
                    maxWidth="50px"
                    borderRadius={4}
                    py={3}
                    px={3}
                  ></Box>
                  <Box pl={2}>
                    <Typography color="text.dark" variant={"h6"}>
                      secondary.light
                    </Typography>
                    <Typography color="text.grey" variant={"body2"}>
                      rgba(161, 32, 23, 1)
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item md={4} sm={6}>
                <Box display="flex">
                  <Box
                    bgcolor="secondary.light2"
                    maxHeight="50px"
                    maxWidth="50px"
                    borderRadius={4}
                    py={3}
                    px={3}
                  ></Box>
                  <Box pl={2}>
                    <Typography color="text.dark" variant={"h6"}>
                      secondary.light2
                    </Typography>
                    <Typography color="text.grey" variant={"body2"}>
                      rgba(237, 137, 130, 1)
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item md={4} sm={6}>
                <Box display="flex">
                  <Box
                    bgcolor="secondary.light3"
                    maxHeight="50px"
                    maxWidth="50px"
                    borderRadius={4}
                    py={3}
                    px={3}
                  ></Box>
                  <Box pl={2}>
                    <Typography color="text.dark" variant={"h6"}>
                      secondary.light3
                    </Typography>
                    <Typography color="text.grey" variant={"body2"}>
                      rgba(253, 242, 242, 1)
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            {/* ----------------  Info color  ---------------- */}
            <Box className="sub" mb={4} display={"block"} mt={12}>
              <div className="span">Info - color</div>
            </Box>

            <Grid container spacing={4}>
              <Grid item md={4} sm={6}>
                <Box display="flex">
                  <Box
                    bgcolor="info.dark2"
                    maxHeight="50px"
                    maxWidth="50px"
                    borderRadius={4}
                    py={3}
                    px={3}
                  ></Box>
                  <Box pl={2}>
                    <Typography color="text.dark" variant={"h6"}>
                      info.dark2
                    </Typography>
                    <Typography color="text.grey" variant={"body2"}>
                      rgba(53, 142, 60, 1)
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item md={4} sm={6}>
                <Box display="flex">
                  <Box
                    bgcolor="info.dark"
                    maxHeight="50px"
                    maxWidth="50px"
                    borderRadius={4}
                    py={3}
                    px={3}
                  ></Box>
                  <Box pl={2}>
                    <Typography color="text.dark" variant={"h6"}>
                      info.dark
                    </Typography>
                    <Typography color="text.grey" variant={"body2"}>
                      rgba(78, 167, 85, 1)
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item md={4} sm={6}>
                <Box display="flex">
                  <Box
                    bgcolor="info.main"
                    maxHeight="50px"
                    maxWidth="50px"
                    borderRadius={4}
                    py={3}
                    px={3}
                  ></Box>
                  <Box pl={2}>
                    <Typography color="text.dark" variant={"h6"}>
                      info.main
                    </Typography>
                    <Typography color="text.grey" variant={"body2"}>
                      rgba(102, 191, 109, 1)
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item md={4} sm={6}>
                <Box display="flex">
                  <Box
                    bgcolor="info.light"
                    maxHeight="50px"
                    maxWidth="50px"
                    borderRadius={4}
                    py={3}
                    px={3}
                  ></Box>
                  <Box pl={2}>
                    <Typography color="text.dark" variant={"h6"}>
                      info.light
                    </Typography>
                    <Typography color="text.grey" variant={"body2"}>
                      rgba(118, 207, 125, 1)
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item md={4} sm={6}>
                <Box display="flex">
                  <Box
                    bgcolor="info.light2"
                    maxHeight="50px"
                    maxWidth="50px"
                    borderRadius={4}
                    py={3}
                    px={3}
                  ></Box>
                  <Box pl={2}>
                    <Typography color="text.dark" variant={"h6"}>
                      info.light2
                    </Typography>
                    <Typography color="text.grey" variant={"body2"}>
                      rgba(155, 244, 162, 1)
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item md={4} sm={6}>
                <Box display="flex">
                  <Box
                    bgcolor="info.light3"
                    maxHeight="50px"
                    maxWidth="50px"
                    borderRadius={4}
                    py={3}
                    px={3}
                  ></Box>
                  <Box pl={2}>
                    <Typography color="text.dark" variant={"h6"}>
                      info.light3
                    </Typography>
                    <Typography color="text.grey" variant={"body2"}>
                      rgba(230, 252, 234, 1)
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            {/* ----------------  error color  ---------------- */}
            <Box className="sub" mb={4} display={"block"} mt={12}>
              <div className="span">Error - color</div>
            </Box>

            <Grid container spacing={4}>
              <Grid item md={4} sm={6}>
                <Box display="flex">
                  <Box
                    bgcolor="error.dark2"
                    maxHeight="50px"
                    maxWidth="50px"
                    borderRadius={4}
                    py={3}
                    px={3}
                  ></Box>
                  <Box pl={2}>
                    <Typography color="text.dark" variant={"h6"}>
                      error.dark2
                    </Typography>
                    <Typography color="text.grey" variant={"body2"}>
                      rgba(173, 12, 42, 1)
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item md={4} sm={6}>
                <Box display="flex">
                  <Box
                    bgcolor="error.dark"
                    maxHeight="50px"
                    maxWidth="50px"
                    borderRadius={4}
                    py={3}
                    px={3}
                  ></Box>
                  <Box pl={2}>
                    <Typography color="text.dark" variant={"h6"}>
                      error.dark
                    </Typography>
                    <Typography color="text.grey" variant={"body2"}>
                      rgba(214, 44, 75, 1)
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item md={4} sm={6}>
                <Box display="flex">
                  <Box
                    bgcolor="error.main"
                    maxHeight="50px"
                    maxWidth="50px"
                    borderRadius={4}
                    py={3}
                    px={3}
                  ></Box>
                  <Box pl={2}>
                    <Typography color="text.dark" variant={"h6"}>
                      error.main
                    </Typography>
                    <Typography color="text.grey" variant={"body2"}>
                      rgba(226, 71, 99, 1)
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item md={4} sm={6}>
                <Box display="flex">
                  <Box
                    bgcolor="error.light"
                    maxHeight="50px"
                    maxWidth="50px"
                    borderRadius={4}
                    py={3}
                    px={3}
                  ></Box>
                  <Box pl={2}>
                    <Typography color="text.dark" variant={"h6"}>
                      error.light
                    </Typography>
                    <Typography color="text.grey" variant={"body2"}>
                      rgba(226, 108, 129, 1)
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item md={4} sm={6}>
                <Box display="flex">
                  <Box
                    bgcolor="error.light2"
                    maxHeight="50px"
                    maxWidth="50px"
                    borderRadius={4}
                    py={3}
                    px={3}
                  ></Box>
                  <Box pl={2}>
                    <Typography color="text.dark" variant={"h6"}>
                      error.light2
                    </Typography>
                    <Typography color="text.grey" variant={"body2"}>
                      rgba(248, 214, 153, 1)
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item md={4} sm={6}>
                <Box display="flex">
                  <Box
                    bgcolor="error.light3"
                    maxHeight="50px"
                    maxWidth="50px"
                    borderRadius={4}
                    py={3}
                    px={3}
                  ></Box>
                  <Box pl={2}>
                    <Typography color="text.dark" variant={"h6"}>
                      error.light3
                    </Typography>
                    <Typography color="text.grey" variant={"body2"}>
                      rgba(255, 234, 238, 1)
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            {/* ----------------  warning color  ---------------- */}
            <Box className="sub" mb={4} display={"block"} mt={12}>
              <div className="span">Warning - color</div>
            </Box>

            <Grid container spacing={4}>
              <Grid item md={4} sm={6}>
                <Box display="flex">
                  <Box
                    bgcolor="warning.dark2"
                    maxHeight="50px"
                    maxWidth="50px"
                    borderRadius={4}
                    py={3}
                    px={3}
                  ></Box>
                  <Box pl={2}>
                    <Typography color="text.dark" variant={"h6"}>
                      warning.dark2
                    </Typography>
                    <Typography color="text.grey" variant={"body2"}>
                      rgba(128, 94, 33, 1)
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item md={4} sm={6}>
                <Box display="flex">
                  <Box
                    bgcolor="warning.dark"
                    maxHeight="50px"
                    maxWidth="50px"
                    borderRadius={4}
                    py={3}
                    px={3}
                  ></Box>
                  <Box pl={2}>
                    <Typography color="text.dark" variant={"h6"}>
                      warning.dark
                    </Typography>
                    <Typography color="text.grey" variant={"body2"}>
                      rgba(168, 134, 73, 1)
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item md={4} sm={6}>
                <Box display="flex">
                  <Box
                    bgcolor="warning.main"
                    maxHeight="50px"
                    maxWidth="50px"
                    borderRadius={4}
                    py={3}
                    px={3}
                  ></Box>
                  <Box pl={2}>
                    <Typography color="text.dark" variant={"h6"}>
                      warning.main
                    </Typography>
                    <Typography color="text.grey" variant={"body2"}>
                      rgba(188, 154, 93, 1)
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item md={4} sm={6}>
                <Box display="flex">
                  <Box
                    bgcolor="warning.light"
                    maxHeight="50px"
                    maxWidth="50px"
                    borderRadius={4}
                    py={3}
                    px={3}
                  ></Box>
                  <Box pl={2}>
                    <Typography color="text.dark" variant={"h6"}>
                      warning.light
                    </Typography>
                    <Typography color="text.grey" variant={"body2"}>
                      rgba(218, 184, 123, 1)
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item md={4} sm={6}>
                <Box display="flex">
                  <Box
                    bgcolor="warning.light2"
                    maxHeight="50px"
                    maxWidth="50px"
                    borderRadius={4}
                    py={3}
                    px={3}
                  ></Box>
                  <Box pl={2}>
                    <Typography color="text.dark" variant={"h6"}>
                      warning.light2
                    </Typography>
                    <Typography color="text.grey" variant={"body2"}>
                      rgba(248, 214, 153, 1)
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item md={4} sm={6}>
                <Box display="flex">
                  <Box
                    bgcolor="warning.light3"
                    maxHeight="50px"
                    maxWidth="50px"
                    borderRadius={4}
                    py={3}
                    px={3}
                  ></Box>
                  <Box pl={2}>
                    <Typography color="text.dark" variant={"h6"}>
                      warning.light3
                    </Typography>
                    <Typography color="text.grey" variant={"body2"}>
                      rgba(253, 249, 242, 1)
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            {/* ----------------  success color  ---------------- */}
            <Box className="sub" mb={4} display={"block"} mt={12}>
              <div className="span">Alternate - color</div>
            </Box>

            <Grid container spacing={4}>
              <Grid item md={4} sm={6}>
                <Box display="flex">
                  <Box
                    bgcolor="alternate.dark2"
                    maxHeight="50px"
                    maxWidth="50px"
                    borderRadius={4}
                    py={3}
                    px={3}
                  ></Box>
                  <Box pl={2}>
                    <Typography color="text.dark" variant={"h6"}>
                      alternate.dark2
                    </Typography>
                    <Typography color="text.grey" variant={"body2"}>
                      rgba(11, 64, 80, 1)
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item md={4} sm={6}>
                <Box display="flex">
                  <Box
                    bgcolor="alternate.dark"
                    maxHeight="50px"
                    maxWidth="50px"
                    borderRadius={4}
                    py={3}
                    px={3}
                  ></Box>
                  <Box pl={2}>
                    <Typography color="text.dark" variant={"h6"}>
                      alternate.dark
                    </Typography>
                    <Typography color="text.grey" variant={"body2"}>
                      rgba(19, 107, 134, 1)
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item md={4} sm={6}>
                <Box display="flex">
                  <Box
                    bgcolor="alternate.main"
                    maxHeight="50px"
                    maxWidth="50px"
                    borderRadius={4}
                    py={3}
                    px={3}
                  ></Box>
                  <Box pl={2}>
                    <Typography color="text.dark" variant={"h6"}>
                      alternate.main
                    </Typography>
                    <Typography color="text.grey" variant={"body2"}>
                      rgba(29, 174, 220, 1)
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item md={4} sm={6}>
                <Box display="flex">
                  <Box
                    bgcolor="alternate.light"
                    maxHeight="50px"
                    maxWidth="50px"
                    borderRadius={4}
                    py={3}
                    px={3}
                  ></Box>
                  <Box pl={2}>
                    <Typography color="text.dark" variant={"h6"}>
                      alternate.light
                    </Typography>
                    <Typography color="text.grey" variant={"body2"}>
                      rgba(77, 194, 229, 1)
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item md={4} sm={6}>
                <Box display="flex">
                  <Box
                    bgcolor="alternate.light2"
                    maxHeight="50px"
                    maxWidth="50px"
                    borderRadius={4}
                    py={3}
                    px={3}
                  ></Box>
                  <Box pl={2}>
                    <Typography color="text.dark" variant={"h6"}>
                      alternate.light2
                    </Typography>
                    <Typography color="text.grey" variant={"body2"}>
                      rgba(166, 224, 242, 1)
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item md={4} sm={6}>
                <Box display="flex">
                  <Box
                    bgcolor="alternate.light3"
                    maxHeight="50px"
                    maxWidth="50px"
                    borderRadius={4}
                    py={3}
                    px={3}
                  ></Box>
                  <Box pl={2}>
                    <Typography color="text.dark" variant={"h6"}>
                      alternate.light3
                    </Typography>
                    <Typography color="text.grey" variant={"body2"}>
                      rgba(242, 250, 253, 1)
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            {/* ----------------  text color  ---------------- */}
            <Box className="sub" mb={4} display={"block"} mt={12}>
              <div className="span">Neutral - color</div>
            </Box>

            <Grid container spacing={4}>
              <Grid item md={4} sm={6}>
                <Box display="flex">
                  <Box
                    bgcolor="neutral.grey8"
                    maxHeight="50px"
                    maxWidth="50px"
                    borderRadius={4}
                    py={3}
                    px={3}
                  ></Box>
                  <Box pl={2}>
                    <Typography color="text.dark" variant={"h6"}>
                      neutral.grey8
                    </Typography>
                    <Typography color="text.grey" variant={"body2"}>
                      rgba(98, 107, 124, 1)
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item md={4} sm={6}>
                <Box display="flex">
                  <Box
                    bgcolor="neutral.grey7"
                    maxHeight="50px"
                    maxWidth="50px"
                    borderRadius={4}
                    py={3}
                    px={3}
                  ></Box>
                  <Box pl={2}>
                    <Typography color="text.dark" variant={"h6"}>
                      neutral.grey7
                    </Typography>
                    <Typography color="text.grey" variant={"body2"}>
                      rgba(118, 129, 148, 1)
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item md={4} sm={6}>
                <Box display="flex">
                  <Box
                    bgcolor="neutral.grey6"
                    maxHeight="50px"
                    maxWidth="50px"
                    borderRadius={4}
                    py={3}
                    px={3}
                  ></Box>
                  <Box pl={2}>
                    <Typography color="text.dark" variant={"h6"}>
                      neutral.grey6
                    </Typography>
                    <Typography color="text.grey" variant={"body2"}>
                      rgba(142, 153, 172, 1)
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item md={4} sm={6}>
                <Box display="flex">
                  <Box
                    bgcolor="neutral.grey5"
                    maxHeight="50px"
                    maxWidth="50px"
                    borderRadius={4}
                    py={3}
                    px={3}
                  ></Box>
                  <Box pl={2}>
                    <Typography color="text.dark" variant={"h6"}>
                      neutral.grey5
                    </Typography>
                    <Typography color="text.grey" variant={"body2"}>
                      rgba(184, 191, 204, 1)
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item md={4} sm={6}>
                <Box display="flex">
                  <Box
                    bgcolor="neutral.grey4"
                    maxHeight="50px"
                    maxWidth="50px"
                    borderRadius={4}
                    py={3}
                    px={3}
                  ></Box>
                  <Box pl={2}>
                    <Typography color="text.dark" variant={"h6"}>
                      neutral.grey4
                    </Typography>
                    <Typography color="text.grey" variant={"body2"}>
                      rgba(199, 204, 217, 1)
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item md={4} sm={6}>
                <Box display="flex">
                  <Box
                    bgcolor="neutral.grey3"
                    maxHeight="50px"
                    maxWidth="50px"
                    borderRadius={4}
                    py={3}
                    px={3}
                  ></Box>
                  <Box pl={2}>
                    <Typography color="text.dark" variant={"h6"}>
                      neutral.grey3
                    </Typography>
                    <Typography color="text.grey" variant={"body2"}>
                      rgba(217, 221, 235, 1)
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item md={4} sm={6}>
                <Box display="flex">
                  <Box
                    bgcolor="neutral.grey2"
                    maxHeight="50px"
                    maxWidth="50px"
                    borderRadius={4}
                    py={3}
                    px={3}
                  ></Box>
                  <Box pl={2}>
                    <Typography color="text.dark" variant={"h6"}>
                      neutral.grey2
                    </Typography>
                    <Typography color="text.grey" variant={"body2"}>
                      rgba(247, 248, 251, 1)
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item md={4} sm={6}>
                <Box display="flex">
                  <Box
                    bgcolor="neutral.grey1"
                    maxHeight="50px"
                    maxWidth="50px"
                    borderRadius={4}
                    py={3}
                    px={3}
                  ></Box>
                  <Box pl={2}>
                    <Typography color="text.dark" variant={"h6"}>
                      neutral.grey1
                    </Typography>
                    <Typography color="text.grey" variant={"body2"}>
                      rgba(244, 246, 250, 1)
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item md={4} sm={6}>
                <Box display="flex">
                  <Box
                    bgcolor="neutral.white"
                    maxHeight="50px"
                    maxWidth="50px"
                    borderRadius={4}
                    py={3}
                    px={3}
                  ></Box>
                  <Box pl={2}>
                    <Typography color="text.dark" variant={"h6"}>
                      neutral.white
                    </Typography>
                    <Typography color="text.grey" variant={"body2"}>
                      rgba(255,255,255,1)
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            {/* ----------------  text color  ---------------- */}
            <Box className="sub" mb={4} display={"block"} mt={12}>
              <div className="span">Typography - color</div>
            </Box>

            <Grid container spacing={4}>
              <Grid item md={4} sm={6}>
                <Box display="flex">
                  <Box
                    bgcolor="text.red"
                    maxHeight="50px"
                    maxWidth="50px"
                    borderRadius={4}
                    py={3}
                    px={3}
                  ></Box>
                  <Box pl={2}>
                    <Typography color="text.dark" variant={"h6"}>
                      text.red
                    </Typography>
                    <Typography color="text.grey" variant={"body2"}>
                      rgba(14,30,46,1)
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item md={4} sm={6}>
                <Box display="flex">
                  <Box
                    bgcolor="text.dark"
                    maxHeight="50px"
                    maxWidth="50px"
                    borderRadius={4}
                    py={3}
                    px={3}
                  ></Box>
                  <Box pl={2}>
                    <Typography color="text.dark" variant={"h6"}>
                      text.dark
                    </Typography>
                    <Typography color="text.grey" variant={"body2"}>
                      rgba(14,30,46,1)
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item md={4} sm={6}>
                <Box display="flex">
                  <Box
                    bgcolor="text.white"
                    maxHeight="50px"
                    maxWidth="50px"
                    borderRadius={4}
                    py={3}
                    px={3}
                  ></Box>
                  <Box pl={2}>
                    <Typography color="text.dark" variant={"h6"}>
                      text.white
                    </Typography>
                    <Typography color="text.grey" variant={"body2"}>
                      rgba(14,30,46,1)
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item md={4} sm={6}>
                <Box display="flex">
                  <Box
                    bgcolor="text.grey"
                    maxHeight="50px"
                    maxWidth="50px"
                    borderRadius={4}
                    py={3}
                    px={3}
                  ></Box>
                  <Box pl={2}>
                    <Typography color="text.dark" variant={"h6"}>
                      text.grey
                    </Typography>
                    <Typography color="text.grey" variant={"body2"}>
                      rgba(14,30,46,1)
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item md={4} sm={6}>
                <Box display="flex">
                  <Box
                    bgcolor="text.lightGrey"
                    maxHeight="50px"
                    maxWidth="50px"
                    borderRadius={4}
                    py={3}
                    px={3}
                  ></Box>
                  <Box pl={2}>
                    <Typography color="text.dark" variant={"h6"}>
                      text.lightgrey
                    </Typography>
                    <Typography color="text.grey" variant={"body2"}>
                      rgba(14,30,46,1)
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            {/* ----------------  Tipografía  ---------------- */}

            <Grid item md={10} sm={11}>
              <Box
                className="DS-HeaderTittle"
                px={2}
                py={2}
                mb={4}
                display={"block"}
                mt={12}
              >
                <div className="span">Typography</div>
              </Box>
            </Grid>

            <Box className="sub" display={"block"} mt={12}>
              <div className="span">
                Typography - LightGrey (color="text.lightGrey")
              </div>
            </Box>

            <Box bgcolor="white" p={3}>
              <Box display={"block"} mt={4}>
                <Typography color="text.lightGrey" variant={"h1"}>
                  H1 - The lazy dog
                </Typography>
              </Box>
              <Box display={"block"} mt={4}>
                <Typography color="text.lightGrey" variant={"h2"}>
                  H2 - The lazy dog
                </Typography>
              </Box>
              <Box display={"block"} mt={4}>
                <Typography color="text.lightGrey" variant={"h3"}>
                  H3 - The lazy dog
                </Typography>
              </Box>
              <Box display={"block"} mt={4}>
                <Typography color="text.lightGrey" variant={"h4"}>
                  H4 - The lazy dog
                </Typography>
              </Box>
              <Box display={"block"} mt={4}>
                <Typography color="text.lightGrey" variant={"h5"}>
                  H5 - The lazy dog
                </Typography>
              </Box>
              <Box display={"block"} mt={4}>
                <Typography color="text.lightGrey" variant={"h6"}>
                  H6 - The lazy dog
                </Typography>
              </Box>

              <Box display={"block"} mt={4}>
                <Typography color="text.lightGrey" variant={"body1"}>
                  body1 - The lazy dog{" "}
                </Typography>
              </Box>
              <Box display={"block"} mt={4}>
                <Typography color="text.lightGrey" variant={"body2"}>
                  body2 - The lazy dog{" "}
                </Typography>
              </Box>

              <Box display={"block"} mt={4}>
                <Typography color="text.lightGrey" variant={"subtitle1"}>
                  subtitle1 - The lazy dog{" "}
                </Typography>
              </Box>
              <Box display={"block"} mt={4}>
                <Typography color="text.lightGrey" variant={"subtitle2"}>
                  subtitle2 - The lazy dog{" "}
                </Typography>
              </Box>
              <Box display={"block"} mt={4}>
                <Typography
                  color="text.lightGrey"
                  variant={"overline"}
                  display="block"
                >
                  overline - The lazy dog{" "}
                </Typography>
              </Box>
            </Box>

            <Box className="sub" display={"block"} mt={12}>
              <div className="span">
                Typography - White (color="neutral.white")
              </div>
            </Box>

            <Box bgcolor="neutral.grey5" p={3}>
              <Box display={"block"} mt={4}>
                <Typography color="text.white" variant={"h1"}>
                  H1 - The lazy dog
                </Typography>
              </Box>
              <Box display={"block"} mt={4}>
                <Typography color="neutral.white" variant={"h2"}>
                  H2 - The lazy dog
                </Typography>
              </Box>
              <Box display={"block"} mt={4}>
                <Typography color="neutral.white" variant={"h3"}>
                  H3 - The lazy dog
                </Typography>
              </Box>
              <Box display={"block"} mt={4}>
                <Typography color="neutral.white" variant={"h4"}>
                  H4 - The lazy dog
                </Typography>
              </Box>
              <Box display={"block"} mt={4}>
                <Typography color="neutral.white" variant={"h5"}>
                  H5 - The lazy dog
                </Typography>
              </Box>
              <Box display={"block"} mt={4}>
                <Typography color="neutral.white" variant={"h6"}>
                  H6 - The lazy dog
                </Typography>
              </Box>

              <Box display={"block"} mt={4}>
                <Typography color="neutral.white" variant={"body1"}>
                  body1 - The lazy dog
                </Typography>
              </Box>
              <Box display={"block"} mt={4}>
                <Typography color="neutral.white" variant={"body2"}>
                  body2 - The lazy dog
                </Typography>
              </Box>

              <Box display={"block"} mt={4}>
                <Typography color="neutral.white" variant={"subtitle1"}>
                  subtitle1 - The lazy dog
                </Typography>
              </Box>
              <Box display={"block"} mt={4}>
                <Typography color="neutral.white" variant={"subtitle2"}>
                  subtitle2 - The lazy dog
                </Typography>
              </Box>
              <Box display={"block"} mt={4}>
                <Typography
                  color="neutral.white"
                  variant={"overline"}
                  display="block"
                >
                  overline - The lazy dog
                </Typography>
              </Box>
            </Box>

            <Box className="sub" display={"block"} mt={12}>
              <div className="span">Typography - Grey (color="text.grey")</div>
            </Box>

            <Box p={3}>
              <Box display={"block"} mt={4}>
                <Typography color="text.grey" variant={"h1"}>
                  H1 - The lazy dog
                </Typography>
              </Box>
              <Box display={"block"} mt={4}>
                <Typography color="text.grey" variant={"h2"}>
                  H2 - The lazy dog
                </Typography>
              </Box>
              <Box display={"block"} mt={4}>
                <Typography color="text.grey" variant={"h3"}>
                  H3 - The lazy dog
                </Typography>
              </Box>
              <Box display={"block"} mt={4}>
                <Typography color="text.grey" variant={"h4"}>
                  H4 - The lazy dog
                </Typography>
              </Box>
              <Box display={"block"} mt={4}>
                <Typography color="text.grey" variant={"h5"}>
                  H5 - The lazy dog
                </Typography>
              </Box>
              <Box display={"block"} mt={4}>
                <Typography color="text.grey" variant={"h6"}>
                  H6 - The lazy dog
                </Typography>
              </Box>

              <Box display={"block"} mt={4}>
                <Typography color="text.grey" variant={"body1"}>
                  {" "}
                  body1 - The lazy dog{" "}
                </Typography>
              </Box>
              <Box display={"block"} mt={4}>
                <Typography color="text.grey" variant={"body2"}>
                  {" "}
                  body2 - The lazy dog{" "}
                </Typography>
              </Box>

              <Box display={"block"} mt={4}>
                <Typography color="text.grey" variant={"subtitle1"}>
                  {" "}
                  subtitle1 - The lazy dog{" "}
                </Typography>
              </Box>
              <Box display={"block"} mt={4}>
                <Typography color="text.grey" variant={"subtitle2"}>
                  {" "}
                  subtitle2 - The lazy dog{" "}
                </Typography>
              </Box>
              <Box display={"block"} mt={4}>
                <Typography
                  color="text.grey"
                  variant={"overline"}
                  display="block"
                >
                  {" "}
                  overline - The lazy dog{" "}
                </Typography>
              </Box>
            </Box>

            {/* <Box display={"block"} mt={4}>
                        <Button variant="contained" size="medium" color="primary">
                            Button - The lazy dog
                        </Button>
                    </Box> */}

            {/* ----------------  Tipografía  ---------------- */}
            <Box className="sub" display={"block"} mt={12}>
              <div className="span">Typography - Dark (color="text.dark")</div>
            </Box>

            <Box bgcolor="" p={3}>
              <Box display={"block"} mt={4}>
                <Typography color="text.dark" variant={"h1"}>
                  H1 - The lazy dog
                </Typography>
              </Box>
              <Box display={"block"} mt={4}>
                <Typography color="text.dark" variant={"h2"}>
                  H2 - The lazy dog
                </Typography>
              </Box>
              <Box display={"block"} mt={4}>
                <Typography color="text.dark" variant={"h3"}>
                  H3 - The lazy dog
                </Typography>
              </Box>
              <Box display={"block"} mt={4}>
                <Typography color="text.dark" variant={"h4"}>
                  H4 - The lazy dog
                </Typography>
              </Box>
              <Box display={"block"} mt={4}>
                <Typography color="text.dark" variant={"h5"}>
                  H5 - The lazy dog
                </Typography>
              </Box>
              <Box display={"block"} mt={4}>
                <Typography color="text.dark" variant={"h6"}>
                  H6 - The lazy dog
                </Typography>
              </Box>
              <Box display={"block"} mt={4}>
                <Typography color="text.dark" variant={"body1"}>
                  body1 - The lazy dog{" "}
                </Typography>
              </Box>
              <Box display={"block"} mt={4}>
                <Typography color="text.dark" variant={"body2"}>
                  body2 - The lazy dog{" "}
                </Typography>
              </Box>

              <Box display={"block"} mt={4}>
                <Typography color="text.dark" variant={"subtitle1"}>
                  subtitle1 - The lazy dog{" "}
                </Typography>
              </Box>
              <Box display={"block"} mt={4}>
                <Typography color="text.dark" variant={"subtitle2"}>
                  subtitle2 - The lazy dog{" "}
                </Typography>
              </Box>
              <Box display={"block"} mt={4}>
                <Typography
                  color="text.dark"
                  variant={"overline"}
                  display="block"
                >
                  overline - The lazy dog{" "}
                </Typography>
              </Box>
            </Box>

            <Box className="sub" display={"block"} mt={12}>
              <div className="span">Typography - Red (color="text.red")</div>
            </Box>

            <Box p={3}>
              <Box display={"block"} mt={4}>
                <Typography color="text.red" variant={"h1"}>
                  H1 - The lazy dog
                </Typography>
              </Box>
              <Box display={"block"} mt={4}>
                <Typography color="text.red" variant={"h2"}>
                  H2 - The lazy dog
                </Typography>
              </Box>
              <Box display={"block"} mt={4}>
                <Typography color="text.red" variant={"h3"}>
                  H3 - The lazy dog
                </Typography>
              </Box>
              <Box display={"block"} mt={4}>
                <Typography color="text.red" variant={"h4"}>
                  H4 - The lazy dog
                </Typography>
              </Box>
              <Box display={"block"} mt={4}>
                <Typography color="text.red" variant={"h5"}>
                  H5 - The lazy dog
                </Typography>
              </Box>
              <Box display={"block"} mt={4}>
                <Typography color="text.red" variant={"h6"}>
                  H6 - The lazy dog
                </Typography>
              </Box>

              <Box display={"block"} mt={4}>
                <Typography color="text.red" variant={"body1"}>
                  {" "}
                  body1 - The lazy dog{" "}
                </Typography>
              </Box>
              <Box display={"block"} mt={4}>
                <Typography color="text.red" variant={"body2"}>
                  {" "}
                  body2 - The lazy dog{" "}
                </Typography>
              </Box>

              <Box display={"block"} mt={4}>
                <Typography color="text.red" variant={"subtitle1"}>
                  {" "}
                  subtitle1 - The lazy dog{" "}
                </Typography>
              </Box>
              <Box display={"block"} mt={4}>
                <Typography color="text.red" variant={"subtitle2"}>
                  {" "}
                  subtitle2 - The lazy dog{" "}
                </Typography>
              </Box>
              <Box display={"block"} mt={4}>
                <Typography
                  color="text.red"
                  variant={"overline"}
                  display="block"
                >
                  {" "}
                  overline - The lazy dog{" "}
                </Typography>
              </Box>
            </Box>

            <Grid item md={10} sm={11}>
              <Box
                className="DS-HeaderTittle"
                px={2}
                py={2}
                mb={4}
                display={"block"}
                mt={12}
              >
                <div className="span">TextFields </div>
              </Box>
            </Grid>

            {/* ----------------  TextField  ---------------- */}
            <Box className="sub" display={"block"} mt={12}>
              <div className="span">TextField - outlined</div>
            </Box>

            <Grid container spacing={3}>
              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <TextField
                    label="Input default*"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                </Box>
              </Grid>

              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <TextField
                    label="Input Error*"
                    variant="outlined"
                    fullWidth
                    error={true}
                    margin="normal"
                  />
                </Box>
              </Grid>

              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <TextField
                    label="Input disabled*"
                    variant="outlined"
                    fullWidth
                    disabled={true}
                    margin="normal"
                  />
                </Box>
              </Grid>
            </Grid>

            {/* ----------------  selector  ---------------- */}
            <Box className="sub" display={"block"} mt={12}>
              <div className="span">TextField - selector</div>
            </Box>

            <Grid container spacing={3}>
              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <TextField
                    id="standard-select-currency"
                    select
                    variant="outlined"
                    fullWidth
                    label="Select"
                    helperText="Please select your currency"
                  >
                    <MenuItem key="" value="">
                      opción1
                    </MenuItem>
                    <MenuItem key="" value="">
                      opción2
                    </MenuItem>
                    <MenuItem key="" value="">
                      opción3
                    </MenuItem>
                    <MenuItem key="" value="">
                      opción4
                    </MenuItem>
                  </TextField>
                </Box>
              </Grid>

              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <TextField
                    id="standard-select-currency"
                    select
                    variant="outlined"
                    fullWidth
                    label="Select"
                    error={true}
                    helperText="Please select your currency"
                  >
                    <MenuItem key="" value="">
                      opción1
                    </MenuItem>
                    <MenuItem key="" value="">
                      opción2
                    </MenuItem>
                    <MenuItem key="" value="">
                      opción3
                    </MenuItem>
                    <MenuItem key="" value="">
                      opción4
                    </MenuItem>
                  </TextField>
                </Box>
              </Grid>
            </Grid>

            {/* ----------------  Number  ---------------- */}
            <Box className="sub" display={"block"} mt={12}>
              <div className="span">TextField - Number</div>
            </Box>

            <Grid container spacing={3}>
              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <TextField
                    id="standard-number"
                    label="Number"
                    type="number"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Box>
              </Grid>

              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <TextField
                    id="standard-number"
                    label="Number"
                    type="number"
                    variant="outlined"
                    error={true}
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Box>
              </Grid>
            </Grid>

            <Box display={"block"} mt={4}></Box>

            <Box display={"block"} mt={4}></Box>

            {/* ----------------  Buttons  ---------------- */}

            <Grid item md={10} sm={11}>
              <Box
                className="DS-HeaderTittle"
                px={2}
                py={2}
                mb={4}
                display={"block"}
                mt={12}
              >
                <div className="span">Buttons </div>
              </Box>
            </Grid>

            <Box className="sub" display={"block"} mt={12}>
              <div className="span">Primary button </div>
            </Box>

            <Grid container spacing={3}>
              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button
                    size="small"
                    startIcon={<SaveIcon />}
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
                    size="medium"
                    startIcon={<SaveIcon />}
                    variant="contained"
                    color="primary"
                  >
                    Nuevo Botón M
                  </Button>
                </Box>
              </Grid>

              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button size="medium" variant="contained" color="primary">
                    Nuevo Botón M
                  </Button>
                </Box>
              </Grid>

              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button
                    size="medium"
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
                    size="large"
                    startIcon={<SaveIcon />}
                    variant="contained"
                    color="primary"
                  >
                    Nuevo Botón L
                  </Button>
                </Box>
              </Grid>

              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button size="large" variant="contained" color="primary">
                    Nuevo Botón L
                  </Button>
                </Box>
              </Grid>

              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button
                    size="large"
                    disabled
                    variant="contained"
                    color="primary"
                  >
                    Nuevo Botón L
                  </Button>
                </Box>
              </Grid>
            </Grid>

            <Box className="sub" display={"block"} mt={12}>
              <div className="span">Buttons Secondary </div>
            </Box>

            <Grid container spacing={3}>
              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button
                    size="small"
                    startIcon={<SaveIcon />}
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
                    size="medium"
                    startIcon={<SaveIcon />}
                    variant="contained"
                    color="secondary"
                  >
                    Nuevo botón M
                  </Button>
                </Box>
              </Grid>

              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button size="medium" variant="contained" color="secondary">
                    Nuevo botón M
                  </Button>
                </Box>
              </Grid>

              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button
                    size="medium"
                    disabled
                    variant="contained"
                    color="secondary"
                  >
                    Nuevo botón M
                  </Button>
                </Box>
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button
                    size="large"
                    startIcon={<SaveIcon />}
                    variant="contained"
                    color="secondary"
                  >
                    Nuevo Botón L
                  </Button>
                </Box>
              </Grid>

              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button size="large" variant="contained" color="secondary">
                    Nuevo Botón L
                  </Button>
                </Box>
              </Grid>

              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button
                    size="large"
                    disabled
                    variant="contained"
                    color="secondary"
                  >
                    Nuevo Botón L
                  </Button>
                </Box>
              </Grid>
            </Grid>

            <Box className="sub" display={"block"} mt={12}>
              <div className="span">Error Button</div>
            </Box>

            <Grid container spacing={3}>
              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button
                    size="small"
                    className="dangerButton"
                    startIcon={<SaveIcon />}
                  >
                    Nuevo Botón S
                  </Button>
                </Box>
              </Grid>

              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button size="small" className="dangerButton">
                    Nuevo Botón S
                  </Button>
                </Box>
              </Grid>

              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button size="small" className="dangerButton" disabled>
                    Nuevo Botón S
                  </Button>
                </Box>
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button
                    size="medium"
                    className="dangerButton"
                    startIcon={<SaveIcon />}
                  >
                    Nuevo Botón M
                  </Button>
                </Box>
              </Grid>

              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button size="medium" className="dangerButton">
                    Nuevo Botón M
                  </Button>
                </Box>
              </Grid>

              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button size="medium" disabled className="dangerButton">
                    Nuevo Botón M
                  </Button>
                </Box>
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button
                    size="large"
                    className="dangerButton"
                    startIcon={<SaveIcon />}
                  >
                    Nuevo Botón L
                  </Button>
                </Box>
              </Grid>

              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button size="large" className="dangerButton">
                    Nuevo Botón L
                  </Button>
                </Box>
              </Grid>

              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button size="large" disabled className="dangerButton">
                    Nuevo Botón L
                  </Button>
                </Box>
              </Grid>
            </Grid>

            <Box className="sub" display={"block"} mt={12}>
              <div className="span">Text Buttons </div>
            </Box>
            <Grid container spacing={3}>
              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button size="small" startIcon={<SaveIcon />} color="primary">
                    Nuevo Botón S
                  </Button>
                </Box>
              </Grid>

              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button size="small" color="primary">
                    Nuevo Botón S
                  </Button>
                </Box>
              </Grid>

              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button size="small" disabled color="primary">
                    Nuevo Botón S
                  </Button>
                </Box>
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button
                    size="medium"
                    startIcon={<SaveIcon />}
                    color="primary"
                  >
                    Nuevo Botón M
                  </Button>
                </Box>
              </Grid>

              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button size="medium" color="primary">
                    Nuevo Botón M
                  </Button>
                </Box>
              </Grid>

              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button size="medium" disabled color="primary">
                    Nuevo Botón M
                  </Button>
                </Box>
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button size="large" startIcon={<SaveIcon />} color="primary">
                    Nuevo Botón L
                  </Button>
                </Box>
              </Grid>

              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button size="large" color="primary">
                    Nuevo Botón L
                  </Button>
                </Box>
              </Grid>

              <Grid item md={4} sm={12}>
                <Box mt={2}>
                  <Button size="large" disabled color="primary">
                    Nuevo Botón L
                  </Button>
                </Box>
              </Grid>
            </Grid>

            {/* ----------------  Square Button  ---------------- */}

            <Grid item md={10} sm={11}>
              <Box
                className="DS-HeaderTittle"
                px={2}
                py={2}
                mb={4}
                display={"block"}
                mt={12}
              >
                <div className="span">Square Button </div>
              </Box>
            </Grid>

            <Box className="sub" display={"block"} mt={12}>
              <div className="span">Primary </div>
            </Box>

            <Grid container spacing={3}>
              <Grid item md={6} sm={12}>
                <Box mt={2}>
                  <IconButton
                    className="squareButton"
                    color="primary"
                    component="span"
                    size="small"
                  >
                    <img src={iconpluss} alt="" />
                  </IconButton>
                </Box>
              </Grid>

              <Grid item md={6} sm={12}>
                <Box mt={2}>
                  <IconButton
                    className="squareButton"
                    disabled
                    color="primary"
                    component="span"
                    size="small"
                  >
                    <img src={iconpluss} alt="" />
                  </IconButton>
                </Box>
              </Grid>

              <Grid item md={6} sm={12}>
                <Box mt={2}>
                  <IconButton
                    className="squareButton"
                    color="primary"
                    component="span"
                  >
                    <img src={iconpluss} alt="" />
                  </IconButton>
                </Box>
              </Grid>

              <Grid item md={6} sm={12}>
                <Box mt={2}>
                  <IconButton
                    className="squareButton"
                    disabled
                    color="primary"
                    component="span"
                  >
                    <img src={iconpluss} alt="" />
                  </IconButton>
                </Box>
              </Grid>

              <Grid item md={6} sm={12}>
                <Box mt={2}>
                  <IconButton
                    className="squareButton large"
                    color="primary"
                    component="span"
                  >
                    <img src={iconpluss} alt="" />
                  </IconButton>
                </Box>
              </Grid>

              <Grid item md={6} sm={12}>
                <Box mt={2}>
                  <IconButton
                    className="squareButton large"
                    disabled
                    color="primary"
                    component="span"
                  >
                    <img src={iconpluss} alt="" />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>

            <Box className="sub" display={"block"} mt={12}>
              <div className="span">Secondary </div>
            </Box>

            <Grid container spacing={3}>
              <Grid item md={6} sm={12}>
                <Box mt={2}>
                  <IconButton
                    className="squareButton small"
                    color="secondary"
                    component="span"
                  >
                    <img src={iconpluss} alt="" />
                  </IconButton>
                </Box>
              </Grid>

              <Grid item md={6} sm={12}>
                <Box mt={2}>
                  <IconButton
                    className="squareButton small"
                    disabled
                    color="secondary"
                    component="span"
                  >
                    <img src={iconpluss} alt="" />
                  </IconButton>
                </Box>
              </Grid>

              <Grid item md={6} sm={12}>
                <Box mt={2}>
                  <IconButton
                    className="squareButton"
                    color="secondary"
                    component="span"
                  >
                    <img src={iconpluss} alt="" />
                  </IconButton>
                </Box>
              </Grid>

              <Grid item md={6} sm={12}>
                <Box mt={2}>
                  <IconButton
                    className="squareButton"
                    disabled
                    color="secondary"
                    component="span"
                  >
                    <img src={iconpluss} alt="" />
                  </IconButton>
                </Box>
              </Grid>

              <Grid item md={6} sm={12}>
                <Box mt={2}>
                  <IconButton
                    className="squareButton large"
                    color="secondary"
                    component="span"
                  >
                    <img src={iconpluss} alt="" />
                  </IconButton>
                </Box>
              </Grid>

              <Grid item md={6} sm={12}>
                <Box mt={2}>
                  <IconButton
                    className="squareButton large"
                    disabled
                    color="secondary"
                    component="span"
                  >
                    <img src={iconpluss} alt="" />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>

            <Grid item md={10} sm={11}>
              <Box
                className="DS-HeaderTittle"
                px={2}
                py={2}
                mb={4}
                display={"block"}
                mt={12}
              >
                <div className="span">Controls </div>
              </Box>
            </Grid>

            <Box className="sub" display={"block"} mt={12}>
              <div className="span">Switch </div>
            </Box>

            <Box className="sub" display={"block"} mt={12}>
              <div className="span">Checkbox </div>
            </Box>

            <Grid container spacing={3}>
              <Grid item md={3} sm={12}>
                <Box mt={2}>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={true}
                          onChange={handleChange}
                          name="checkedA"
                          color="primary"
                        />
                      }
                      label="On"
                    />
                  </FormGroup>
                </Box>
              </Grid>
              <Grid item md={3} sm={12}>
                <Box mt={2}>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={false}
                          onChange={handleChange}
                          name="checkedA"
                          color="primary"
                        />
                      }
                      label="Off"
                    />
                  </FormGroup>
                </Box>
              </Grid>
              <Grid item md={3} sm={12}>
                <Box mt={2}>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={true}
                          onChange={handleChange}
                          name="checkedA"
                          color="primary"
                        />
                      }
                      label="on Disabled"
                      disabled
                    />
                  </FormGroup>
                </Box>
              </Grid>
              <Grid item md={3} sm={12}>
                <Box mt={2}>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={false}
                          onChange={handleChange}
                          name="checkedA"
                          color="primary"
                        />
                      }
                      label="Off Disabled"
                      disabled
                    />
                  </FormGroup>
                </Box>
              </Grid>
            </Grid>

            <Box className="sub" display={"block"} mt={12}>
              <div className="span">Radio </div>
            </Box>

            <Grid container spacing={3}>
              <Grid item md={3} sm={12}>
                <Box mt={2}>
                  <FormControl component="fieldset">
                    <RadioGroup
                      aria-label="gender"
                      name="gender1"
                      value={value}
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio color="primary" />}
                        label="On"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio color="primary" />}
                        label="Off"
                      />
                      <FormControlLabel
                        value="other"
                        disabled
                        control={<Radio color="primary" checked={true} />}
                        label="OnDisabled"
                      />
                      <FormControlLabel
                        value="disabled3"
                        disabled
                        control={<Radio color="primary" />}
                        label="OffDisabled"
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>
              </Grid>
            </Grid>

            <Grid item md={10} sm={11}>
              <Box
                className="DS-HeaderTittle"
                px={2}
                py={2}
                mb={4}
                display={"block"}
                mt={12}
              >
                <div className="span">Data Display </div>
              </Box>
            </Grid>

            <Box className="sub" display={"block"} mt={12}>
              <div className="span">Tooltip </div>
            </Box>

            <Grid container spacing={3}>
              <Grid item md={3} sm={12}>
                <Box mt={2}>
                  <Tooltip
                    title="When activated, tooltips display a text label identifying an element, such as a description of its function."
                    placement="top"
                    arrow
                  >
                    <Button variant="contained" size="medium" color="primary">
                      Tooltip
                    </Button>
                  </Tooltip>
                </Box>
              </Grid>
            </Grid>

            <Box className="sub" display={"block"} mt={12}>
              <div className="span">Snackbar </div>
            </Box>

          </Grid>
        </Grid>

        <Box mt={12}></Box>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default Atoms;
