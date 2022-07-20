import { Link } from 'react-router-dom';
import * as React from 'react';

const NavBar = () => {
  return (
    <div>
      <h1>Product </h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to="/">List</Link> | <Link to="/add">Add</Link>
      </nav>
    </div>
  );
};

export default NavBar;
