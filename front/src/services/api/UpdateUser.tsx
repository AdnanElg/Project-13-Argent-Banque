// Import modules:
import axios from "axios";
import { UpdateUserType } from "../../types/services/api/UpdateUserType";

/**
 * Function to update user profile information.
 * @param {string} editFirstName - Updated first name.
 * @param {string} editLastName - Updated last name.
 * @param {string | null} token - User authentication token.
 * @returns {Promise<UpdateUserType>} Object containing update information.
 */
export const updateUser = async (
  editFirstName: string,
  editLastName: string,
  token: string | null
): Promise<UpdateUserType> => {
  const response = await axios.put(
    "http://localhost:3001/api/v1/user/profile",
    {
      firstName: editFirstName,
      lastName: editLastName,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};
