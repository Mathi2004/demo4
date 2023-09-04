import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart, faHeart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header>
      <div className="header-1" style={{ backgroundColor: 'rgb(71, 72, 71)' }}>
        <div className="share">
          <span>follow us : </span>
          <a href="https://www.facebook.com/">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://twitter.com/">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.instagram.com/_._sanmathi_._/?hl=en">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.linkedin.com/in/sanmathi-l-7a8b0a22a/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className="call">
          <span>call us : </span>
          <a href="/">+123-456-7890</a>
        </div>
      </div>

      <div className="header-2" style={{ backgroundColor: 'rgb(125, 125, 125)' }}>
        <a href="/" className="logo"><i className="fas fa-seedling"></i>From The Garden</a>
        <form action="" className="search-bar-container">
          <input type="search" id="search-bar" placeholder="search here..." />
          <label htmlFor="search-bar" className="fas fa-search"></label>
        </form>
      </div>

      <div className="header-3" style={{ backgroundColor:'lightgrey' }}>
        <div id="menu-bar" className="fas fa-bars"></div>
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#category">Indoor Plants</a>
          <a href="#product">Outdoor Plants</a>
          <a href="#seeds">Seeds</a>
          <a href="#Pots">Pots</a>
          <a href="#contact">contact</a>
        </nav>
        <div className="icons">
        <Link to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} />
        </Link>
        <Link to="/wishlist">
          <FontAwesomeIcon icon={faHeart} />
        </Link>
        <Link to="/login">
          <FontAwesomeIcon icon={faUserCircle} />
        </Link>
        </div>
      </div>

      
    </header>
  );
}

export default Header;
