import "./Card.scss";
import iconChat from "../../assets/img/iconChat.png";
import iconMoney from "../../assets/img/iconMoney.png";
import iconSecurity from "../../assets/img/iconSecurity.png";

const Card = () => {
  const listItem = [
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

  return (
    <section className="card">
      <h2>Features</h2>
      {listItem.map((item) => {
        return (
          <div className="card__item" key={item.id}>
            <img src={item.picture} alt="icône" />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Card;
