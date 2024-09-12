import React from "react";
import navLogo from "../assets/NavLogo.png";
import "../style/Navbar.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import menuLogo from "../assets/icon-menu.svg"

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <nav
        className="container py-2 d-flex
      justify-content-between"
      >
        <div className="d-flex align-items-center gap-2">
          <img src={navLogo} alt="nav-logo" className="img-flui" />
          <h2>Innoson Group</h2>
        </div>
        <ul
          className="d-none d-lg-flex align-items-center gap-5
        list-unstyled"
        >
          <li>Home</li>
          <li>Companies</li>
          <li>Products</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        {/* offcanvas */}
        <div className="d-md-block d-lg-none mt-2">
          <div onClick={handleShow}className="d-lg-none">
            <img src={menuLogo} alt="icon-menu"
            className="icon-menu" />
          </div>

          <Offcanvas show={show} onHide={handleClose} className="w-75">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              Some text as placeholder. In real life you can have the elements
              you have chosen. Like, text, images, lists, etc.
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
