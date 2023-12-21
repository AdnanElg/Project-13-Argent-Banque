import { createSlice } from "@reduxjs/toolkit";
 
export type UserProfileState = {
  firstName: null | string;
  lastName: null | string;
};

const initialState: UserProfileState = {
  firstName: null,
  lastName: null
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
