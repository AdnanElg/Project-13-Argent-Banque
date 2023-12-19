import "./Error.scss";
import notFound from "../../assets/svg/notFound.svg";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <section className="container__error">
      <img src={notFound} alt="image 404" />
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/">
        <span>Retourner sur la page d'accueil</span>
      </NavLink>
    </section>
  );
};

export default Error;
