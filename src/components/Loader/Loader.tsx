import { useSelector } from "react-redux";
import { Backdrop } from "@mui/material";
import { Spinner } from "components/Spinner";
import { RootState } from "state/store";

const Loader = () => {
  const loader = useSelector((state: RootState) => state.loader);

  return (
    <Backdrop
      open={loader.open}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Spinner />
    </Backdrop>
  );
};

export { Loader };
