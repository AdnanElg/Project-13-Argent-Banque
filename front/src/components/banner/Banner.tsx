// Import modules:
import "./Banner.scss";
import { ListBannerType } from "../../types/components/banner/BannerType";

/**
 * Components Banner
 * @component
 * @author El Ghalbzouri-Adnan <elghalbzouriadnan@gmail.com>
 * @returns {JSX.Element}
 */
const Banner = (): JSX.Element => {
  const listBanner: ListBannerType = [
    {
      id: 1,
      content: "No fees.",
    },
    {
      id: 2,
      content: "No minimum deposit.",
    },
    {
      id: 3,
      content: "High interest rates.",
    },
  ];
  return (
    <section className="banner">
      <div className="banner__content">
        <h2>Promoted Content</h2>
        <ul>
          {listBanner.map((list) => {
            return <li key={list.id}>{list.content}</li>;
          })}
        </ul>
        <p>Open a savings account with Argent Bank today!</p>
      </div>
    </section>
  );
};

// Export Banner
export default Banner;
