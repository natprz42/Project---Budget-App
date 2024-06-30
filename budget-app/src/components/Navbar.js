import React from "react";
import logo from '../Logo.png';
const Navbar = ({ activeSidebar }) => {
    return (
        <div>
            <div id="sidebar" className={activeSidebar ? "active" : ""}>
                <div className="logo">
                    <img src={logo} alt={logo}/>
                </div>
                <div className="nav">
                    <a href="/home">Dashboard</a>
                    <a href="/about">Wallets</a>
                    <a href="/project">Stats</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;