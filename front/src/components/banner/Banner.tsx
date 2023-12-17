import "./Banner.scss";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner__content">
        <h2>Promoted Content</h2>
        <ul>
          <li>No fees.</li>
          <li>No minimum deposit.</li>
          <li>High interest rates.</li>
        </ul>
        <p>Open a savings account with Argent Bank today!</p>
      </div>
    </section>
  );
};

export default Banner;
