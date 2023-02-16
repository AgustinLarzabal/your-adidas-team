import { useRef, useState } from "react";
import { Avatar, Box } from "@mui/material";
import { Spinner } from "components/Spinner";

type Props = {
  position: string;
  photo: string;
};

const Player = ({ position, photo }: Props) => {
  const [loading, setLoading] = useState(true);
  const counter = useRef(0);

  const imageLoaded = () => {
    counter.current += 1;
    if (counter.current >= 1) {
      setLoading(false);
    }
  };

  return (
    <Box
      data-testid="player"
      component="span"
      sx={{
        gridArea: position,
        display: "grid",
        placeItems: "center",
      }}
    >
      {loading && <Spinner />}
      <Box component="span" sx={{ display: loading ? "none" : "block" }}>
        <Avatar
          src={photo}
          sx={{ width: "100%", height: "auto" }}
          onLoad={imageLoaded}
        />
      </Box>
    </Box>
  );
};

export { Player };
