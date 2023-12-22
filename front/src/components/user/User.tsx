import "./User.scss";
import { useSelector } from "react-redux";
import { getUserProfile } from "../../services/features/GetUserProfile";

const User = () => {
  const firstName = useSelector(
    (state: getUserProfile) => state.getUserProfile.firstName
  );
  const lastName = useSelector(
    (state: getUserProfile) => state.getUserProfile.lastName
  );

  return (
    <section className="user">
      <h1>
        Welcome back
        <br />
        {firstName} {lastName}!
      </h1>
      <button className="edit-button" type="submit">
        Edit Name
      </button>
    </section>
  );
};

export default User;
