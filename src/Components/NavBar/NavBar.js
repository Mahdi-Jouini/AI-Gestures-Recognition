  import React from "react";
  import 'bootstrap/dist/css/bootstrap.min.css';
  import logo from "../assets/logo.png";
  import './NavBar.css'
  const NavBar = () => {
    return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <img className='logo mr-auto' src={logo} alt="" width="40" height="40" />
    <h3 className="ml-auto">Sign Translator</h3>
    <div className="NavBarItems" id="navbarNav">
      {/* Nav Bar Item*/}
    </div>
  </nav>
    );
  };

  export default NavBar;

