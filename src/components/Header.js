import React from 'react';
import './Header.css'; // Create a Header.css
import sunIcon from '../Resources/sun.png';
import moonIcon from '../Resources/moon.png';

function Header({ darkMode, toggleDarkMode }) {
    return (
        <header>
            <div className="logo">
                <h3>SWCL</h3>
            </div>
            <nav>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About us</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li>
                        <button className="lgtBtn" onClick={toggleDarkMode}>
                            <a href="#">
                                <img src={sunIcon} alt="Dark Mode" id="moonIcon" style={{ display: darkMode ? 'inline' : 'none' }} />
                                <img src={moonIcon} alt="Light Mode" id="sunIcon" style={{ display: darkMode ? 'none' : 'inline' }} />
                            </a>
                        </button>
                    </li>
                </ul>
            </nav>

            
        </header>
    );
}

export default Header;