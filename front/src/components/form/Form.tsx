// Import modules:
import "./Form.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsLogin, setToken } from "../../services/features/LoginUser";
import { loginUser } from "../../services/api/LoginUser";
import spinner from "../../assets/svg/spinner.svg";

/**
 * Components Form
 * @component
 * @author El Ghalbzouri-Adnan <elghalbzouriadnan@gmail.com>
 * @returns {JSX.Element}
 */
const Form = (): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await loginUser(email, password);
      if (response.status === 200) {
        dispatch(setIsLogin(true));
        dispatch(setToken(response.body.token));
        navigate("/profile");
        setIsLoading(false);
      } else {
        setError(true);
        navigate("/login");
      }
    } catch (error) {
      setIsLoading(false);
      setError(true);
      throw new Error(`Erreur d'authentification : ${error}`);
    }
  };

  return (
    <section className="form">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      {isLoading ? (
        <img className="form__loader" src={spinner} alt="Loading..." />
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <div className="form__input">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form__input">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form__check">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            {error ? (
              <p className="form__loginError">
                Please provide the correct username.
              </p>
            ) : null}
            <button className="form__btn">Sign In</button>
          </form>
        </>
      )}
    </section>
  );
};

// Export Form
export default Form;
