// HomePage.js
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css';
import deafST from "../assets/deaf.svg";
const HomePage = ({ onNavigate }) => {
  return (
<div className="Home">
{/*Cardds*/}
<div class="d-flex justify-content-center">
  <div className="row">
    <div className="col">
      <button className="SigneTranslator" onClick={() => onNavigate("app")}>
      <p>Sign To Texte</p>
      <img className="deaf" src={deafST} alt=""/>
      </button>
      </div>
    </div>
  </div>
</div>
  );
};
export default HomePage;