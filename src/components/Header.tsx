import React from 'react';
import './Header.css'; // Προσθέστε στυλ αν χρειάζεται

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/AboutUs">About Us</a></li>
        <li><a href="/Contact">Contact</a></li>
        <li><a href="/News">News</a></li>
        <li><a href="/EShop">E-Shop</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
