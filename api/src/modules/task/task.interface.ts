import { Task } from "@prisma/client";

export interface ITaskRepository {
  createTask(data: {
    userId: string;
    title: string;
    time?: string | null;
    actionId?: string | null;
  }): Promise<Task>;

  getTasksByUserId(userId: string): Promise<Task[]>;

  getTaskById(taskId: string): Promise<Task | null>;

  updateTask(
    taskId: string,
    data: Partial<{
      title: string;
      time: string | null;
      completed: boolean;
      actionId: string | null;
    }>,
  ): Promise<Task>;

  deleteTask(taskId: string): Promise<void>;
}
