const AUTH_BASE = "/api/v1/auth";
const TASKS_BASE = "/api/v1/task";

export const API_PATHS = {
  AUTH: {
    REGISTER: `${AUTH_BASE}/register`,
    LOGIN: `${AUTH_BASE}/login`,
    LOGOUT: `${AUTH_BASE}/logout`,
    ME: `${AUTH_BASE}/me`,
    CHANGE_PASSWORD: `${AUTH_BASE}/change-password`,
    FORGOT_PASSWORD: `${AUTH_BASE}/forgot-password`,
    RESET_PASSWORD: `${AUTH_BASE}/reset-password-token`,
    REFRESH_TOKEN: `${AUTH_BASE}/refresh-token`,
  },

  TASKS: {
    BASE: TASKS_BASE,
    CREATE: `${TASKS_BASE}`,
    GET_ALL: `${TASKS_BASE}`,
    GET_BY_ID: (id: string) => `${TASKS_BASE}/${id}`,
    UPDATE: (id: string) => `${TASKS_BASE}/${id}`,
    TOGGLE: (id: string) => `${TASKS_BASE}/${id}/toggle`,
    DELETE: (id: string) => `${TASKS_BASE}/${id}`,
  },
} as const;
