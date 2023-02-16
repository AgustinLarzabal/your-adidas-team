import { useDispatch } from "react-redux";
import { LoaderActions } from "state/loaderSlice";

export const useLoader = () => {
  const dispatch = useDispatch();

  const showLoader = () => {
    dispatch(LoaderActions.setLoader(true));
  };

  const hideLoader = () => {
    dispatch(LoaderActions.setLoader(false));
  };

  return { showLoader, hideLoader };
};
