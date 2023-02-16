import { Box, CircularProgress } from "@mui/material";

const Spinner = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress sx={{ mx: "auto", color: "#5C5D63" }} />
    </Box>
  );
};

export { Spinner };
