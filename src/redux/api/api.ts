import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    getTask: builder.query({
      query: () => "/task",
    }),
  }),
});
