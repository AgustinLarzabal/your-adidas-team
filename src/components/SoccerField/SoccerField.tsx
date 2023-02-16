import { Box } from "@mui/material";
import { SxProps } from "@mui/system";
import { ChildrenType } from "utils/types";

type Props = {
  style?: SxProps;
  // TODO: type correctly
  styleAfter?: any;
};

const Corner = ({ style, styleAfter }: Props) => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        "&::after": {
          content: '""',
          position: "absolute",
          width: "100%",
          height: "100%",
          border: "1px solid #42434C",
          borderRadius: "50%",
          ...styleAfter,
        },
        ...style,
      }}
    />
  );
};

const Line = ({ style, styleAfter }: Props) => {
  return (
    <Box
      sx={{ background: "#42434C", "&::after": { ...styleAfter }, ...style }}
    />
  );
};

const Area = ({ style }: Props) => {
  return (
    <Box
      sx={{
        position: "relative",
        background: "#111115",
        border: "1px solid #42434C",
        zIndex: 2,
        ...style,
      }}
    />
  );
};

const Penalty = ({ style }: Props) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "2px",
        height: "2px",
        background: "#42434C",
        borderRadius: "50%",
        left: "-1px",
        zIndex: 2,
        ...style,
      }}
    />
  );
};

const PenaltyArc = ({ style }: Props) => {
  return (
    <Box
      sx={{
        border: "1px solid #42434C",
        borderRadius: "50%",
        zIndex: 1,
        ...style,
      }}
    />
  );
};

const Circle = ({ style }: Props) => {
  return (
    <Box sx={{ border: "2px solid #42434C", borderRadius: "50%", ...style }} />
  );
};

const SoccerField = ({ children }: ChildrenType) => {
  return (
    <Box
      data-testid="soccer-field"
      sx={{
        display: "grid",
        width: "calc(70vh - 93px)",
        maxWidth: "100%",
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          position: "relative",
          height: "100%",
          paddingTop: "145%",
          background: "#111115",
          border: "1px solid #42434C",
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            display: "grid",
            gridTemplateColumns: "0.5fr 0.75fr 2fr 0.75fr 0.5fr",
            gridTemplateRows: "0.18fr 1fr 2px 1fr 0.18fr",
            gridTemplateAreas:
              "'esi . zc . esd' '. . zc . .' 'lhmizq lhmizq zc lhmder lhmder' '. . zc . .' 'eii . zc . eid'",
          }}
        >
          <Corner
            style={{ gridArea: "esi" }}
            styleAfter={{ top: "-50%", left: "-50%" }}
          />
          <Corner
            style={{ gridArea: "esd" }}
            styleAfter={{ top: "-50%", right: "-50%" }}
          />
          <Corner
            style={{ gridArea: "eii" }}
            styleAfter={{ bottom: "-50%", left: "-50%" }}
          />
          <Corner
            style={{ gridArea: "eid" }}
            styleAfter={{ bottom: "-50%", right: "-50%" }}
          />
          <Line style={{ gridArea: "lhmizq" }} />
          <Line style={{ gridArea: "lhmder" }} />
          <Box
            sx={{
              gridArea: "zc",
              display: "grid",
              gridTemplateRows: "repeat(12, 1fr) 2px repeat(12, 1fr)",
              gridTemplateColumns: "repeat(20, 1fr)",
            }}
          >
            <Area
              style={{
                borderWidth: "0 2px 2px 2px",
                gridArea: "1 / 1 / span 4 / span 20",
              }}
            />
            <Area
              style={{
                borderWidth: "0 2px 2px 2px",
                gridArea: "1 / 5 / span 2 / span 12",
              }}
            />
            <Area
              style={{
                borderWidth: "2px 2px 0 2px",
                gridArea: "22 / 1 / span 4 / span 20",
              }}
            />
            <Area
              style={{
                borderWidth: "2px 2px 0 2px",
                gridArea: "24 / 5 / span 2 / span 12",
              }}
            />
            <Penalty
              style={{ gridArea: "4 / 11 / span 1 / span 1", top: "-2px" }}
            />
            <Penalty
              style={{ gridArea: "23 / 11 / span 1 / span 1", bottom: "-2px" }}
            />
            <PenaltyArc style={{ gridArea: "3 / 6 / span 3 / span 10" }} />
            <PenaltyArc style={{ gridArea: "21 / 6 / span 3 / span 10" }} />
            <Line
              style={{ gridArea: "13 / 1 / span 1 / span 20" }}
              styleAfter={{
                content: "''",
                position: "absolute",
                width: "5px",
                height: "5px",
                background: "#42434C",
                borderRadius: "50%",
                top: "calc(50% - 2.5px)",
                left: "calc(50% - 2.5px)",
              }}
            />
            <Circle style={{ gridArea: "11 / 5 / span 5 / span 12" }} />
          </Box>
        </Box>
        {children}
      </Box>
    </Box>
  );
};

export { SoccerField };
