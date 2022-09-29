import { configureStore } from "@redux.js/toolkit";
import usersReducer from "../components/users/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
