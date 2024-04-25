import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const profilesApi = createApi({
  reducerPath: "profilesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/v1/" }),
  endpoints: (builder) => ({
    fetchProfiles: builder.query({
      query: () => "users",
    }),
  }),
});

export const { useFetchProfilesQuery } = profilesApi;
