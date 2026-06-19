import { z } from "zod";

export const createTaskSchema = z
  .object({
    title: z.string().min(1, "Title cannot be empty").max(200),
    time: z.string().optional(),
    actionId: z.string().uuid().optional(),
  })
  .strict();

export const updateTaskSchema = z
  .object({
    title: z.string().min(1, "Title cannot be empty").max(200).optional(),
    time: z.string().optional(),
    completed: z.boolean().optional(),
    actionId: z.string().uuid().nullable().optional(),
  })
  .strict();

export const taskIdParamSchema = z
  .object({
    id: z.string().uuid("Invalid task id"),
  })
  .strict();

export type createTaskDTO = z.infer<typeof createTaskSchema>;
export type updateTaskDTO = z.infer<typeof updateTaskSchema>;
export type taskIdParamDTO = z.infer<typeof taskIdParamSchema>;
