// Type :
export type UpdateUserType = {
  status: number;
  message: string;
  body?: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  };
};
