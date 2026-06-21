import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/auth.slice";
import { taskService } from "@/features/tasks/services/task.service";
import { actionService } from "@/features/actions/services/action.service";

export const store = configureStore({
  reducer: {
    auth: authReducer,

    [actionService.reducerPath]: actionService.reducer,

    [taskService.reducerPath]: taskService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      actionService.middleware,
      taskService.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
