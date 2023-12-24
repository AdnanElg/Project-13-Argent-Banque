// Type :
export type UserProfileType = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export type ApiResponseType = {
  status: number;
  message: string;
  body: UserProfileType;
};
