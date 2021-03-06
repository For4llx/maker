import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "./css/style.css";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Home />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
