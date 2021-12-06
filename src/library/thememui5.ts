import { MoveDown } from "@mui/icons-material";
import { createTheme } from "@mui/material/styles";


const Palette = {
    primary: {
        dark2: "#0E1E2E",
        dark: "#112B45",
        main: "#023365",
        light: "#1E65AE",
        light2: "#4498EE",
        light3: "#EEF6FF",
        components: {
          light: {
            default: "#4499EE",
            hover: "#3879CD",
            focus: "#3F8BE0",
            disable: "#BFDFFA",
          },
        },
    },
    secondary: {
      dark2: "#3B9D86",
      dark: "#0DC298",
      main: "#00E6B2",
      light: "#00FCC1",
      light2: "#B7FFEE",
      light3: "#E0FFF8"
    },
    error: {
      dark2: "#AD0C2A",
      dark: "#D62C4B",
      main: "#E24763",
      light: "#E26C81",
      light2: "#F6AEBB",
      light3: "#FFEAEE"
    },
    alternate: {
      dark2: "#8F4F8B",
      dark: "#BD62B4",
      main: "#DD85C3",
      light: "#E6A6D3",
      light2: "#FDD9F2",
      light3: "#FEECF8"
    },
    warning: {
      dark2: "#CF711A",
      dark: "#DFA720",
      main: "#FBC748",
      light: "#FFD879",
      light2: "#FEE19B",
      light3: "#FFF1D0"
    },
    background: {
      paper: "#FAFCFD",
      default: "#FFFFFF",
    },
    neutral: {
      800: "#293036",
      700: "#46525C",
      600: "#677684",
      500: "#CBD5E0",
      400: "#E2E8F0",
      300: "#F0F4F8",
      200: "#F7FAFC",
      100: "#FBFCFE",
      50: "#FFFFFF",
      components: {
        shadow: "#0E1E2E",
        disabled: "#B4B9BE",
      }
    },
    text: {
      primary: "#023365",
      secondary: "#0DC298",
      dark: "#293036",
      disabled: "#B4B9BE",
      red: "#E24763",
      white: "#FFFFFF",
      lightGrey: "#B4B9BE",
      grey: "#6D7781"
    },
    gradients: {
      gradientA: "linear-gradient(180deg, #00E6B2 0%, #023365 100%)",
      gradientB: "linear-gradient(180deg, #0093A2 0%, #00E6B2 100%)",
      gradientC: "linear-gradient(135deg, #023365 0%, #1E65AE 100%)",
      gradientD: "linear-gradient(180deg, #023365 100% , #00E6B2 0%)",
      gradientE: "linear-gradient(180deg, #FFFFFF 0%, #F7FAFC 100%)"
    }
};

const ThemeFonts = {
  screenxl: {
    h1: 40,
    h2: 32,
    h3: 28,
    h4: 24,
    h5: 20,
    h6: 16,
    subtitle1: 20,
    subtitle2: 16,
    body1: 18,
    body2: 16,
    caption: 15,
    overline: 13,
    numericText: 16,
    button: 16,
    buttonsm: 14,
    buttonlg: 20,
    inputLabel: 12,
    inputText: 16,
    helperText: 12,
    tooltip: 14,
    avatarLetter: 20
  },
  screenlg: {
    h1: 38,
    h2: 30,
    h3: 26,
    h4: 22,
    h5: 18,
    h6: 16,
    subtitle1: 20,
    subtitle2: 16,
    body1: 18,
    body2: 16,
    caption: 14,
    overline: 13,
    numericText: 16,
    button: 16,
    buttonsm: 14,
    buttonlg: 20,
    inputLabel: 12,
    inputText: 16,
    helperText: 12,
    tooltip: 13,
    avatarLetter: 18
  },
  screenmd: {
    h1: 28,
    h2: 24,
    h3: 22,
    h4: 20,
    h5: 18,
    h6: 16,
    subtitle1: 18,
    subtitle2: 15,
    body1: 17,
    body2: 16,
    caption: 14,
    overline: 13,
    numericText: 15,
    button: 15,
    buttonsm: 13,
    buttonlg: 18,
    inputLabel: 11,
    inputText: 14,
    helperText: 11,
    tooltip: 12,
    avatarLetter: 16
  },
  screensm: {
    h1: 23,
    h2: 21,
    h3: 20,
    h4: 19,
    h5: 18,
    h6: 16,
    subtitle1: 17,
    subtitle2: 14,
    body1: 16,
    body2: 14,
    caption: 12,
    overline: 12,
    numericText: 14,
    button: 14,
    buttonsm: 13,
    buttonlg: 16,
    inputLabel: 12,
    inputText: 14,
    helperText: 11,
    tooltip: 12,
    avatarLetter: 16
  }
};

const breakpoints = {
  values: {
    xs: 0,
    sm: 360,
    md: 960,
    lg: 1280,
    xl: 1600
  }
};


const theme = createTheme({
  spacing: 8,
  palette: {
    primary: {
      //@ts-ignore
      dark2: Palette.primary.dark2,
      dark: Palette.primary.dark,
      main: Palette.primary.main,
      light: Palette.primary.light,
      light2: Palette.primary.light2,
      light3: Palette.primary.light3,
      components: {
        light: {
          default: Palette.primary.components.light.default,
          hover: Palette.primary.components.light.hover,
           //@ts-ignore
          focus: Palette.primary.components.light.focus,
          disable: Palette.primary.components.light.disable,
        },
      },
    },
    secondary: {
      //@ts-ignore
      dark2: Palette.secondary.dark2,
      dark: Palette.secondary.dark,
      main: Palette.secondary.main,
      light: Palette.secondary.light,
      light2: Palette.secondary.light2,
      light3: Palette.secondary.light3
    },
    error: {
      //@ts-ignore
      dark2: Palette.error.dark2,
      dark: Palette.error.dark,
      main: Palette.error.main,
      light: Palette.error.light,
      light2: Palette.error.light2,
      light3: Palette.error.light3
    },
    alternate: {
      //@ts-ignore
      dark2: Palette.alternate.dark2,
      dark: Palette.alternate.dark,
      main: Palette.alternate.main,
      light: Palette.alternate.light,
      light2: Palette.alternate.light2,
      light3: Palette.alternate.light3
    },
    warning: {
      //@ts-ignore
      dark2: Palette.warning.dark2,
      main: Palette.warning.main,
      dark: Palette.warning.dark,
      light: Palette.warning.light,
      light2: Palette.warning.light2,
      light3: Palette.warning.light3
    },
    background: {
      paper: Palette.background.paper,
      default: Palette.background.default,
    },
    neutral: {
      //@ts-ignore
      grey8: Palette.neutral[800],
      grey7: Palette.neutral[700],
      grey6: Palette.neutral[600],
      grey5: Palette.neutral[500],
      grey4: Palette.neutral[400],
      grey3: Palette.neutral[300],
      grey2: Palette.neutral[200],
      grey1: Palette.neutral[100],
      white: Palette.neutral[50],
      components: {
        shadow: Palette.neutral.components.shadow,
        disabled: Palette.neutral.components.disabled,
      }
    },
    text: {
      primary: Palette.text.primary,
      secondary: Palette.text.secondary,
      //@ts-ignore
      dark: Palette.text.dark,
      disabled: Palette.text.disabled,
      //@ts-ignore
      red: Palette.text.red,
      white: Palette.text.white,
      lightGrey: Palette.text.lightGrey,
      grey: Palette.text.grey
    },
    gradients: {
      gradientA: Palette.gradients.gradientA,
      gradientB: Palette.gradients.gradientB,
      gradientC: Palette.gradients.gradientC,
      gradientD: Palette.gradients.gradientD,
      gradientE: Palette.gradients.gradientE
    },
  },
  breakpoints,
  typography: {
    fontFamily: "IBM Plex Sans",
    h1: {
      fontSize: ThemeFonts.screenxl.h1 + `px`,
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "120%",
      letterSpacing: "-0.015em",
      [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
        fontSize: ThemeFonts.screenlg.h1 + `px`
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.h1 + `px`
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.h1 + `px`
      }
    },
    h2: {
      fontSize: ThemeFonts.screenxl.h2 + `px`,
      fontWeight: 500,
      lineHeight: "120%",
      fontStyle: "normal",
      letterSpacing: "-0.015em",
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenlg.h2 + `px`,
        fontWeight: "500"
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.h2 + `px`,
        fontWeight: "500"
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.h2 + `px`,
        fontWeight: "500"
      }
    },
    h3: {
      fontSize: ThemeFonts.screenxl.h3 + `px`,
      fontWeight: 600,
      lineHeight: "120%",
      fontStyle: "normal",
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenlg.h3 + `px`,
        fontWeight: "500"
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.h3 + `px`,
        fontWeight: "500"
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.h3 + `px`,
        fontWeight: "500"
      }
    },
    h4: {
      fontSize: ThemeFonts.screenxl.h4 + `px`,
      fontWeight: 500,
      lineHeight: "120%",
      fontStyle: "normal",
      letterSpacing: "0.0025em",
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenlg.h4 + `px`,
        fontWeight: "500"
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.h4 + `px`,
        fontWeight: "500"
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.h4 + `px`,
        fontWeight: "500"
      }
    },
    h5: {
      fontSize: ThemeFonts.screenxl.h5 + `px`,
      fontWeight: 500,
      lineHeight: "140%",
      fontStyle: "normal",
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenlg.h5 + `px`,
        fontWeight: "500"
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.h5 + `px`,
        fontWeight: "500"
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.h5 + `px`,
        fontWeight: "500"
      }
    },
    h6: {
      fontSize: ThemeFonts.screenxl.h6 + `px`,
      fontWeight: 400,
      lineHeight: "120%",
      fontStyle: "normal",
      letterSpacing: "0.0015em",
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenlg.h6 + `px`,
        fontWeight: "500"
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.h6 + `px`,
        fontWeight: "500"
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.h6 + `px`,
        fontWeight: "500"
      }
    },
    subtitle1: {
      fontSize: ThemeFonts.screenxl.subtitle1 + `px`,
      fontWeight: 300,
      lineHeight: "120%",
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenlg.subtitle1 + `px`
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.subtitle1 + `px`
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.subtitle1 + `px`
      }
    },
    subtitle2: {
      fontSize: ThemeFonts.screenxl.subtitle2 + `px`,
      fontWeight: 500,
      lineHeight: "150%",
      letterSpacing:"0.0025em",
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenlg.subtitle2 + `px`
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.subtitle2 + `px`
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.subtitle2 + `px`
      }
    },
    body1: {
      fontSize: ThemeFonts.screenxl.body1 + `px`,
      fontWeight: "normal",
      lineHeight: "150%",
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenlg.body1 + `px`
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.body1 + `px`
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.body1 + `px`
      }
    },
    body2: {
      fontSize: ThemeFonts.screenxl.body2 + `px`,
      fontWeight: "normal",
      lineHeight: "150%",
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenlg.body2 + `px`
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.body2 + `px`
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.body2 + `px`
      }
    },
    caption: {
      lineHeight: "144%",
      fontSize: ThemeFonts.screenmd.caption + `px`,
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenlg.caption + `px`
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.caption + `px`
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.caption + `px`
      }
    },
    overline: {
      lineHeight: "120%",
      fontWeight: "normal",
      textTransform: "inherit",
      letterSpacing: "0.01em",
      fontSize: ThemeFonts.screenxl.overline + `px`,
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenlg.overline + `px`
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.overline + `px`
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.overline + `px`
      }
    },
    button: {
      //Numeric Text Style
      fontFamily: "IBM Plex Mono",
      lineHeight: "120%",
      fontWeight: "normal",
      textTransform: "none",
      fontSize: ThemeFonts.screenxl.overline + `px`,
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenlg.overline + `px`
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.overline + `px`
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.overline + `px`
      }
    }
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
            wordWrap: "break-word"
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true
      },
      styleOverrides: {
        //@ts-ignore
        root: {
          padding: "12px 30px",
          height: "44px",
          borderRadius: "16px",
          fontWeight: "400",
          letterSpacing: "0.0025em",
          lineHeight: "140%",
          fontFamily: "IBM Plex Sans",
          fontSize: ThemeFonts.screenxl.button + `px`,
          [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
            fontSize: ThemeFonts.screenlg.button + `px`
          },
          [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
            fontSize: ThemeFonts.screenmd.button + `px`
          },
          [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
            fontSize: ThemeFonts.screensm.button + `px`
          }
        },
        sizeLarge: {
          height: "52px",
          padding: "12px 30px",
          fontSize: ThemeFonts.screenxl.buttonlg + `px`,
          [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
            fontSize: ThemeFonts.screenlg.buttonlg + `px`
          },
          [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
            fontSize: ThemeFonts.screenmd.buttonlg + `px`
          },
          [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
            fontSize: ThemeFonts.screensm.buttonlg + `px`
          }
        },
        sizeSmall: {
          height: "36px",
          padding: "8px 30px",
          fontSize: ThemeFonts.screenxl.buttonsm + `px`,
          [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
            fontSize: ThemeFonts.screenlg.buttonsm + `px`
          },
          [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
            fontSize: ThemeFonts.screenmd.buttonsm + `px`
          },
          [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
            fontSize: ThemeFonts.screensm.buttonsm + `px`
          }
        },
        //@ts-ignore
        containedPrimary: {
          border: `1px solid ` + Palette.primary.components.light.default,
          backgroundColor: Palette.primary.components.light.default,
          "&:hover": {
            color: Palette.neutral[50],
            backgroundColor: Palette.primary.components.light.hover,
            border: `1px solid ` + Palette.primary.components.light.hover
          },
          "&:focus": {
            backgroundColor: Palette.primary.components.light.focus,
            border: `1px solid ` + Palette.primary.components.light.focus,
            color: Palette.neutral[50]
          },
          "&:active": {
            backgroundColor: Palette.primary.components.light.default,
            border: `1px solid ` + Palette.primary.components.light.default,
            color: Palette.neutral[50]
          },
          "&:disabled": {
            backgroundColor: Palette.primary.components.light.disable,
            border: `1px solid ` + Palette.primary.components.light.disable,
            color: Palette.neutral[50],
          }
        },
        //@ts-ignore
        containedSecondary: {
          backgroundColor: Palette.neutral[50],
          border: `1px solid ` + Palette.neutral[50],
          color: Palette.text.grey,
          "&:hover": {
            backgroundColor: Palette.neutral[100],
            border: `1px solid ` + Palette.neutral[100],
            color: Palette.text.grey
          },
          "&:focus": {
            backgroundColor: Palette.neutral[100],
            border: `1px solid ` + Palette.neutral[100] + "!important",
            color: Palette.text.primary
          },
          "&:active": {
            border: `1px solid ` + Palette.primary.light3
          },
          "&:disabled": {
            backgroundColor: Palette.neutral[100],
            border: `1px solid ` + Palette.neutral[100] + "!important",
            color: Palette.neutral[500]
          }
        }
      }
    },
  },
});





export default theme;