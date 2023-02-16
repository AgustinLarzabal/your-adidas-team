import {
  createTheme,
  CssBaseline,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material";
import { ChildrenType } from "utils/types";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0d83ff",
    },
    background: {
      default: "#0E0E10",
      paper: "#111115",
    },
    text: {
      primary: "#DEDEDE",
    },
  },
  typography: {
    fontFamily: ["Work Sans", "Helvetica", "Arial", "sans-serif"].join(),
    h1: {
      fontWeight: 700,
      fontSize: "1.5rem",
    },
  },
  components: {
    MuiAutocomplete: {
      styleOverrides: {
        popupIndicator: {
          "&.MuiIconButton-root .MuiSvgIcon-root": {
            fill: "#42434C",
          },
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          ".MuiSvgIcon-root": {
            fill: "#5C5D63",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          color: "#111115",
          fontSize: "0.75rem",
          height: "20px",
          "&.position-Goalkeeper": {
            backgroundColor: "#23EEA7",
          },
          "&.position-Defender": {
            backgroundColor: "#EBB15B",
          },
          "&.position-Midfielder": {
            backgroundColor: "#F29445",
          },
          "&.position-Attacker": {
            backgroundColor: "#F61156",
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#7A7B80",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "&.MuiOutlinedInput-root:hover": {
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: "#5C5D63",
            },
            ".MuiIconButton-root .MuiSvgIcon-root": {
              fill: "#5C5D63",
            },
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: "#42434C",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: "#DEDEDE",
          borderColor: "#42434C",
        },
        head: {
          color: "#5C5D63",
          fontWeight: 600,
          textTransform: "uppercase",
        },
      },
    },
  },
});

const ThemeProvider = ({ children }: ChildrenType) => {
  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
};

export { ThemeProvider };
