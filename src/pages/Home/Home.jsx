import { WorldIDWidget } from "@worldcoin/id";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-left-area">
          <div className="hero-heading-section">
            <h1 className="hero-heading">
              Bridging
              <br />
              <span className="framed"> Trust</span>
              <br /> with zk
            </h1>
          </div>
          <div className="hero-subheading">
            Tackling problems in freelancing through trustless zk and reputation
            system
          </div>
        </div>
        <div className="hero-right-area">
          <div className="grid">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <br />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
