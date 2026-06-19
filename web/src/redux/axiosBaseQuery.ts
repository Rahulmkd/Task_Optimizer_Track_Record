import { api } from "@/lib/axios";
import { BaseQueryFn } from "@reduxjs/toolkit/query";
import { AxiosError, AxiosRequestConfig } from "axios";

interface AxiosArgs {
  url: string;
  method: AxiosRequestConfig["method"];
  data?: unknown;
  params?: unknown;
}

interface AxiosErrorResponse {
  status?: number;
  data?: unknown;
}

export const axiosBaseQuery =
  (): BaseQueryFn<AxiosArgs, unknown, AxiosErrorResponse> =>
  async ({ url, method, data, params }) => {
    try {
      const result = await api({
        url,
        method,
        data,
        params,
      });

      return { data: result.data };
    } catch (error) {
      const err = error as AxiosError;

      return {
        error: {
          status: err.response?.status ?? 500,
          data: err.response?.data ?? err.message,
        },
      };
    }
  };
