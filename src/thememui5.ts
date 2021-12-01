import { createTheme } from "@mui/material/styles";

const Palette = {
  common: {
    white: "rgba(255,255,255,1)",
    headTable: "rgba(103,119,132,1)",
    disabled: "rgba(238,238,238,1)",
    grey: "rgba(109,119,129,1)"
  },
  gradients: {
    gradientA: "linear-gradient(180deg, #00E6B2 0%, #023365 100%)",
    gradientB: "linear-gradient(180deg, #0093A2 0%, #00E6B2 100%)",
    gradientC: "linear-gradient(135deg, #023365 0%, #1E65AE 100%)",
    gradientD: "linear-gradient(180deg, #023365 100% , #00E6B2 0%)",
    gradientE: "linear-gradient(180deg, #FFFFFF 0%, #F7FAFC 100%)"
  },
  primary: {
    dark2: "rgba(9, 10, 16, 1)",
    dark: "rgba(19, 22, 35, 1)",
    main: "rgba(25, 29, 44, 1)",
    light: "rgba(39, 43, 61, 1)",
    light2: "rgba(89, 95, 118, 1)",
    light3: "rgba(244, 246, 250, 1)"
  },
  secondary: {
    dark2: "rgba(64, 8, 3, 1)",
    dark: "rgba(84, 14, 8, 1)",
    main: "rgba(99, 20, 14, 1)",
    light: "rgba(161, 32, 23, 1)",
    light2: "rgba(237, 137, 130, 1)",
    light3: "rgba(253, 242, 242, 1)"
  },
  info: {
    dark2: "rgba(53, 142, 60, 1)",
    dark: "rgba(78, 167, 85, 1)",
    main: "rgba(102, 191, 109, 1)",
    light: "rgba(118, 207, 125, 1)",
    light2: "rgba(155, 244, 162, 1)",
    light3: "rgba(230, 252, 234, 1)"
  },
  error: {
    dark2: "rgba(173, 12, 42, 1)",
    dark: "rgba(214, 44, 75, 1)",
    main: "rgba(226, 71, 99, 1)",
    light: "rgba(226, 108, 129, 1)",
    light2: "rgba(255, 207, 204, 1)",
    light3: "rgba(255, 234, 238, 1)"
  },
  warning: {
    dark2: "rgba(128, 94, 33, 1)",
    dark: "rgba(168, 134, 73, 1)",
    main: "rgba(188, 154, 93, 1)",
    light: "rgba(218, 184, 123, 1)",
    light2: "rgba(248, 214, 153, 1)",
    light3: "rgba(253, 249, 242, 1)"
  },
  alternate: {
    dark2: "rgba(11, 64, 80, 1)",
    dark: "rgba(19, 107, 134, 1)",
    main: "rgba(29, 174, 220, 1)",
    light: "rgba(77, 194, 229, 1)",
    light2: "rgba(166, 224, 242, 1)",
    light3: "rgba(242, 250, 253, 1)"
  },
  success: {
    //secondary
    dark: "rgba(13, 194, 152, 1)",
    main: "rgba(0, 230, 178, 1)",
    light: "rgba(0, 252, 193, 1)"
  },
  background: {
    paper: "rgba(255,255,255,1)",
    default: "rgba(240, 244, 251, 1)"
  },
  text: {
    primary: "rgba(48, 54, 77, 1)",
    secondary: "rgba(144, 150, 171, 1)",
    disabled: "rgba(180, 185, 198, 1)",
    red: "rgba(161, 32, 23, 1)",
    dark: "rgba(48, 54, 77, 1)",
    white: "rgba(255, 255, 255, 1)",
    grey: "rgba(98, 107, 124, 1)",
    lightGrey: "rgba(180, 185, 198, 1)"
  },
  neutral: {
    50: "rgba(255, 255, 255, 1)",
    100: "rgba(244, 246, 250, 1)",
    200: "rgba(247, 248, 251, 1)",
    300: "rgba(217, 221, 235, 1)",
    400: "rgba(199, 204, 217, 1)",
    500: "rgba(184, 191, 204, 1)",
    600: "rgba(142, 153, 172, 1)",
    700: "rgba(118, 129, 148, 1)",
    800: "rgba(98, 107, 124, 1)"
  }
};

const ThemeFonts = {
  web: {
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
  webxs: {
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
  mobile: {
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
  mobilexs: {
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

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1600
    }
  },
  spacing: 8,
  palette: {
    common: {
      white: Palette.common.white,
      //@ts-ignore
      headTable: Palette.common.headTable,
      disabled: Palette.common.disabled,
      grey: Palette.common.grey
    },
    gradients: {
      gradientA: Palette.gradients.gradientA,
      gradientB: Palette.gradients.gradientB,
      gradientC: Palette.gradients.gradientC,
      gradientD: Palette.gradients.gradientD,
      gradientE: Palette.gradients.gradientE
    },
    primary: {
      //@ts-ignore
      dark2: Palette.primary.dark2,
      dark: Palette.primary.dark,
      main: Palette.primary.main,
      light: Palette.primary.light,
      light2: Palette.primary.light2,
      light3: Palette.primary.light3
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
    info: {
      //@ts-ignore
      dark2: Palette.info.dark2,
      dark: Palette.info.dark,
      main: Palette.info.main,
      light: Palette.info.light,
      light2: Palette.info.light2,
      light3: Palette.info.light3
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
    warning: {
      //@ts-ignore
      dark2: Palette.warning.dark2,
      main: Palette.warning.main,
      dark: Palette.warning.dark,
      light: Palette.warning.light,
      light2: Palette.warning.light2,
      light3: Palette.warning.light3
    },
    alternate: {
      dark2: Palette.alternate.dark2,
      dark: Palette.alternate.dark,
      main: Palette.alternate.main,
      light: Palette.alternate.light,
      light2: Palette.alternate.light2,
      light3: Palette.alternate.light3
    },
    success: {
      main: Palette.success.main,
      dark: Palette.success.dark,
      light: Palette.success.light
    },
    background: {
      paper: Palette.background.paper,
      default: Palette.background.default
    },
    text: {
      primary: Palette.text.primary,
      secondary: Palette.text.secondary,
      disabled: Palette.text.disabled,
      //@ts-ignore
      red: Palette.text.red,
      white: Palette.text.white,
      dark: Palette.text.dark,
      grey: Palette.text.grey,
      lightGrey: Palette.text.lightGrey
    },
    neutral: {
      white: Palette.neutral[50],
      grey1: Palette.neutral[100],
      grey2: Palette.neutral[200],
      grey3: Palette.neutral[300],
      grey4: Palette.neutral[400],
      grey5: Palette.neutral[500],
      grey6: Palette.neutral[600],
      grey7: Palette.neutral[700],
      grey8: Palette.neutral[800]
    }
  },
  typography: {
    fontFamily: "Inter",
    h1: {
      fontSize: ThemeFonts.web.h1 + `px`,
      fontStyle: "normal",
      fontWeight: 200,
      lineHeight: "120%",
      "@media (min-width:961px) and (max-width:1280px)": {
        fontSize: ThemeFonts.webxs.h1 + `px`
      },
      "@media (min-width:361px) and (max-width:960px)": {
        fontSize: ThemeFonts.mobile.h1 + `px`
      },
      "@media (max-width:360px)": {
        fontSize: ThemeFonts.mobilexs.h1 + `px`
      }
    },
    h2: {
      fontSize: ThemeFonts.web.h2 + `px`,
      fontWeight: 500,
      lineHeight: "120%",
      fontStyle: "normal",
      "@media (min-width:961px) and (max-width:1280px)": {
        fontSize: ThemeFonts.webxs.h2 + `px`,
        fontWeight: "500"
      },
      "@media (min-width:361px) and (max-width:960px)": {
        fontSize: ThemeFonts.mobile.h2 + `px`,
        fontWeight: "500"
      },
      "@media (max-width:360px)": {
        fontSize: ThemeFonts.mobilexs.h2 + `px`,
        fontWeight: "500"
      }
    },
    h3: {
      fontSize: ThemeFonts.web.h3 + `px`,
      fontWeight: 500,
      lineHeight: "120%",
      fontStyle: "normal",
      "@media (min-width:961px) and (max-width:1280px)": {
        fontSize: ThemeFonts.webxs.h3 + `px`,
        fontWeight: "500"
      },
      "@media (min-width:361px) and (max-width:960px)": {
        fontSize: ThemeFonts.mobile.h3 + `px`,
        fontWeight: "500"
      },
      "@media (max-width:360px)": {
        fontSize: ThemeFonts.mobilexs.h3 + `px`,
        fontWeight: "500"
      }
    },
    h4: {
      fontSize: ThemeFonts.web.h4 + `px`,
      fontWeight: 500,
      lineHeight: "120%",
      fontStyle: "normal",
      "@media (min-width:961px) and (max-width:1280px)": {
        fontSize: ThemeFonts.webxs.h4 + `px`,
        fontWeight: "500"
      },
      "@media (min-width:361px) and (max-width:960px)": {
        fontSize: ThemeFonts.mobile.h4 + `px`,
        fontWeight: "500"
      },
      "@media (max-width:360px)": {
        fontSize: ThemeFonts.mobilexs.h4 + `px`,
        fontWeight: "500"
      }
    },
    h5: {
      fontSize: ThemeFonts.web.h5 + `px`,
      fontWeight: 500,
      lineHeight: "120%",
      fontStyle: "normal",
      "@media (min-width:961px) and (max-width:1280px)": {
        fontSize: ThemeFonts.webxs.h5 + `px`,
        fontWeight: "500"
      },
      "@media (min-width:361px) and (max-width:960px)": {
        fontSize: ThemeFonts.mobile.h5 + `px`,
        fontWeight: "500"
      },
      "@media (max-width:360px)": {
        fontSize: ThemeFonts.mobilexs.h5 + `px`,
        fontWeight: "500"
      }
    },
    h6: {
      fontSize: ThemeFonts.web.h6 + `px`,
      fontWeight: 400,
      lineHeight: "120%",
      fontStyle: "normal",
      "@media (min-width:961px) and (max-width:1280px)": {
        fontSize: ThemeFonts.webxs.h6 + `px`,
        fontWeight: "500"
      },
      "@media (min-width:361px) and (max-width:960px)": {
        fontSize: ThemeFonts.mobile.h6 + `px`,
        fontWeight: "500"
      },
      "@media (max-width:360px)": {
        fontSize: ThemeFonts.mobilexs.h6 + `px`,
        fontWeight: "500"
      }
    },
    subtitle1: {
      fontFamily: "Inter",
      fontSize: ThemeFonts.web.subtitle1 + `px`,
      fontWeight: 500,
      lineHeight: "120%",
      "@media (min-width:961px) and (max-width:1280px)": {
        fontSize: ThemeFonts.webxs.subtitle1 + `px`
      },
      "@media (min-width:361px) and (max-width:960px)": {
        fontSize: ThemeFonts.mobile.subtitle1 + `px`
      },
      "@media (max-width:360px)": {
        fontSize: ThemeFonts.mobilexs.subtitle1 + `px`
      }
    },
    subtitle2: {
      fontSize: ThemeFonts.web.subtitle2 + `px`,
      fontWeight: 500,
      lineHeight: "120%",
      "@media (min-width:961px) and (max-width:1280px)": {
        fontSize: ThemeFonts.webxs.subtitle2 + `px`
      },
      "@media (min-width:361px) and (max-width:960px)": {
        fontSize: ThemeFonts.mobile.subtitle2 + `px`
      },
      "@media (max-width:360px)": {
        fontSize: ThemeFonts.mobilexs.subtitle2 + `px`
      }
    },
    body1: {
      fontSize: ThemeFonts.web.body1 + `px`,
      fontWeight: "normal",
      lineHeight: "120%",
      "@media (min-width:961px) and (max-width:1280px)": {
        fontSize: ThemeFonts.webxs.body1 + `px`
      },
      "@media (min-width:361px) and (max-width:960px)": {
        fontSize: ThemeFonts.mobile.body1 + `px`
      },
      "@media (max-width:360px)": {
        fontSize: ThemeFonts.mobilexs.body1 + `px`
      }
    },
    body2: {
      fontSize: ThemeFonts.web.body2 + `px`,
      fontWeight: "normal",
      lineHeight: "120%",
      "@media (min-width:961px) and (max-width:1280px)": {
        fontSize: ThemeFonts.webxs.body2 + `px`
      },
      "@media (min-width:361px) and (max-width:960px)": {
        fontSize: ThemeFonts.mobile.body2 + `px`
      },
      "@media (max-width:360px)": {
        fontSize: ThemeFonts.mobilexs.body2 + `px`
      }
    },
    caption: {
      lineHeight: "120%",
      fontSize: ThemeFonts.mobile.caption + `px`,
      "@media (min-width:961px) and (max-width:1280px)": {
        fontSize: ThemeFonts.webxs.caption + `px`
      },
      "@media (min-width:361px) and (max-width:960px)": {
        fontSize: ThemeFonts.mobile.caption + `px`
      },
      "@media (max-width:360px)": {
        fontSize: ThemeFonts.mobilexs.caption + `px`
      }
    },
    overline: {
      lineHeight: "120%",
      fontWeight: "normal",
      textTransform: "inherit",
      fontSize: ThemeFonts.web.overline + `px`,
      "@media (min-width:961px) and (max-width:1280px)": {
        fontSize: ThemeFonts.webxs.overline + `px`
      },
      "@media (min-width:361px) and (max-width:960px)": {
        fontSize: ThemeFonts.mobile.overline + `px`
      },
      "@media (max-width:360px)": {
        fontSize: ThemeFonts.mobilexs.overline + `px`
      }
    }
  },

  components: {
    MuiTypography: {
      variants: [
        {
          props: { color: "secondary" },
          style: {
            color: Palette.common.white
          }
        }
      ],
      styleOverrides: {
        //@ts-ignore
        colorInherit: {
          color: Palette.text.dark + "!important"
        },
        colorPrimary: {
          color: Palette.text.red
        },
        colorSecondary: {
          color: Palette.text.grey
        },
        colorTextPrimary: {
          color: Palette.text.lightGrey
        },
        colorTextSecondary: {
          color: Palette.text.white
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        //revisar scroll
        "@global": {
          ".sb-main-centered": {
            // fontFamily: 'Inter',
            "@font-face": ["Inter"]
          },
          ".custom-drawer .MuiPaper-root": {
            overflowX: "hidden"
          },
          "*::-webkit-scrollbar": {
            width: "10px"
          },
          "*::-webkit-scrollbar-track": {
            "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.2)"
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: Palette.neutral[500],
            outline: "1px solid" + Palette.neutral[500]
          }
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        elevation1: {
          //Shadow xs
          boxShadow:
            "0px 1px 8px rgba(2, 51, 101, 0.08), 0px 0px 0px rgba(14, 30, 46, 0.1), 0px 1px 3px rgba(14, 30, 46, 0.2);" //noPalletcolor
        },
        elevation2: {
          //Shadow sm
          boxShadow:
            "0px 4px 6px rgba(50, 50, 93, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.08)" //noPalletcolor
        },
        elevation3: {
          //Shadow md
          boxShadow:
            "0px 7px 14px rgba(60, 66, 87, 0.12), 0px 3px 6px rgba(0, 0, 0, 0.12)" //noPalletcolor
        },
        elevation4: {
          //Shadow lg
          boxShadow:
            "0px 15px 35px rgba(60, 66, 87, 0.12), 0px 5px 15px rgba(0, 0, 0, 0.12)" //noPalletcolor
        },
        elevation5: {
          //Shadow xl
          boxShadow:
            "0px 15px 35px rgba(60, 66, 87, 0.12), 0px 50px 100px rgba(60, 66, 87, 0.12), 0px 5px 15px rgba(0, 0, 0, 0.12)" //noPalletcolor
        }
      }
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          backgroundColor: Palette.neutral[100]
        }
      }
    },
    MuiTableRow: {
      styleOverrides: {
        hover: {}
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: "16px"
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "16px"
        },
        outlined: {
          borderRadius: "8px",
          top: "-5px"
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "8px!important",
          position: "relative",
          "& $notchedOutline": {
            borderWidth: "1px",
            borderColor: Palette.neutral[500],
            color: Palette.text.dark,
            "&:hover": {
              borderColor: Palette.primary.light
            }
          },
          "&:hover:not(:disabled):not($focused):not($error) $notchedOutline": {
            borderColor: Palette.neutral[100],
            "@media (hover: none)": {
              borderColor: Palette.primary.light
            }
          },
          "&$focused $notchedOutline": {
            borderColor: Palette.primary.light,
            borderWidth: "1px"
          }
        }
      }
    },

    MuiFormLabel: {
      styleOverrides: {
        root: {
          "&$focused": {
            color: Palette.primary.light
          }
        }
      }
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
          fontSize: ThemeFonts.web.tooltip + `px`,
          backgroundColor: Palette.neutral[800], //noPalletcolor
          color: Palette.text.white
        },
        filledInfo: {
          backgroundColor: Palette.text.white
        },
        filledWarning: {
          backgroundColor: Palette.warning.light2,
          color: Palette.warning.dark2
        },
        filledError: {
          color: Palette.text.white,
          backgroundColor: Palette.secondary.light
        },
        filledSuccess: {
          backgroundColor: Palette.neutral[800]
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: "4px",
          fontSize: ThemeFonts.web.tooltip + `px`
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "140%",
          color: Palette.common.headTable
        }
      }
    },
    MuiButtonGroup: {
      styleOverrides: {
        groupedContainedPrimary: {
          padding: "8px 12px",
          backgroundColor: Palette.primary.light,
          border: "1px solid " + Palette.primary.light,
          "&:hover": {
            backgroundColor: Palette.primary.dark,
            border: "1px solid " + Palette.primary.dark
          },
          "&:focus": {
            border: "1px solid " + Palette.primary.dark
          },
          "&:active": {
            color: Palette.common.white,
            border: "1px solid " + Palette.primary.dark
          },
          "&:not(:last-child)": {
            borderTop: "1px solid " + Palette.primary.light + "!important",
            borderRight: "1px solid " + Palette.primary.main + "!important",
            borderLeft: "none!important",
            borderBottom: "1px solid " + Palette.primary.light + "!important"
          },
          "&:disabled": {
            backgroundColor: Palette.primary.main,
            color: Palette.common.white
          },
          "&.smallestarrow": {
            //para split
            backgroundColor: Palette.primary.main,
            padding: "8px 0px!important",
            minWidth: "20px!important"
          },
          "&.smallestbtn": {
            //para split
            backgroundColor: Palette.primary.main,
            padding: "8px 30px!important",
            borderRight: "1px solid #fff!important"
          }
        },
        groupedContainedSecondary: {
          padding: "8px 14px",
          backgroundColor: Palette.primary.light,
          border: "2px solid " + Palette.neutral[400] + "!important",
          color: Palette.primary.main,
          fontWeight: 600,
          "&:hover": {
            border: "2px solid " + Palette.primary.dark
          },
          "&:focus": {
            border: "2px solid " + Palette.primary.dark
          },
          "&:active": {
            border: "2px solid " + Palette.primary.dark
          },
          "&:not(:last-child)": {
            borderTop: "2px solid " + Palette.neutral[400] + "!important",
            borderRight: "none!important",
            borderLeft: "2px solid " + Palette.neutral[400] + "!important",
            borderBottom: "2px solid " + Palette.neutral[400] + "!important"
          },
          "&:disabled": {
            backgroundColor: Palette.primary.main,
            color: Palette.common.white
          },
          "&.smallestarrow": {
            //para split
            padding: "8px 0px!important",
            minWidth: "20px!important"
          },
          "&.smallestbtn": {
            //para split
            padding: "8px 30px!important",
            borderRight: "1px solid #fff!important"
          }
        },
        groupedText: {
          padding: "8px 14px",
          backgroundColor: "transparent",
          border: "1px solid " + Palette.neutral[100],
          color: Palette.primary.main,
          fontWeight: 600,
          "&:hover": {
            backgroundColor: Palette.neutral[200]
          },
          "&:focus": {
            backgroundColor: Palette.neutral[300]
          },
          "&:not(:last-child)": {
            borderTop: "1px solid " + Palette.neutral[100] + "!important",
            borderRight: "1px solid " + Palette.neutral[500] + "!important",
            borderLeft: "none!important",
            borderBottom: "1px solid " + Palette.neutral[100] + "!important"
          }
        },
        groupedOutlinedPrimary: {
          padding: "8px 20px"
        },
        groupedTextPrimary: {
          padding: "8px 20px"
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            opacity: "0.5"
          }
        },
        sizeSmall: {
          "&.squareButton": {
            height: "36px",
            width: "36px",
            padding: "0px",

            "&:hover": {
              padding: "0px!important",
              backgroundColor: Palette.neutral[200]
            },
            "&:focus": {
              backgroundColor: Palette.neutral[300],
              border: "none"
            },
            "&:active": {
              animation: "fadeIn 5s"
            }
          }
        },
        colorPrimary: {
          "&.squareButton": {
            borderRadius: "8px",
            backgroundColor: Palette.neutral[50],
            padding: "10px",
            fontWeight: "400",
            "&:hover": {
              padding: "10px!important",
              backgroundColor: Palette.neutral[200]
            },
            "&:active": {
              animation: "fadeIn 5s",
              border: "none"
            },
            "&:focus": {
              backgroundColor: Palette.neutral[300],
              border: "none"
            },
            "&:disabled": {
              opacity: "0.5"
            }
          },
          "&.large": {
            padding: "10px!important",
            height: "52px",
            width: "52px"
          }
        },
        colorSecondary: {
          "&.squareButton": {
            borderRadius: "8px",
            backgroundColor: Palette.neutral[50],
            padding: "10px",
            border: `1px solid ` + Palette.neutral[300],
            "&:hover": {
              backgroundColor: Palette.neutral[200],
              border: `1px solid ` + Palette.neutral[300]
            },
            "&:active": {
              border: `1px solid ` + Palette.neutral[300],
              backgroundColor: Palette.neutral[300]
            },
            "&:focus": {
              border: `1px solid ` + Palette.neutral[300],
              backgroundColor: Palette.neutral[300]
            },
            "&:disabled": {
              opacity: "0.5"
            },
            "&.large": {
              padding: "0px!important",
              height: "52px",
              width: "52px"
            },
            "&.small": {
              border: `1px solid ` + Palette.neutral[300],
              height: "36px",
              width: "36px",
              padding: "0px"
            }
          }
        }
      }
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true
      },
      styleOverrides: {
        //@ts-ignore
        root: {
          padding: "12px 30px !important",
          textTransform: "capitalize",
          height: "44px",
          borderRadius: "8px",
          fontWeight: "300",
          letterSpacing: "0.27px",
          fontSize: ThemeFonts.web.button + `px`,
          "@media (min-width:961px) and (max-width:1280px)": {
            fontSize: ThemeFonts.webxs.button + `px`
          },
          "@media (min-width:361px) and (max-width:960px)": {
            fontSize: ThemeFonts.mobile.button + `px`
          },
          "@media (max-width:360px)": {
            fontSize: ThemeFonts.mobilexs.button + `px`
          },
          "&.dangerButton": {
            //para split
            backgroundColor: "none !important",
            padding: "12px 30px",
            textTransform: "none",
            border: `1px solid ` + Palette.error.light3 + `!important`,
            color: Palette.text.grey,
            fontWeight: "400",
            "&:active": {
              color: Palette.error.light + `!important`,
              border: `1px solid ` + Palette.error.light + `!important`,
              backgroundColor: `none!important`
            },
            "&:hover": {
              border: `1px solid ` + Palette.error.light + `!important`,
              backgroundColor: `none !important`
            },
            "&:focus": {
              color: Palette.error.dark2 + `!important`
            },
            "&:disabled": {
              opacity: "0.3"
            }
          }
        },
        sizeLarge: {
          height: "52px",
          padding: "12px 30px",
          fontSize: ThemeFonts.web.buttonlg + `px`,
          "@media (min-width:961px) and (max-width:1280px)": {
            fontSize: ThemeFonts.webxs.buttonlg + `px`
          },
          "@media (min-width:361px) and (max-width:960px)": {
            fontSize: ThemeFonts.mobile.buttonlg + `px`
          },
          "@media (max-width:360px)": {
            fontSize: ThemeFonts.mobilexs.buttonlg + `px`
          }
        },
        sizeSmall: {
          height: "36px",

          fontSize: ThemeFonts.web.buttonsm + `px`,
          "@media (min-width:961px) and (max-width:1280px)": {
            fontSize: ThemeFonts.webxs.buttonsm + `px`
          },
          "@media (min-width:361px) and (max-width:960px)": {
            fontSize: ThemeFonts.mobile.buttonsm + `px`
          },
          "@media (max-width:360px)": {
            fontSize: ThemeFonts.mobilexs.buttonsm + `px`
          }
        },
        //@ts-ignore
        containedPrimary: {
          textTransform: "none",
          border: `1px solid ` + Palette.secondary.light,
          fontWeight: "400",
          backgroundColor: Palette.secondary.light,
          "&:hover": {
            color: Palette.common.white,
            backgroundColor: Palette.secondary.main,
            border: `1px solid ` + Palette.secondary.main
          },
          "&:focus": {
            backgroundColor: Palette.secondary.dark2,
            border: `1px solid ` + Palette.secondary.dark2,
            color: Palette.common.white
          },
          "&:active": {
            backgroundColor: Palette.secondary.dark2,
            border: `1px solid ` + Palette.secondary.dark2,
            color: Palette.common.white
          },
          "&:disabled": {
            backgroundColor: Palette.secondary.light,
            border: `1px solid ` + Palette.secondary.light,
            color: Palette.common.white,
            opacity: "30%"
          }
        },
        //@ts-ignore
        containedSecondary: {
          textTransform: "none",
          backgroundColor: Palette.primary.main + "!important",
          border: `1px solid ` + Palette.primary.main,
          color: Palette.common.white,
          fontWeight: "300",
          "&:hover": {
            backgroundColor: Palette.neutral[50] + "!important",
            color: Palette.text.grey
          },
          "&:focus": {
            border: `1px solid ` + Palette.primary.light2
          },
          "&:active": {
            border: `1px solid ` + Palette.primary.light3
          },
          "&:disabled": {
            backgroundColor: Palette.neutral[500] + "!important",
            border: `1px solid ` + Palette.neutral[500],
            color: Palette.text.dark,
            opacity: "30%"
          }
        },
        //@ts-ignore
        textPrimary: {
          padding: "8px 43px",
          color: Palette.text.grey,
          border: `1px solid ` + Palette.text.dark + "!important",
          fontWeight: "400",
          "&:hover": {
            border: `1px solid ` + Palette.neutral[100] + "!important",
            backgroundColor: Palette.neutral[100] + "!important",
            color: Palette.text.grey
          },
          "&:focus": {
            border: `1px solid ` + Palette.neutral[400] + "!important",
            backgroundColor: Palette.neutral[50] + "!important"
          },
          "&:active": {
            border: `1px solid ` + Palette.neutral[400],
            color: Palette.primary.main + "!important",
            backgroundColor: Palette.neutral[50] + "!important"
          },
          "&:disabled": {
            backgroundColor: Palette.neutral[100] + "!important",
            border: `1px solid ` + Palette.neutral[400],
            color: Palette.text.dark,
            opacity: "30%"
          }
        },
        outlinedPrimary: {
          border: "unset",
          borderRadius: "8px",
          backgroundColor: Palette.neutral[200],
          textTransform: "none",
          color: Palette.primary.main,
          "&:hover": {
            border: "unset",
            backgroundColor: Palette.primary.light3
          }
        },
        outlined: {
          textTransform: "none"
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: Palette.text.grey,
          "&.Mui-error": {
            color: Palette.text.grey,
            margin: "3px 4px 0px 4px",
            fontSize: "13px"
          }
        }
      }
    },
    MuiInput: {
      styleOverrides: {
        root: {
          height: "44px",
          fontSize: "16px",
          fontFamily: "Inter",
          borderRadius: "8px",
          "&:disabled": {
            color: Palette.neutral[500]
          }
        },
        underline: {
          "&:before": {
            borderBottom: "1px solid " + Palette.primary.light
          },
          "&:hover:not(:disabled):not($focused):not($error):before": {
            borderBottom: "1px solid " + Palette.primary.light
          },
          "&:after": {
            borderBottom: "1px solid " + Palette.primary.light
          }
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: "44px",
          borderRadius: "8px!important",
          "& input[aria-invalid='true']": {
            color: Palette.text.grey
          }
        },
        multiline: {
          height: "auto"
        }
      }
    },
    MuiSwitch: {
      styleOverrides: {
        colorPrimary: {
          color: Palette.neutral[50],

          "&:disabled": {
            color: Palette.neutral[500] + "!important"
          },
          "&$track": {
            opacity: 1,
            backgroundColor: Palette.neutral[300],
            boxShadow:
              "0px 4px 6px rgba(50, 50, 93, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.08)"
          },
          "&.Mui-checked": {
            color: Palette.secondary.light
          },
          "&.Mui-checked + $track": {
            backgroundColor: Palette.secondary.light2,
            color: Palette.neutral[500],
            opacity: "1"
          },
          "&:disabled + $track": {
            opacity: "1",
            backgroundColor: Palette.neutral[300]
          }
        }
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          border: "none",
          "&label": {
            fontSize: ThemeFonts.web.inputLabel + "!important"
          }
        },
        colorPrimary: {
          color: Palette.text.grey,
          "&.Mui-checked": {
            color: Palette.secondary.light
          },
          "&:disabled": {
            color: `#C7CACD!important`
          },
          "&.Mui-disabled": {
            "&.Mui-checked": {
              color: Palette.neutral[400] + "!important"
            }
          }
        }
      }
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          border: "none",
          color: Palette.secondary.light
        },
        colorPrimary: {
          "&label": {
            fontSize: ThemeFonts.web.inputLabel
          },
          "&.Mui-checked": {
            color: Palette.secondary.light
          },
          "&.Mui-disabled": {
            "&.Mui-checked": {
              color: Palette.neutral[400] + "!important"
            }
          }
        }
      }
    }
  }
});

export default theme;