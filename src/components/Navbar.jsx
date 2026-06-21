import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar custom-navbar">
      <div className="container-fluid d-flex align-items-center justify-content-between">

        <div className="d-flex align-items-center gap-2">
          <img src={logo} width="60" alt="Logo" />
        </div>

        <ul className="nav nav-underline mb-0">

          <li className="nav-item mx-3">
            <NavLink className="nav-link fw-semibold" to="/">
              HOME
            </NavLink>
          </li>

          <li className="nav-item mx-3">
            <NavLink className="nav-link fw-semibold" to="/about">
              ABOUT
            </NavLink>
          </li>

          <li className="nav-item mx-3">
            <NavLink className="nav-link fw-semibold" to="/projects">
              PROJECTS
            </NavLink>
          </li>

          <li className="nav-item mx-3">
            <NavLink className="nav-link fw-semibold" to="/contact">
              CONTACT
            </NavLink>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;