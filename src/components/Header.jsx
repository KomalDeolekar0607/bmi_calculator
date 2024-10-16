import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Header = () => {
  return (
    <header className="header-section">
      <div className="logo">
        {/* <a href="/">PLATINUM</a> */}
        <div className="logo">
          <Link to="/">PLATINUM</Link>
        </div>
      </div>
      <nav className="nav-menu">
        <ul>
          {/* <li><a href="#">Home</a></li>
          <li><a href="/">BMI</a></li>
          <li><a href="/history">History</a></li>
          <li><a href="/suggestedMeals">Suggested Meals</a></li>
          <li><a href="#">Calorie</a></li> */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/bmi">BMI</Link></li>
          <li><Link to="/history">History</Link></li>
          <li><Link to="/suggestedMeals">Suggested Meals</Link></li>
          <li><Link to="/bmr">BMR</Link></li>
          <li><Link to="/calorieTracker">Calorie</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
