import React from "react";
import navLogo from "../assets/NavLogo.png";
import "../style/Navbar.css"

const Navbar = () => {
  return (
    <>
      <nav className='container py-2 d-flex
      justify-content-between'>
        <div className='d-flex align-items-center gap-2'>
          <img src={navLogo} alt="nav-logo" className='img-flui' />
          <h2>Innoson Group</h2>
        </div>
        <ul className='d-flex align-items-center gap-5
        list-unstyled'>
          <li>Home</li>
          <li>Companies</li>
          <li>Products</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  ); 
};

export default Navbar;
