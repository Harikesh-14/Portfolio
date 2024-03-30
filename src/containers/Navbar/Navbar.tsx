import { useState } from 'react';

import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <nav>
                <div className="logo">
                    <h1>Harikesh</h1>
                </div>
                <div className={`hamburger ${isOpen ? 'toggle' : ''}`} onClick={toggleNavbar}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Solutions</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
                <div>
                    <p>+91 9319958749</p>
                    <p>Icon</p>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
