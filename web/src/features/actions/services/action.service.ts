import { axiosBaseQuery } from "@/redux/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import { CreateActionPayload, IAction } from "../types/action.types";
import { API_PATHS } from "@/constants/api.path";
import { ApiResponse } from "@/types/api.types";

export const actionService = createApi({
  reducerPath: "actionService",
  baseQuery: axiosBaseQuery(),
  tagTypes: ["Action"],

  endpoints: (builder) => ({
    // ── Create ──────────────────────────────────────────────────────────

    createAction: builder.mutation<IAction, CreateActionPayload>({
      query: (action) => ({
        url: API_PATHS.ACTIONS.CREATE,
        method: "POST",
        data: action,
      }),

      transformResponse: (response: ApiResponse<IAction>) => response.data,
      invalidatesTags: ["Action"],
    }),

    // ── Read all ────────────────────────────────────────────────────────

    getAction: builder.query<IAction[], void>({
      query: () => ({
        url: API_PATHS.ACTIONS.GET_ALL,
        method: "GET",
      }),
      transformResponse: (response: ApiResponse<IAction[]>) => response.data,
      providesTags: (result) =>
        result
          ? [
              ...result.map((action) => ({
                type: "Action" as const,
                id: action.id,
              })),
              { type: "Action" as const, id: "LIST" },
            ]
          : [{ type: "Action" as const, id: "LIST" }],
    }),
  }),
});

export const { useCreateActionMutation, useGetActionQuery } = actionService;
