import React, { useContext, useState, useEffect } from "react";
import TopBanner from "../components/TopBanner";
import { NavLink } from "react-router-dom";
import { LanguageContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const [scrolled, setScrolled] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);

  // Handle scroll event for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close navbar on link click for mobile
  const closeNavbar = () => {
    if (navbarOpen) {
      setNavbarOpen(false);
    }
  };

  // Navigation text based on language
  const navText = {
    en: {
      home: "Home",
      legalServices: "Legal Services",
      corporateServices: "Corporate Services",
      information: "Information",
      contact: "Contact"
    },
    ar: {
      home: "الرئيسية",
      legalServices: "الخدمات القانونية",
      corporateServices: "خدمات الشركات",
      information: "معلومات",
      contact: "اتصل بنا"
    }
  };

  return (
    <>
      <div 
        className="nav" 
        style={{ 
          position: "sticky", 
          top: 0, 
          zIndex: 1000,
          transition: "all 0.3s ease"
        }}
      >
        <TopBanner />
        <nav 
          className={`navbar navbar-dark w-100 navbar-expand-md ${scrolled ? 'scrolled' : ''}`} 
          style={{
            backgroundColor: "#0f4c75",
            padding: scrolled ? "10px 0" : "15px 0",
            boxShadow: scrolled ? "0 5px 15px rgba(0,0,0,0.15)" : "0 4px 10px rgba(0,0,0,0.1)",
            transition: "all 0.3s ease"
          }}
        >
          <div className="container-xxl">
            {/* logo */}
            <div className="navbar-brand">
              <span>
                <img
                  src="/assets/logo.png"
                  className="img-fluid logo-image"
                  alt="scales of justice logo"
                  width={scrolled ? "60" : "70"}
                  height={scrolled ? "60" : "70"}
                  style={{ transition: "all 0.3s ease" }}
                />
                <img
                  src="/assets/name.png"
                  className="img-fluid px-0 logo-text"
                  alt="law firm logo text"
                  width={scrolled ? "180" : "200"}
                  height="100"
                  style={{ transition: "all 0.3s ease" }}
                />
              </span>
            </div>
            
            {/* language toggle button */}
            <button
              className="btn btn-sm btn-outline-light mx-2 d-md-none"
              onClick={toggleLanguage}
              aria-label="Toggle Language"
            >
              <FontAwesomeIcon icon={faGlobe} /> {language === "en" ? "عربي" : "English"}
            </button>
            
            {/* toggle button for mobile nav */}
            <button
              className="navbar-toggler"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
              aria-controls="main-nav"
              aria-expanded={navbarOpen ? "true" : "false"}
              aria-label="Toggle navigation"
              style={{ 
                border: "none", 
                padding: "6px 10px",
                outline: "none",
                boxShadow: "none" 
              }}
            >
              <FontAwesomeIcon 
                icon={navbarOpen ? faTimes : faBars} 
                style={{ fontSize: "1.2rem" }} 
              />
            </button>
            
            {/* navbar links  */}
            <div
              className={`collapse navbar-collapse justify-content-end align-center ${navbarOpen ? 'show' : ''}`}
              id="main-nav"
            >
              <ul className="navbar-nav">
                <li className="nav-item mx-md-3 my-1 my-md-0">
                  <NavLink
                    to="/"
                    onClick={closeNavbar}
                    style={({ isActive }) => ({
                      textDecoration: "none",
                      color: isActive ? "#c59d5f" : "#fff",
                      borderBottom: isActive ? "1px solid #c59d5f" : "none",
                      paddingBottom: isActive ? "5px" : "0",
                      display: "block",
                      textAlign: window.innerWidth < 768 ? "center" : "left"
                    })}
                  >
                    {navText[language].home}
                  </NavLink>
                </li>
                <li className="nav-item mx-md-3 my-1 my-md-0">
                  <NavLink
                    to="/legal-services"
                    onClick={closeNavbar}
                    style={({ isActive }) => ({
                      textDecoration: "none",
                      color: isActive ? "#c59d5f" : "#fff",
                      borderBottom: isActive ? "1px solid #c59d5f" : "none",
                      paddingBottom: isActive ? "5px" : "0",
                      display: "block",
                      textAlign: window.innerWidth < 768 ? "center" : "left"
                    })}
                  >
                    {navText[language].legalServices}
                  </NavLink>
                </li>
                <li className="nav-item mx-md-3 my-1 my-md-0">
                  <NavLink
                    to="/insolvency-services"
                    onClick={closeNavbar}
                    style={({ isActive }) => ({
                      textDecoration: "none",
                      color: isActive ? "#c59d5f" : "#fff",
                      borderBottom: isActive ? "1px solid #c59d5f" : "none",
                      paddingBottom: isActive ? "5px" : "0",
                      display: "block",
                      textAlign: window.innerWidth < 768 ? "center" : "left"
                    })}
                  >
                    {navText[language].corporateServices}
                  </NavLink>
                </li>
                <li className="nav-item mx-md-3 my-1 my-md-0">
                  <NavLink
                    to="/information"
                    onClick={closeNavbar}
                    style={({ isActive }) => ({
                      textDecoration: "none",
                      color: isActive ? "#c59d5f" : "#fff",
                      borderBottom: isActive ? "1px solid #c59d5f" : "none",
                      paddingBottom: isActive ? "5px" : "0",
                      display: "block",
                      textAlign: window.innerWidth < 768 ? "center" : "left"
                    })}
                  >
                    {navText[language].information}
                  </NavLink>
                </li>
                <li className="nav-item mx-md-3 my-1 my-md-0">
                  <NavLink
                    to="/contact"
                    onClick={closeNavbar}
                    style={({ isActive }) => ({
                      textDecoration: "none",
                      color: isActive ? "#c59d5f" : "#fff",
                      borderBottom: isActive ? "1px solid #c59d5f" : "none",
                      paddingBottom: isActive ? "5px" : "0",
                      display: "block",
                      textAlign: window.innerWidth < 768 ? "center" : "left"
                    })}
                  >
                    {navText[language].contact}
                  </NavLink>
                </li>
                <li className="nav-item mx-md-3 my-3 my-md-0 d-none d-md-block">
                  <button
                    className="btn btn-sm btn-outline-light scale-on-hover"
                    onClick={toggleLanguage}
                    aria-label="Toggle Language"
                  >
                    <FontAwesomeIcon icon={faGlobe} /> {language === "en" ? "عربي" : "English"}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;