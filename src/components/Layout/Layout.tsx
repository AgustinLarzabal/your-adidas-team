import { Box, useMediaQuery, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ChildrenType } from "utils/types";
import Logo from "assets/logo.svg";

const Layout = ({ children }: ChildrenType) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  console.log("matches", matches);

  return (
    <Box
      data-testid="layout"
      sx={{
        display: "flex",
        height: "100vh",
      }}
    >
      <Box
        component="aside"
        sx={{
          p: 1,
          borderRight: "1px solid #42434C",
        }}
      >
        <img src={Logo} alt="Adidas Logo" width="50px" />
      </Box>

      <Box
        component="main"
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        <Box
          component="header"
          sx={{ px: 4, py: 2, borderBottom: "1px solid #42434C" }}
        >
          <Typography variant="h1">Your Adidas Team</Typography>
        </Box>

        <Box
          sx={{ display: "flex", flexDirection: matches ? "row" : "column" }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export { Layout };
