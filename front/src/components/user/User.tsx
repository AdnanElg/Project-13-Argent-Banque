// Import modules:
import "./User.scss";
import { SetStateAction, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setFirstName,
  setLastName,
} from "../../services/features/GetUserProfile";
import {
  FirstNameType,
  LastNameType,
} from "../../types/services/features/GetUserProfileType";
import { TokenType } from "../../types/services/features/LoginUserType";
import spinner from "../../assets/svg/spinner.svg";
import { updateUser } from "../../services/api/UpdateUser";

/**
 * Components User
 * @component
 * @author El Ghalbzouri-Adnan <elghalbzouriadnan@gmail.com>
 * @returns {JSX.Element}
 */
const User = (): JSX.Element => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editFirstName, setEditFirstName] = useState<string>("");
  const [editLastName, setEditLastName] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const firstName = useSelector(
    (state: FirstNameType) => state.getUserProfile.firstName
  );
  const lastName = useSelector(
    (state: LastNameType) => state.getUserProfile.lastName
  );
  const token = useSelector((state: TokenType) => state.loginUser.token);

  const handleEdit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsEditing(true);
    setEditFirstName("");
    setEditLastName("");
  };

  const handleCancel = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsEditing(false);
    setEditFirstName("");
    setEditLastName("");
  };

  const handleChangeFirstName = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setEditFirstName(e.target.value);
  };

  const handleChangeLastName = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setEditLastName(e.target.value);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await updateUser(editFirstName, editLastName, token);
      if (response.status === 200) {
        setIsLoading(false);
        dispatch(setFirstName(editFirstName));
        dispatch(setLastName(editLastName));
        setIsEditing(false);
        setError(false);
      }
    } catch (error) {
      setError(true);
      setIsLoading(false);
      throw new Error(`An error occurred while updating the profile, ${error}`);
    }
  };

  return (
    <section className="user">
      {isEditing ? (
        <>
          <h1>Welcome back</h1>
          {isLoading ? (
            <img src={spinner} alt="Loading..." />
          ) : (
            <>
              {error ? (
                <p className="user__error">
                  An error has occurred : Unable to update profile
                </p>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="block__input">
                    <input
                      type="text"
                      required
                      placeholder={firstName || ""}
                      value={editFirstName}
                      onChange={handleChangeFirstName}
                    />
                    <input
                      type="text"
                      required
                      placeholder={lastName || ""}
                      value={editLastName}
                      onChange={handleChangeLastName}
                    />
                  </div>
                  <div className="block__btn">
                    <button type="submit">Save</button>
                    <button type="submit" onClick={handleCancel}>
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </>
          )}
        </>
      ) : (
        <>
          <h1>
            Welcome back
            <br />
            {firstName} {lastName}!
          </h1>
          <button onClick={handleEdit} type="submit">
            Edit Name
          </button>
        </>
      )}
    </section>
  );
};

// Export User
export default User;
