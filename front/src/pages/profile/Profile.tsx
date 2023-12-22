import "./Profile.scss";
import User from "../../components/user/User";
import Card from "../../components/card/Card";

const Profile = () => {
  return (
    <main className="profile">
      <User />
      <Card />
    </main>
  );
};

export default Profile;
