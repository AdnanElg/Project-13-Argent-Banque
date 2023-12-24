// Import modules:
import { configureStore } from "@reduxjs/toolkit";
import loginUser from "./features/LoginUser";
import getUserProfile from "./features/GetUserProfile";

// configureStore :
const store = configureStore({
  reducer: {
    loginUser,
    getUserProfile,
  },
});

// Export store
export default store;
