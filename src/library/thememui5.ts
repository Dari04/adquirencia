import { createTheme } from "@mui/material/styles";

const Palette = {
    primary: {
        dark2: "#0E1E2E",
        dark: "#112B45",
        main: "#023365",
        light: "#1E65AE",
        light2: "#4498EE",
        light3: "#EEF6FF"
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
    }
  },
  typography: {
    fontFamily: "IBM Plex Sans",
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
            wordWrap: "break-word"
        },
      },
    }
  },
});

export default theme;