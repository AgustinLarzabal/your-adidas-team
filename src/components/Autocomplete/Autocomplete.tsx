import { Autocomplete as MUIAutocomplete, Box, TextField } from "@mui/material";
import { FlagIcon } from "components/FlagIcon";
import { Option } from "utils/types";

type Props = {
  label: string;
  options: Option[];
  onChange: (country: string) => void;
};

const Autocomplete = ({ label, options, onChange }: Props) => {
  return (
    <MUIAutocomplete
      data-testid="autocomplete"
      options={options}
      onChange={(_, value) => onChange(value ? value.value : "")}
      getOptionLabel={(option: Option) => option.label ?? ""}
      renderInput={(params) => <TextField {...params} label={label} />}
      renderOption={(props, option) => (
        <Box component="li" {...props}>
          {option.code && <FlagIcon country={option.code} />}
          {option.label}
        </Box>
      )}
    />
  );
};

export { Autocomplete };
