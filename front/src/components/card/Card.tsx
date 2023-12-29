// Import modules:
import "./Card.scss";
import iconChat from "../../assets/img/iconChat.png";
import iconMoney from "../../assets/img/iconMoney.png";
import iconSecurity from "../../assets/img/iconSecurity.png";
import {
  ListItemHomeType,
  ListItemProfile,
} from "../../types/components/card/CardType";
import { useLocation } from "react-router-dom";

/**
 * Components Card
 * @component
 * @author El Ghalbzouri-Adnan <elghalbzouriadnan@gmail.com>
 * @returns {JSX.Element}
 */
const Card = (): JSX.Element => {
  const location = useLocation();

  const listItemHome: ListItemHomeType = [
    {
      id: 1,
      picture: iconChat,
      title: "You are our #1 priority",
      text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    },
    {
      id: 2,
      picture: iconMoney,
      title: "More savings means higher rates",
      text: "The more you save with us, the higher your interest rate will be!",
    },
    {
      id: 3,
      picture: iconSecurity,
      title: "Security you can trust",
      text: "We use top of the line encryption to make sure your data and money is always safe.",
    },
  ];

  const listItemProfile: ListItemProfile = [
    {
      id: 4,
      title: "Argent Bank Checking (x8349)",
      price: "$2,082.79",
      text: "Available Balance",
    },
    {
      id: 5,
      title: "Argent Bank Savings (x6712)",
      price: "$10,928.42",
      text: "Available Balance",
    },
    {
      id: 6,
      title: "Argent Bank Credit Card (x8349)",
      price: "$184.30",
      text: "Current Balance",
    },
  ];

  return (
    <section>
      {location.pathname === "/" && (
        <div className="card__home">
          <h2>Features</h2>
          {listItemHome.map((item) => (
            <div className="card__home__item" key={item.id}>
              <img src={item.picture} alt="icône" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      )}

      {location.pathname === "/profile" && (
        <div className="card__profile">
          <h2>Accounts</h2>
          {listItemProfile.map((item) => (
            <div key={item.id} className="card__profile__account">
              <div className="card__profile__account__content-wrapper">
                <h3>{item.title}</h3>
                <span>{item.price}</span>
                <p>{item.text}</p>
              </div>
              <div className="card__profile__account__content-wrapper">
                <button type="submit">View transactions</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

// Export Card
export default Card;
