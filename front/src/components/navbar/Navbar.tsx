import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import argentBankLogo from "../../assets/img/argentBankLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { setFirstName, setLastName } from "../../services/features/GetUserProfile";
import { setLogin, setToken } from "../../services/features/LoginUser";
import { useEffect } from "react";
import axios from "axios";

const Navbar = () => {
  const dispatch = useDispatch();
  const loginUser = useSelector((state) => state.loginUser.isLogin);
  const firstName = useSelector((state) => state.getUserProfile.firstName);
  const token = useSelector((state) => state.loginUser.token);
  const storedToken = localStorage.getItem('TOKEN');


  useEffect(() => {
    if (storedToken) {
      dispatch(setLogin(true));
      dispatch(setToken(storedToken));
    }
    
    const getUserProfile = async () => {
      try {
        const response = await axios.post(
          'http://localhost:3001/api/v1/user/profile',{},
          {
            headers: {
              'Authorization': 'Bearer ' + token,
            },
          }
        );
        if (response.status === 200) {
          dispatch(setFirstName(response.data.body.firstName));
          dispatch(setLastName(response.data.body.lastName));
        }
      } catch (error) {
        throw new Error(`Error retrieving user profile. Please try again later, ${error}`)
      }
    };

    if (loginUser) {
      getUserProfile();
    }
  }, [dispatch, loginUser, storedToken, token]);


  const handleLogout = () => {
    dispatch(setLogin(false));
    dispatch(setToken(null));
    localStorage.removeItem('TOKEN');
  }

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
              {loginUser ? <p>{firstName}</p> : <p>Sign In</p>}
            </NavLink>
          {loginUser && (
            <NavLink to="/">
              <i className="fa fa-sign-out"></i>
              <p onClick={handleLogout}>Sign Out</p>
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
