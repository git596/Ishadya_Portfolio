import React, { useState } from 'react';
import style from "./Navbar.module.css";
import menuIcon from "../../assets/nav/menuIcon.png";
import closeIcon from "../../assets/nav/closeIcon.png"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Close menu when clicking outside
    const handleClickOutside = (e) => {
        if (menuOpen && !e.target.closest(`.${style.menu}`)) {
            setMenuOpen(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <nav className={style.navbar}>
            <a className={style.title} href="/">Ishadya Abeysignhe</a>

            <div className={style.menu}>
                <img 
                    className={style.menuBtn}
                    src={menuOpen ? closeIcon : menuIcon}
                    alt="menu-button"
                    onClick={(e) => {
                        e.stopPropagation();
                        setMenuOpen(!menuOpen);
                    }} 
                />

                <ul className={`${style.menuItem} ${menuOpen ? style.menuOpen : ''}`}>
                    <li>
                        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
                    </li>
                    <li>
                        <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
                    </li>
                    <li>
                        <a href="#project" onClick={() => setMenuOpen(false)}>Projects</a>
                    </li>
                    <li>
                        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
