import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <>
            <nav className="navbar">
                <div className="navbar-title">
                    <img src="/matcha.svg" alt="logo" className="nav-logo"/>
                    Matcha Made in Heaven
                </div>
                <ul className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Me</Link>
                    </li>
                </ul>
                <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                {menuOpen && (
                    <div className="dropdown-menu">
                        <ul>
                            <li className="category">Cafe Reviews</li>
                            <li><Link to="*">Matcha to Avoid <span className="icon"> 🚫</span></Link></li>
                            <li><Link to="*">Hidden Gems<span className="icon"> 💎</span></Link></li>
                            <li><Link to="*">Best of Drive-Thru <span className="icon"> 🚗</span></Link></li>
                            <li className="category">Cafe Ambiance</li>
                            <li><Link to="*">Cozy Spots<span className="icon"> 🛋️</span></Link></li>
                            <li><Link to="*">Aesthetic for the 'Gram<span className="icon"> 📸</span></Link></li>
                            <li className="category">Must-Visit by City</li>
                            <li><Link to="*">Orem <span className="icon">🏞️</span> </Link></li>
                            <li><Link to="*">Provo <span className="icon">🏘️ </span></Link></li>
                            <li><Link to="*">SLC <span className="icon">🏔️ </span></Link></li>
                        </ul>
                    </div>
                )}
            </nav>
            <div className="categories-bar">
                <div className="ticker-content">
                    <span>Cafe Reviews</span>
                    <span>|</span>
                    <span>Matcha Drinks</span>
                    <span>|</span>
                    <span>Cafe Ambiance</span>
                    <span>|</span>
                    <span>Price & Value</span>
                    <span>|</span>
                    <span>Reader Picks</span>
                    <span>|</span>
                    <span>Must-Visit Matcha Cafes</span>
                    <span>|</span>
                    <span>Cafe Reviews</span>
                    <span>|</span>
                    <span>Matcha Drinks</span>
                    <span>|</span>
                    <span>Cafe Ambiance</span>
                    <span>|</span>
                    <span>Price & Value</span>
                    <span>|</span>
                    <span>Reader Picks</span>
                    <span>|</span>
                    <span>Must-Visit Matcha Cafes</span>
                    <span>|</span>
                </div>
            </div>
        </>
    );
  }

  export default Navbar;