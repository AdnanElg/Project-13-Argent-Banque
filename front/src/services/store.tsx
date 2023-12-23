import { configureStore } from "@reduxjs/toolkit";
import loginUser from "./features/LoginUser";
import getUserProfile from "./features/GetUserProfile";

const store = configureStore({
  reducer: {
    loginUser,
    getUserProfile,
  },
});

export default store;
