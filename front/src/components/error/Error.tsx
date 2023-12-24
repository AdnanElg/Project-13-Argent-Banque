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
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/">
        <span>Retourner sur la page d'accueil</span>
      </NavLink>
    </section>
  );
};

// Export Error
export default Error;
