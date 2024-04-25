import { configureStore } from "@reduxjs/toolkit";
import { profilesApi } from "./usersApiSlice";

export const store = configureStore({
  reducer: {
    [profilesApi.reducerPath]: profilesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(profilesApi.middleware),
});
