import { TaskRepository } from "./task.repository.js";
import { TaskService } from "./task.service.js";

const taskRepository = new TaskRepository();
const taskService = new TaskService(taskRepository);

export { taskService };
