import { createSlice } from "@reduxjs/toolkit";

export type InitialStateType = {
  firstName: null | string;
  lastName: null | string;
};

export type getUserProfile = {
  getUserProfile: {
    firstName: null | string;
    lastName: null | string;
  };
};

const initialState: InitialStateType = {
  firstName: null,
  lastName: null,
};

const getUserProfile = createSlice({
  name: "getUserProfile",
  initialState,
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
  },
});

export const { setFirstName, setLastName } = getUserProfile.actions;
export default getUserProfile.reducer;
