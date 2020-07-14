import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>users</Link>

        </li>
        <li>
          <Link to='/logger'>IT logger</Link>
        </li>
        <li>
          <Link to='/styleguide'>styleguide</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
