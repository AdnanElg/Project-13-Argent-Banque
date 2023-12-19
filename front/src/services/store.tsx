import { configureStore } from "@reduxjs/toolkit";
import loginUser from "./features/LoginUser";

const store = configureStore({
  reducer: {
    loginUser,
  },
});

export default store;
