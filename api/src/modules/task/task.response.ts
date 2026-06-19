export type TaskResponseDTO = {
  id: string;
  userId: string;
  actionId: string | null;
  title: string;
  time: string | null;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
};
