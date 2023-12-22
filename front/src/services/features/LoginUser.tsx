import { createSlice } from "@reduxjs/toolkit";

export type InitialStateType = {
  isLogin: boolean;
  token: null | string;
};

export type LoginUseType = {
  loginUser: {
    isLogin: boolean;
    token: null | string;
  };
};

const initialState: InitialStateType = {
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
