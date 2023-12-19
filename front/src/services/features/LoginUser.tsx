import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  token: null,
};

const loginUser = createSlice({
  name: "loginUser",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setLogin, setToken } = loginUser.actions;
export default loginUser.reducer;
