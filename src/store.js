import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { configureStore, createSlice } from "@reduxjs/toolkit";

// RTK Query setup
const jwtingBackend = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jwting.herokuapp.com:443",
  }),
  tagTypes: ["UserInfo"],
  endpoints: (build) => ({
    login: build.mutation({
      query: (credentials) => ({
        url: "/auth/signin",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["UserInfo"],
    }),
    // TODO:
    // - Use this endpoint and make credentials are included.
    getMyRoles: build.query({
      query: () => ({ url: "/myRoles" }),
      invalidatesTags: ["UserInfo"],
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
      return { ...state, name: action.payload.name };
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
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jwtingBackend.middleware),
});

export default store;
