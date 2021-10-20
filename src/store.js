import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { configureStore, createSlice } from "@reduxjs/toolkit";

// RTK Query setup
const jwtingBackend = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jwting.herokuapp.com:443",
  }),
  tagTypes: ["UserInfo"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/signin",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["UserInfo"],
      // Docs at https://redux-toolkit.js.org/rtk-query/usage/mutations
      // onQueryStarted is useful for optimistic updates
      // The 2nd parameter is the destructured `MutationLifecycleApi`
      async onQueryStarted(
        arg,
        { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }
      ) {},
      // The 2nd parameter is the destructured `MutationCacheLifecycleApi`
      async onCacheEntryAdded(
        arg,
        {
          dispatch,
          getState,
          extra,
          requestId,
          cacheEntryRemoved,
          cacheDataLoaded,
          getCacheEntry,
        }
      ) {},
    }),
    // TODO:
    // - Add endpoint for getting user roles once logged in.
    // - Make sure to send credentials in cookie added by a successful login.
  }),
});

export const { useLoginMutation } = jwtingBackend;

// Redux Toolkit reducer definitions for global non fetch states.
const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {},
  reducers: {
    changeUserInfo: (state, action) => {
      return action.payload;
    },
  },
});

export const { changeUserInfo } = userInfoSlice.actions;

// TODO:
// - Add definition for a state that stores user roles.

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
