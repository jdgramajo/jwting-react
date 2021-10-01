import { configureStore, createSlice } from "@reduxjs/toolkit";

// Redux Toolkit reducer definitions
// Could go into its own file.

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {},
  reducers: {
    changeUserInfo: (state, action) => action.payload,
  },
});

const { changeUserInfo } = userInfoSlice.actions;

export { changeUserInfo };

// Global store configuration for Redux Toolkit.
// Could be in its own module.s

const store = configureStore({
  reducer: {
    [userInfoSlice.name]: userInfoSlice.reducer,
  },
});

export default store;
