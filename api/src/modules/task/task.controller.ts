import { Request, Response } from "express";
import { catchAsync } from "../../utils/CatchAsync.js";
import { taskService } from "./task.container.js";
import { sendResponse } from "../../utils/sendResponse.js";
import { AppError } from "../../utils/AppError.js";

/* -------------------------------------------------------------------------- */
/*                                  HELPERS                                   */
/* -------------------------------------------------------------------------- */

const getParamId = (req: Request): string => {
  const id = req.params.id;

  if (typeof id !== "string") {
    throw new AppError("Invalid task id", 400);
  }

  return id;
};

/* -------------------------------------------------------------------------- */
/*                                 CREATE TASK                                */
/* -------------------------------------------------------------------------- */

export const createTaskController = catchAsync(
  async (req: Request, res: Response) => {
    const result = await taskService.createTask(req.user.id, req.body);

    sendResponse(res, 201, {
      success: true,
      message: "Task created successfully",
      data: result,
    });
  },
);

/* -------------------------------------------------------------------------- */
/*                              GET ALL TASKS                                 */
/* -------------------------------------------------------------------------- */

export const getTasksController = catchAsync(
  async (req: Request, res: Response) => {
    const result = await taskService.getTasksForUser(req.user.id);

    sendResponse(res, 200, {
      success: true,
      message: "Tasks fetched successfully",
      data: result,
    });
  },
);

/* -------------------------------------------------------------------------- */
/*                              GET TASK BY ID                                */
/* -------------------------------------------------------------------------- */

export const getTaskByIdController = catchAsync(
  async (req: Request, res: Response) => {
    const taskId = getParamId(req);

    const result = await taskService.getTaskById(req.user.id, taskId);

    sendResponse(res, 200, {
      success: true,
      message: "Task fetched successfully",
      data: result,
    });
  },
);

/* -------------------------------------------------------------------------- */
/*                                 UPDATE TASK                                */
/* -------------------------------------------------------------------------- */

export const updateTaskController = catchAsync(
  async (req: Request, res: Response) => {
    const taskId = getParamId(req);

    const result = await taskService.updateTask(req.user.id, taskId, req.body);

    sendResponse(res, 200, {
      success: true,
      message: "Task updated successfully",
      data: result,
    });
  },
);

/* -------------------------------------------------------------------------- */
/*                            TOGGLE TASK COMPLETION                          */
/* -------------------------------------------------------------------------- */

export const toggleTaskController = catchAsync(
  async (req: Request, res: Response) => {
    const taskId = getParamId(req);

    const result = await taskService.toggleTaskCompletion(req.user.id, taskId);

    sendResponse(res, 200, {
      success: true,
      message: "Task status updated successfully",
      data: result,
    });
  },
);

/* -------------------------------------------------------------------------- */
/*                                 DELETE TASK                                */
/* -------------------------------------------------------------------------- */

export const deleteTaskController = catchAsync(
  async (req: Request, res: Response) => {
    const taskId = getParamId(req);

    await taskService.deleteTask(req.user.id, taskId);

    sendResponse(res, 200, {
      success: true,
      message: "Task deleted successfully",
    });
  },
);
