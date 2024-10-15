import React from 'react';

const Header = () => {
  return (
    <header className="header-section">
      <div className="logo">
        <a href="/">PLATINUM</a>
      </div>
      <nav className="nav-menu">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="/">BMI</a></li>
          <li><a href="/history">History</a></li>
          <li><a href="#">Calorie</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
