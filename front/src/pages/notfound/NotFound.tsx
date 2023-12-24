// Import modules:
import "./NotFound.scss";
import Error from "../../components/error/Error";

/**
 * Components NotFound
 * @component
 * @author El Ghalbzouri-Adnan <elghalbzouriadnan@gmail.com>
 * @returns {JSX.Element}
 */
const NotFound = (): JSX.Element => {
  return (
    <main className="container__notfound">
      <Error />
    </main>
  );
};

// Export NotFound :
export default NotFound;
