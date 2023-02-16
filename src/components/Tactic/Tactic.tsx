import { Box } from "@mui/material";
import { ChildrenType } from "utils/types";

const Tactic = ({ children }: ChildrenType) => {
  return (
    <Box
      data-testid="tactic"
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 10,
        display: "grid",
        gridTemplateColumns: "repeat(9, 1fr)",
        gridTemplateRows: "repeat(8, 1fr)",
        gridTemplateAreas:
          "'. . . . . . . . .' '. . . a0 . a1 . . .' '. . . . . . . . .' '. m0 . m1 . m2 . m3 .' '. . . . . . . . .' '. d0 . d1 . d2 . d3 .' '. . . . . . . . .' '. . . . gk0 . . . .'",
      }}
    >
      {children}
    </Box>
  );
};

export { Tactic };
