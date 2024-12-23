import { useResizeDetector } from 'react-resize-detector';
import logo from '../../assets/logo.svg';
import { xsm } from '../../variables';
import './Navbar.scss';

import { useState, useEffect } from 'react';

function MobileNavbar({ activeName }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('#mobile-nav') && menuOpen) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      <nav id="mobile-nav">
        <a href="/">
          <img className="header-logo" src={logo} alt="Mason Root's Logo" />
        </a>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="burger burger1"></div>
          <div className="burger burger2"></div>
          <div className="burger burger3"></div>
        </div>

        <ul className={`links ${menuOpen ? 'open' : ''}`}>
          <li className={activeName === 'home' ? 'active' : ''}>
            <a href="/">Home</a>
          </li>
          <li className={activeName === 'about' ? 'active' : ''}>
            <a href="/about">About</a>
          </li>
          <li className={activeName === 'projects' ? 'active' : ''}>
            <a href="/projects">Projects</a>
          </li>
          <li className={activeName === 'resume' ? 'active' : ''}>
            <a href="/resume">Resume</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

function DesktopNavbar({ activeName }) {
  const isHome = activeName === 'home';
  const isAbout = activeName === 'about';
  const isProjects = activeName === 'projects';
  const isResume = activeName === 'resume';

  return (
    <nav id="desktop-nav">
      <a href="/">
        <img className="header-logo" src={logo} alt="Mason Root's Logo" />
      </a>
      <div className="centerlinks">
        <a className={isHome ? 'active' : ''} href="/">
          Home
        </a>
        <a className={isAbout ? 'active' : ''} href="/about">
          About
        </a>
        <a className={isProjects ? 'active' : ''} href="/projects">
          Projects
        </a>
        <a className={isResume ? 'active' : ''} href="/resume">
          Resume
        </a>
      </div>
      <a className="loginbutton" href="/login">
        Login
      </a>
    </nav>
  );
}
export default function Navbar({ activeName }) {
  const { width, ref } = useResizeDetector();

  return (
    <div ref={ref}>
      {width < xsm ? (
        <MobileNavbar activeName={activeName} />
      ) : (
        <DesktopNavbar activeName={activeName} />
      )}
    </div>
  );
}
