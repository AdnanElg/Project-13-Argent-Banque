import "./User.scss";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getUserProfile,
  setFirstName,
  setLastName,
} from "../../services/features/GetUserProfile";
import { LoginUseType } from "../../services/features/LoginUser";
import axios from "axios";

//! Ne pas oublier d'ajouter le loader, gérez le responsive du formulaire, gerez typescrypt  :
const User = () => {
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);

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
  };

  const handleChangeFirstName = (e) => {
    dispatch(setFirstName(e.target.value));
  };

  const handleChangeLastName = (e) => {
    dispatch(setLastName(e.target.value));
  };

  const handleCancel = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "http://localhost:3001/api/v1/user/profile",
        {
          firstName: firstName,
          lastName: lastName,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        setIsEditing(false);
      }
    } catch (error) {
      throw new Error(`An error occurred while updating the profile, ${error}`);
    }
  };

  return (
    <section className="user">
      {isEditing ? (
        <>
          <h1>Welcome back</h1>
          <form onSubmit={handleSubmit}>
            <div className="block__input">
              <input
                type="text"
                value={firstName}
                onChange={handleChangeFirstName}
              />
              <input
                type="text"
                value={lastName}
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
