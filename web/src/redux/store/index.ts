import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/auth.slice";
import { taskService } from "@/features/tasks/services/task.service";


export const store = configureStore({
  reducer: {
    auth: authReducer,

    [taskService.reducerPath]: taskService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(taskService.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
