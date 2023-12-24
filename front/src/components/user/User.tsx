import "./User.scss";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getUserProfile,
  setFirstName,
  setLastName,
} from "../../services/features/GetUserProfile";
import { LoginUseType } from "../../services/features/LoginUser";
import spinner from "../../assets/svg/spinner.svg";
import axios from "axios";

const User = () => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editFirstName, setEditFirstName] = useState("");
  const [editLastName, setEditLastName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const firstName = useSelector(
    (state: getUserProfile) => state.getUserProfile.firstName
  );
  const lastName = useSelector(
    (state: getUserProfile) => state.getUserProfile.lastName
  );
  const token = useSelector((state: LoginUseType) => state.loginUser.token);

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

  const handleChangeFirstName = (e) => {
    setEditFirstName(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setEditLastName(e.target.value);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      setIsLoading(true);
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
                      placeholder={firstName}
                      value={editFirstName}
                      onChange={handleChangeFirstName}
                    />
                    <input
                      type="text"
                      required
                      placeholder={lastName}
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

export default User;
