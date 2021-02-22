import React from "react";
import Typed from "react-typed";


const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Hello! Welcome to my Portfolio</h1>

                <Typed 
                    className="typed-text"
                    strings={["UX/UI Design", "Front-End Development", "Web Applications", "Game Development"]}
                    typeSpeed={50}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn main-offer">connect with me</a>
            </div>
        </div>
    )
}

export default Header;
