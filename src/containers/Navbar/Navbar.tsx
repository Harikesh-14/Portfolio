import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='w-screen'>
            <nav>
                <div className="logo">
                    <h1>Harikesh</h1>
                </div>
                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <li><Link to={'/'} className='a'>Home</Link></li>
                    <li><Link to={'/'} className='a'>Portfolio</Link></li>
                    <li><Link to={'/'} className='a'>Skills</Link></li>
                    <li><Link to={'/'} className='a'>Projects</Link></li>
                    <li><Link to={'/'} className='a'>About</Link></li>
                    <li><Link to={'/'} className='a'>Contact</Link></li>
                </ul>
                <div className='callBtn'>
                    <p className='phoneNumber'>+91 9319958749</p>
                    <Link to={'/'} className='px-3 py-3 bg-white rounded-full shadow-lg flex justify-center items-center'><FontAwesomeIcon icon={faPhone} style={{color: "#668a85",}} /></Link>
                </div>
                <div className={`hamburger ${isOpen ? 'toggle' : ''}`} onClick={toggleNavbar}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
