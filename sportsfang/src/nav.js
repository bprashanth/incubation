import React, { useEffect, useState } from 'react'
import './nav.css';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';

function Nav() {

    const [show, handleShow] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        };
        window.addEventListener("scroll", handleScroll);
        // cleanup function is called at the start of the next callback with the old values
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
            className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
            alt="Netflix Logo" 
            />

            <img 
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" 
            alt="Netflix Logo" 
            className="nav__avatar" />
        </div>
    )
}

export default Nav 