export type UserResponseDTO = {
  id: string;
  firstName: string;
  lastName: string | null;
  email: string;
  phoneNumber: string;
  createdAt: Date;
  updatedAt: Date;
};
