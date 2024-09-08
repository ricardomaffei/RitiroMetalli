// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="path-to-your-logo" alt="EcoMetalli Logo" />
      </div>
      <div className="contact-info">
        <p>📞 +39 335 6468885 | 📧 ecometallisrl@gmail.com</p>
      </div>
      <div className="social-icons">
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
      </div>
    </header>
  );
};

export default Header;


// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Chi Siamo</a></li>
        <li><a href="#">Cosa Facciamo</a></li>
        <li><a href="#">Servizi</a></li>
        <li><a href="#">Autorizzazioni</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contatti</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

// src/components/Carousel.js
import React from 'react';

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="carousel-item">
        <h1>RICICLANDO</h1>
        <h1>RIFIUTI</h1>
      </div>
    </div>
  );
};

export default Carousel;
