import type { ChildrenType } from "@utils/types";
import {
  createTheme,
  CssBaseline,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material";

const theme = createTheme({});

const ThemeProvider = ({ children }: ChildrenType) => {
  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
};

export { ThemeProvider };
