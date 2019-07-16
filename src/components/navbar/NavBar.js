import React from "react";
import Counter from "../counter/Counter";
import "./navbar.css";

const NavBar = () => {
  return (
    <>
      <header> Dashboard </header>
      <div className="header-container">
        <div className="breadcumb-container">
          <span>Home / Dashboard / Workplace</span>
        </div>
        <div className="main-container">
          <div className="user-salute-container">
            <img
              className="profile-img"
              src="https://vignette1.wikia.nocookie.net/sote-rp/images/c/c4/User-placeholder.png/revision/latest?cb=20150624004222"
              alt="Img here"
            />
            <div className="user-salute-sub-container">
              <span className="main-salute">
                Good morning, Serati Ma, i wish you happiness every day!
              </span>
              <span className="user-background">
                Interaction expert | Ant gold service-some certain business
              </span>
            </div>
          </div>
          <div className="counters-container">
            <Counter className="counter-component" title="Number of items">
              <div className="counter-sub-element">
                <span className="counter-number">56</span>
              </div>
            </Counter>
            <div className="vbar" />
            <Counter className="counter-component" title="Team ranking">
              <div className="counter-sub-element">
                <span className="counter-number">8</span>
                <span className="counter-sub-number">/24</span>
              </div>
            </Counter>
            <div className="vbar" />
            <Counter className="counter-component" title="Project visit">
              <div className="counter-sub-element">
                <span className="counter-number">2,223</span>
              </div>
            </Counter>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
