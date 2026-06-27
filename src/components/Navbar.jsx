import { NavLink } from "react-router-dom";
import { useState } from "react";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import logo from "../assets/logo.png";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav className="navbar custom-navbar">

      <div className="container-fluid">

        <div className="navbarTop">

          <img src={logo} width="60" alt="Logo" />

          <button
            className="menuBtn"
            onClick={() => setMenuOpen(!menuOpen)}
          >

            {menuOpen
              ? <HiOutlineXMark />
              : <HiOutlineBars3 />
            }

          </button>

        </div>

        <ul className={`navMenu ${menuOpen ? "showMenu" : ""}`}>

          <li>
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
            >
              HOME
            </NavLink>
          </li>

          <li>
            <NavLink
              
              to="/about"
              onClick={() => setMenuOpen(false)}
            >
              ABOUT
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/projects"
              onClick={() => setMenuOpen(false)}
            >
              PROJECTS
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
            >
              CONTACT
            </NavLink>
          </li>

        </ul>

      </div>

    </nav>

  );

};

export default Navbar;