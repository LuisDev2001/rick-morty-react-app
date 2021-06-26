import React from "react";

import "./styles/Loader.css";

import LoaderImg from "../assets/images/loader.svg";

class Loader extends React.Component {
  render() {
    return (
      <div className="loader">
        <img src={LoaderImg} alt="Loader" />
        <span>Cargando...</span>
      </div>
    );
  }
}

export default Loader;
