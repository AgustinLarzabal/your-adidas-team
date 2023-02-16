import { configureStore } from "@reduxjs/toolkit";
import { LoaderReducers } from "state/loaderSlice";
import { LineupReducer } from "state/lineupSlice";
import { NotificationReducer } from "state/notificationsSlice";

export const store = configureStore({
  reducer: {
    loader: LoaderReducers,
    lineup: LineupReducer,
    notification: NotificationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
