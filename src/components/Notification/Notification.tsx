import { useSelector } from "react-redux";
import { Snackbar, Alert, SnackbarCloseReason } from "@mui/material";
import { RootState } from "state/store";
import { useNotification } from "hooks/useNotification";

const Notification = (): JSX.Element => {
  const notification = useSelector((state: RootState) => state.notification);
  const { clearNotification } = useNotification();

  const handleClose = (_: unknown, reason?: SnackbarCloseReason) =>
    reason !== "clickaway" && clearNotification();

  return (
    <Snackbar
      open={notification.open}
      autoHideDuration={notification.timeout}
      onClose={handleClose}
    >
      <Alert
        data-testid="test"
        variant="filled"
        onClose={handleClose}
        severity={notification.type}
      >
        {notification.message}
      </Alert>
    </Snackbar>
  );
};

export { Notification };
