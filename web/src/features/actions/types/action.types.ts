export interface IAction {
  id: string;
  userId: string;
  actionName: string;
  createdAt: string;
  updatedAt: string;
}

// Mirrors createActionSchema (api/src/modules/action/action.schema.ts)
export interface CreateActionPayload {
  actionName: string;
}

// Mirrors updateActionSchema (api/src/modules/action/action.schema.ts)
export interface UpdateActionPayload {
  userId: string;
  actionName: string;
}
