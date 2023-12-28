// Import modules:
import "./Error.scss";
import notFound from "../../assets/svg/notFound.svg";
import { NavLink } from "react-router-dom";

/**
 * Components Error
 * @component
 * @author El Ghalbzouri-Adnan <elghalbzouriadnan@gmail.com>
 * @returns {JSX.Element}
 */
const Error = (): JSX.Element => {
  return (
    <section className="error">
      <img src={notFound} alt="image 404" />
      <p>Oops ! The page you are requesting does not exist.</p>
      <NavLink to="/">
        <span>Return to home page</span>
      </NavLink>
    </section>
  );
};

// Export Error
export default Error;
