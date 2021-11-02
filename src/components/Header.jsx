import React from "react";
import logo from "../assets/logo.svg";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">
        <img src={logo} alt="logo" />
      </h1>
    </header>
  );
}

export default Header;
