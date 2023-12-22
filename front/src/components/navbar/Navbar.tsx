import "./Navbar.scss";
import { NavLink, useNavigate } from "react-router-dom";
import argentBankLogo from "../../assets/img/argentBankLogo.png";
import { useDispatch, useSelector } from "react-redux";
import {
  setFirstName,
  setLastName,
} from "../../services/features/GetUserProfile";
import { setLogin, setToken } from "../../services/features/LoginUser";
import { useEffect, useState } from "react";
import spinner from "../../assets/svg/spinner.svg";
import axios from "axios";
import { LoginUseType } from "../../services/features/LoginUser";
import { getUserProfile } from "../../services/features/GetUserProfile";

// ! Ne pas oublier de réglez le probléme : si je retourne en arriére mon sign out reste sur ma navbar ?
const Navbar = () => {
  const dispatch = useDispatch();
  const loginUser = useSelector(
    (state: LoginUseType) => state.loginUser.isLogin
  );
  const firstName = useSelector(
    (state: getUserProfile) => state.getUserProfile.firstName
  );
  const token = localStorage.getItem("TOKEN");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (token === null && window.location.pathname === "/profile") {
      navigate("/login");
      dispatch(setLogin(false));
      dispatch(setToken(null));
    } else if (token) {
      dispatch(setLogin(true));
      dispatch(setToken(token));

      const getUserProfile = async () => {
        try {
          setIsLoading(true);
          const response = await axios.post(
            "http://localhost:3001/api/v1/user/profile",
            {},
            {
              headers: {
                Authorization: "Bearer " + token,
              },
            }
          );
          if (response.status === 200) {
            dispatch(setFirstName(response.data.body.firstName));
            dispatch(setLastName(response.data.body.lastName));
            setIsLoading(false);
            setError(false);
          }
        } catch (error) {
          setError(true);
          setIsLoading(false);
          throw new Error(
            `Error retrieving user profile. Please try again later, ${error}`
          );
        }
      };

      if (loginUser) {
        getUserProfile();
      }
    }
  }, [dispatch, loginUser, navigate, token]);

  const handleLogout: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    dispatch(setLogin(false));
    dispatch(setToken(null));
    localStorage.removeItem("TOKEN");
    navigate("/");
  };

  return (
    <header>
      <nav className="nav">
        <div className="nav__logo">
          <NavLink to={loginUser ? "/profile" : "/"}>
            <img src={argentBankLogo} alt="Argent Bank Logo" />
            <h1>Argent Bank</h1>
          </NavLink>
        </div>
        <div className="nav__login">
          <NavLink to={loginUser ? "/profile" : "/login"}>
            <i className="fa fa-user-circle"></i>
            {loginUser ? (
              <p>
                {isLoading ? (
                  <img src={spinner} alt="loading..." />
                ) : error ? (
                  "Null"
                ) : (
                  firstName
                )}
              </p>
            ) : (
              <p>Sign In</p>
            )}
          </NavLink>
          {loginUser && (
            <button type="submit" onClick={handleLogout}>
              <i className="fa fa-sign-out"></i>
              <p>Sign Out</p>
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
