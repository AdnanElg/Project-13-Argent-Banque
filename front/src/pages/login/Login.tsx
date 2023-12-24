// Import modules:
import "./Login.scss";
import Form from "../../components/form/Form";

/**
 * Components Login
 * @component
 * @author El Ghalbzouri-Adnan <elghalbzouriadnan@gmail.com>
 * @returns {JSX.Element}
 */

const Login = (): JSX.Element => {
  return (
    <main className="container__login">
      <Form />
    </main>
  );
};

// Export Login
export default Login;
