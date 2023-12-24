// Import modules:
import { createSlice } from "@reduxjs/toolkit";
import { LoginUserType } from "../../types/services/features/LoginUserType";

const initialState: LoginUserType = {
  isLogin: false,
  token: null,
};

const loginUser = createSlice({
  name: "loginUser",
  initialState,
  reducers: {
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

// Export reducers :
export const { setIsLogin, setToken } = loginUser.actions;
export default loginUser.reducer;
