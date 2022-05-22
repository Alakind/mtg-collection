import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <Link className="link" to="/">Collection</Link>
      <Link className="title" to="/">MTGCollection</Link>
      <Link className="link" to="/decks">Decks</Link>
    </div>
  );
}

export default Navbar;
