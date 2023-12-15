import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import argentBankLogo from "../../assets/img/argentBankLogo.png";

const Navbar = () => {
  return (
    <header>
      <nav className="nav">
        <div className="nav__logo">
          <NavLink to="/">
            <img src={argentBankLogo} alt="Argent Bank Logo" />
          </NavLink>
        </div>
        <div className="nav__login">
          <NavLink to="/login">
            <i className="fa fa-user-circle"></i>
            <p>Sign In</p>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
