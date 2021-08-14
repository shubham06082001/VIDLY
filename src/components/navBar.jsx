import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <React.Fragment>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link class='navbar-brand' to='/'>
          VIDLY
        </Link>
        <button
          class='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div class='navbar-nav'>
            <Link class='nav-item nav-link' to='/movies'>
              Movies <span class='sr-only'>(current)</span>
            </Link>
            <Link class='nav-item nav-link' to='/rentals'>
              Rentals
            </Link>
            <Link class='nav-item nav-link' to='/customers'>
              Customers
            </Link>
            <Link class='nav-item nav-link' to='/customers'>
              Customers
            </Link>
            <Link class='nav-item nav-link' to='/login'>
              Login
            </Link>
            <Link class='nav-item nav-link' to='/register'>
              Register
            </Link>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
