import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__left">
        <div className="navbar__logo">Udemy</div>
        <button className="navbar__category-btn">Categories</button>
      </div>

      <div className="navbar__search">
        <input
          type="text"
          placeholder="Search for anything"
          className="navbar__search-input"
        />
      </div>

      <div className="navbar__right">
        <button className="navbar__link">Udemy Business</button>
        <button className="navbar__link">Teach on Udemy</button>
        <button className="navbar__link navbar__icon-btn">
          <span role="img" aria-label="cart">🛒</span>
        </button>
        <button className="navbar__btn navbar__btn--outline">Log in</button>
        <button className="navbar__btn navbar__btn--filled">Sign up</button>
      </div>
    </header>
  );
}

export default Navbar;
