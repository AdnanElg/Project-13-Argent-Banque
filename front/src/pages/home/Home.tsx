// Import modules:
import "./Home.scss";
import Banner from "../../components/banner/Banner";
import Card from "../../components/card/Card";

/**
 * Components Home
 * @component
 * @author El Ghalbzouri-Adnan <elghalbzouriadnan@gmail.com>
 * @returns {JSX.Element}
 */

const Home = (): JSX.Element => {
  return (
    <main className="container__home">
      <Banner />
      <Card />
    </main>
  );
};

// Export Home :
export default Home;
