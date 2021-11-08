import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">Get notified when we launch</h2>
      <form className="footer__form">
        <input className="footer__email" placeholder="Email address" />
        <button className="footer__button">Get notified</button>
      </form>
    </footer>
  );
}

export default Footer;
