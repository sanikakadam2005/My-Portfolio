
import React, { useState } from "react";

function Navbar() {
  const [lightMode, setLightMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const styles = `
    html {
      scroll-behavior: smooth;
    }

    .portfolio-navbar,
    .portfolio-navbar * {
      box-sizing: border-box;
    }

    .portfolio-navbar {
      position: sticky;
      top: 0;
      z-index: 1000;
      width: 100%;
      margin: 0;
      padding: 0;
      background: ${lightMode ? "#f5f5f5" : "#111315"};
      border-bottom: 1px solid ${lightMode ? "#dedede" : "#292b2e"};
      color: ${lightMode ? "#171717" : "#ededee"};
      font-family: Arial, Helvetica, sans-serif;
      transition: background 0.3s ease, color 0.3s ease;
    }

    .portfolio-navbar .navbar-inner {
      width: 100%;
      max-width: 1110px;
      min-height: 69px;
      margin: 0 auto;
      padding: 0 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 25px;
    }

    .portfolio-navbar .navbar-brand {
      display: flex;
      align-items: center;
      gap: 9px;
      flex-shrink: 0;
      color: inherit;
      text-decoration: none;
      font-size: 18px;
      font-weight: 700;
      letter-spacing: -0.6px;
    }

    .portfolio-navbar .navbar-brand:hover {
      opacity: 0.8;
    }

    .portfolio-navbar .navbar-logo {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      background: ${lightMode ? "#171717" : "#f0f0f0"};
      color: ${lightMode ? "#ffffff" : "#171717"};
      border-radius: 3px;
      font-size: 12px;
      font-weight: 600;
    }

    .portfolio-navbar .navbar-dash {
      color: ${lightMode ? "#9ca3af" : "#52545a"};
      font-weight: 400;
    }

    .portfolio-navbar .navbar-links {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 23px;
    }

    .portfolio-navbar .navbar-links > a {
      position: relative;
      padding: 10px 0;
      color: ${lightMode ? "#555555" : "#a1a1a6"};
      text-decoration: none;
      white-space: nowrap;
      font-size: 14px;
      transition: color 0.3s ease;
    }

    .portfolio-navbar .navbar-links > a:not(.navbar-contact)::after {
      content: "";
      position: absolute;
      bottom: 2px;
      left: 0;
      width: 100%;
      height: 2px;
      background: #e6a04b;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease;
    }

    .portfolio-navbar .navbar-links > a:hover {
      color: ${lightMode ? "#171717" : "#ffffff"};
    }

    .portfolio-navbar .navbar-links > a:hover::after {
      transform: scaleX(1);
    }

    .portfolio-navbar .navbar-links > a.navbar-contact {
      padding: 11px 16px;
      border: 1px solid ${lightMode ? "#cccccc" : "#414348"};
      border-radius: 4px;
      color: inherit;
      transition: color 0.3s ease, background 0.3s ease,
        border-color 0.3s ease;
    }

    .portfolio-navbar .navbar-links > a.navbar-contact:hover {
      border-color: #e6a04b;
      color: #e6a04b;
      background: ${lightMode ? "#fff7ed" : "rgba(230,160,75,0.06)"};
    }

    .portfolio-navbar .navbar-theme {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid ${lightMode ? "#cccccc" : "#414348"};
      background: transparent;
      color: inherit;
      border-radius: 4px;
      cursor: pointer;
      font-size: 20px;
      flex-shrink: 0;
      transition: color 0.3s ease, border-color 0.3s ease,
        transform 0.3s ease;
    }

    .portfolio-navbar .navbar-theme:hover {
      border-color: #e6a04b;
      color: #e6a04b;
      transform: rotate(-10deg);
    }

    .portfolio-navbar .navbar-menu {
      display: none;
      background: transparent;
      border: 1px solid ${lightMode ? "#cccccc" : "#414348"};
      color: inherit;
      border-radius: 4px;
      font-size: 23px;
      padding: 5px 11px;
      cursor: pointer;
    }

    @media (max-width: 950px) {
      .portfolio-navbar .navbar-inner {
        padding: 0 24px;
      }

      .portfolio-navbar .navbar-menu {
        display: block;
      }

      .portfolio-navbar .navbar-links {
        display: ${menuOpen ? "flex" : "none"};
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        padding: 22px 28px;
        background: ${lightMode ? "#f5f5f5" : "#111315"};
        border-bottom: 1px solid ${lightMode ? "#dedede" : "#292b2e"};
        flex-direction: column;
        align-items: stretch;
        gap: 12px;
      }

      .portfolio-navbar .navbar-links > a:not(.navbar-contact)::after {
        bottom: 3px;
        width: 35px;
      }

      .portfolio-navbar .navbar-links > a.navbar-contact {
        align-self: flex-start;
      }

      .portfolio-navbar .navbar-theme {
        align-self: flex-start;
      }
    }

    @media (max-width: 480px) {
      .portfolio-navbar .navbar-inner {
        padding: 0 16px;
        gap: 12px;
      }

      .portfolio-navbar .navbar-brand {
        font-size: 15px;
      }

      .portfolio-navbar .navbar-dash {
        display: none;
      }
    }
  `;

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="portfolio-navbar">
      <style>{styles}</style>

      <div className="navbar-inner">
        <a className="navbar-brand" href="#home" onClick={closeMenu}>
          <span className="navbar-logo">SK</span>
          <span className="navbar-dash">—</span>
          <span>Sanika Kadam</span>
        </a>

        <button
          className="navbar-menu"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((previous) => !previous)}
        >
          {menuOpen ? "×" : "☰"}
        </button>

        <nav className="navbar-links" aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#certifications" onClick={closeMenu}>
            Certifications
          </a>
          <a href="#resume" onClick={closeMenu}>Resume</a>
          <a
            className="navbar-contact"
            href="#contact"
            onClick={closeMenu}
          >
            Contact
          </a>

          <button
            type="button"
            className="navbar-theme"
            aria-label="Toggle color theme"
            title="Toggle color theme"
            onClick={() => setLightMode((previous) => !previous)}
          >
            {lightMode ? "☀" : "☾"}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
