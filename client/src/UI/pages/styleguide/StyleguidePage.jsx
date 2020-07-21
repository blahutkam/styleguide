import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Styleguide = () => {
  return (
    <Fragment>
      <h1>Styleguide</h1>
      <div className="row">
        <div className="col-4">
          <div className="panel">
            <ul>
              <li>
                <Link to="/buttons">Buttons</Link>
              </li>
              <li>
                <Link to="/charts">Charts</Link>
              </li>
              <li>
                <Link to="/colors">Colors</Link>
              </li>
              <li>
                <Link to="/datepicker">Datepicker</Link>
              </li>
              <li>
                <Link to="/grid">Grid</Link>
              </li>
              <li>
                <Link to="/lightbox">Lightbox</Link>
              </li>
              <li>
                <Link to="/loading">Loading</Link>
              </li>
              <li>
                <Link to="/pagination">Pagination</Link>
              </li>
              <li>
                <Link to="/panel">Panel</Link>
              </li>
              <li>
                <Link to="/table">Table</Link>
              </li>
              <li>
                <Link to="/tooltip">Tooltip</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Styleguide;
