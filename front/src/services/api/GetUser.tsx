// Import modules:
import axios from "axios";
import { ApiResponseType } from "../../types/services/api/GetUserType";

/**
 * Function to retrieve user information.
 * @param {string | null} token - User authentication token.
 * @returns {Promise<ApiResponseType>} Object containing user information.
 */
export const getUser = async (
  token: string | null
): Promise<ApiResponseType> => {
  const response = await axios.post(
    "http://localhost:3001/api/v1/user/profile",
    {},
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  return response.data;
};
