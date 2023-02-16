import { Box } from "@mui/material";

type Props = {
  country: string;
};

const FlagIcon = ({ country }: Props) => {
  return (
    <Box component="span" sx={{ mr: "0.5rem" }}>
      <img
        data-testid="flagicon"
        loading="lazy"
        width="20"
        src={`https://media-3.api-sports.io/flags/${country.toLowerCase()}.svg`}
        alt={`Flag of ${country}`}
      />
    </Box>
  );
};

export { FlagIcon };
