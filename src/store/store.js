import { configureStore } from "@reduxjs/toolkit";
import getUser from "../features/getUserSlice";
export const store = configureStore({
  reducer: {
    userlist: getUser,
  },
});