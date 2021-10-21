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
        credentials: "include",
      }),
      invalidatesTags: ["UserInfo"],
    }),
    // TODO:
    // - Include credentials in requests, so far adding the field
    //   in either baseQuery or the endpoint's query is not working.
    getMyRoles: build.query({
      query: () => ({ url: "/myRoles" }),
      invalidatesTags: ["UserInfo"],
      credentials: "include",
    }),
  }),
});

export const { useLoginMutation, useGetMyRolesQuery } = jwtingBackend;

// Redux Toolkit reducer definitions for global non fetch states.
const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {},
  reducers: {
    changeUserInfo: (state, action) => {
      return {
        name: action.payload.name ?? state.name,
        roles: action.payload.roles ?? state.roles,
      };
    },
  },
});

export const { changeUserInfo } = userInfoSlice.actions;

// Global store configuration the store
export const store = configureStore({
  reducer: {
    [jwtingBackend.reducerPath]: jwtingBackend.reducer,
    [userInfoSlice.name]: userInfoSlice.reducer,
  },
  // https://redux-toolkit.js.org/rtk-query/overview
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jwtingBackend.middleware),
});

export default store;
