import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { configureStore, createSlice } from "@reduxjs/toolkit";

// RTK Query setup
const jwtingBackend = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jwting.herokuapp.com:443",
    credentials: "include",
  }),
  tagTypes: ["UserInfo"],
  endpoints: (build) => ({
    login: build.mutation({
      query: (loginCredentials) => ({
        url: "/auth/signin",
        method: "POST",
        body: loginCredentials,
      }),
      invalidatesTags: ["UserInfo"],
    }),
    getMyRoles: build.query({
      query: () => ({ url: "/myRoles" }),
      invalidatesTags: ["UserInfo"],
    }),
  }),
});

export const { useLoginMutation, useGetMyRolesQuery } = jwtingBackend;

// Redux Toolkit reducer definitions for global non fetch states.
const userNameSlice = createSlice({
  name: "userName",
  initialState: "",
  reducers: {
    changeUserName: (state, action) => action.payload,
  },
});

export const { changeUserName } = userNameSlice.actions;

const userRolesSlice = createSlice({
  name: "userRoles",
  initialState: [],
  reducers: {
    changeUserRoles: (state, action) => action.payload,
  },
});

export const { changeUserRoles } = userRolesSlice.actions;

// Global store configuration the store
export const store = configureStore({
  reducer: {
    [jwtingBackend.reducerPath]: jwtingBackend.reducer,
    [userNameSlice.name]: userNameSlice.reducer,
    [userRolesSlice.name]: userRolesSlice.reducer,
  },
  // https://redux-toolkit.js.org/rtk-query/overview
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jwtingBackend.middleware),
});

export default store;
