import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ title, icon }) => {
  return (
    <div className="navbar">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">landing page</Link>
          </li>
          <li>
            <Link to="/users">users</Link>
          </li>
          <li>
            <Link to="/logger">IT logger</Link>
          </li>
          <li>
            <Link to="/contacts">contact keeper</Link>
          </li>
          <li>
            <Link to="/styleguide">styleguide</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: "WEB APP",
  icon: "",
};

export default Navbar;
