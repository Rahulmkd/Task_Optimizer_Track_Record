import { Task } from "@prisma/client";
import { TaskResponseDTO } from "./task.response.js";

export const toTaskResponse = (task: Task): TaskResponseDTO => {
  return {
    id: task.id,
    userId: task.userId,
    actionId: task.actionId,
    title: task.title,
    time: task.time,
    completed: task.completed,
    createdAt: task.createdAt,
    updatedAt: task.updatedAt,
  };
};

export const toTaskListResponse = (tasks: Task[]): TaskResponseDTO[] =>
  tasks.map(toTaskResponse);
