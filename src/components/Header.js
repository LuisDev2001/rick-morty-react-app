import React from "react";

import "./styles/Header.css";

import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" />
    </header>
  );
};

export default Header;
