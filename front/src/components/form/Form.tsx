import "./Form.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin, setToken } from "../../services/features/LoginUser";
import spinner from "../../assets/svg/spinner.svg";
import axios from "axios";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        {
          email: email,
          password: password,
        }
      );
      if (response.status === 200) {
        dispatch(setLogin(true));
        dispatch(setToken(response.data.body.token));
        navigate("/profile");
        setIsLoading(false);
      } else {
        setLoginError(true);
        navigate("/login");
      }
    } catch (error) {
      setIsLoading(false);
      setLoginError(true);
      throw new Error(`Erreur d'authentification : ${error}`);
    }
  };

  return (
    <section className="container__form">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      {isLoading ? (
        <img
          className="container__form__loader"
          src={spinner}
          alt="Loading..."
        />
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <div className="container__form__input">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="container__form__input">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="container__form__check">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            {loginError ? (
              <p className="container__form__loginError">
                Please provide the correct username.
              </p>
            ) : null}
            <button className="container__form__btn">Sign In</button>
          </form>
        </>
      )}
    </section>
  );
};

export default Form;
