import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://l2-b2-todo-server.vercel.app/" }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => ({
        url: "/tasks",
        method: "GET",
      }),
    }),
    addTodo: builder.mutation({
      query: () => ({
        url: "/tasks",
        method: "POST",
      }),
    }),
  }),
});

export const { useGetTodosQuery, useAddTodoMutation } = baseApi;
