// Import modules:
import axios from "axios";
import { LoginResponseType } from "../../types/services/api/LoginUserType";

/**
 * Function to authenticate a user.
 * @param {string} email - User's email address.
 * @param {string} password - User's password.
 * @returns {Promise<LoginResponseType>} Object containing authentication information.
 */
export const loginUser = async (
  email: string,
  password: string
): Promise<LoginResponseType> => {
  const response = await axios.post("http://localhost:3001/api/v1/user/login", {
    email: email,
    password: password,
  });

  return response.data;
};
