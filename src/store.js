// TODO:
// - Copy the auth example from the RTK Query documentation site.
// - Modify it to submit the POST request to the sign in endpoint.
// - Make it store the user name in the global state.
// - Add the get request within the same api, have no idea how to do that.
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { configureStore, createSlice } from "@reduxjs/toolkit";

// RTK Query setup
const jwtingBackend = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jwting.herokuapp.com:443",
    // prepareHeaders: (headers, { getState }) => {
    //   // By default, if we have a token in the store, let's use that for authenticated requests
    //   const token = getState().auth.token;
    //   if (token) {
    //     headers.set("authorization", `Bearer ${token}`);
    //   }
    //   return headers;
    // },
  }),
  tagTypes: ["UserInfo"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/signin",
        method: "POST",
        body: credentials,
      }),
      // Pick out data and prevent nested properties in a hook or selector
      // transformResponse: (response) => response.unwrap,
      invalidatesTags: ["UserInfo"],
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
  }),
});

export const { useLoginMutation } = jwtingBackend;

// Redux Toolkit reducer definitions
// const userInfoSlice = createSlice({
//   name: "userInfo",
//   initialState: {},
//   reducers: {
//     changeUserInfo: (state, action) => {
//       const credentials = {
//         name: action.payload.name,
//         password: action.payload.password,
//       };
//       const result = useLoginMutation(credentials);
//       console.log(result);
//       return action.payload.name;
//     },
//   },
// });

// export const { changeUserInfo } = userInfoSlice.actions;

// Global store configuration the store
export const store = configureStore({
  reducer: {
    [jwtingBackend.reducerPath]: jwtingBackend.reducer,
    // [userInfoSlice.name]: userInfoSlice.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jwtingBackend.middleware),
});

export default store;
