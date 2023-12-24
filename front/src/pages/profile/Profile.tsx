// Import modules:
import "./Profile.scss";
import User from "../../components/user/User";
import Card from "../../components/card/Card";

/**
 * Components Profile
 * @component
 * @author El Ghalbzouri-Adnan <elghalbzouriadnan@gmail.com>
 * @returns {JSX.Element}
 */
const Profile = (): JSX.Element => {
  return (
    <main className="container__profile">
      <User />
      <Card />
    </main>
  );
};

// Export Profile
export default Profile;
