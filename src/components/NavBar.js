import React from 'react';
import Counter from "./Counter";
import "./navbar.css"

const NavBar = () => {
    return (
        <>
            <header> Dashboard </header>
            <div className="breadcumb-container">
                <span>Home / Dashboard / Workplace</span>
            </div>
            <div className="main-container">

                <div className="user-salute-container">
                    <img className="profile-img" src="https://vignette1.wikia.nocookie.net/sote-rp/images/c/c4/User-placeholder.png/revision/latest?cb=20150624004222" alt="Img here"></img>
                    <div className="user-salute-sub-container">
                        <span className="main-salute">Good morning, Serati Ma, i wish you happiness every day!</span>
                        <span className="user-background">
                            Interaction expert | Ant gold service-some certain business
                        </span>
                    </div>
                </div>
                <div className="counters-container">
                    <Counter props={{ title: "Number of items", number: "56" }} />
                    <div className="divider" />
                    <Counter props={{ title: "Teams ranking", number: "8" }} />
                    <div className="divider" />
                    <Counter props={{ title: "Project visits", number: "2,223" }} />
                </div>
            </div>
        </>
    );
}

export default NavBar;