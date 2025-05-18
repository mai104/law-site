import React, { useContext } from "react";
import TopBanner from "../components/TopBanner";
import { NavLink } from "react-router-dom";
import { LanguageContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

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
      <div className="nav" style={{ position: "sticky", top: 0, zIndex: 1000 }}>
        <TopBanner />
        <nav className="navbar navbar-dark w-100 navbar-expand-md" style={{
          backgroundColor: "#0f4c75",
          padding: "15px 0",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
        }}>
          <div className="container-xxl">
            {/* logo */}
            <div className="navbar-brand">
              <span>
                <img
                  src="/assets/logo.png"
                  className="img-fluid logo-image"
                  alt="scales of justice logo"
                  width="70"
                  height="70"
                />
                <img
                  src="/assets/name.png"
                  className="img-fluid px-0 logo-text"
                  alt="law firm logo text"
                  width="200"
                  height="100"
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
              data-bs-toggle="collapse"
              data-bs-target="#main-nav"
              aria-controls="main-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            
            {/* navbar links  */}
            <div
              className="collapse navbar-collapse justify-content-end align-center"
              id="main-nav"
            >
              <ul className="navbar-nav">
                <li className="nav-item mx-3 mb-2">
                  <NavLink
                    to="/"
                    style={({ isActive }) => ({
                      textDecoration: "none",
                      color: isActive ? "#c59d5f" : "#fff",
                      borderBottom: isActive ? "1px solid #c59d5f" : "none",
                      paddingBottom: isActive ? "5px" : "0",
                    })}
                  >
                    {navText[language].home}
                  </NavLink>
                </li>
                <li className="nav-item mx-3 mb-2">
                  <NavLink
                    to="/legal-services"
                    style={({ isActive }) => ({
                      textDecoration: "none",
                      color: isActive ? "#c59d5f" : "#fff",
                      borderBottom: isActive ? "1px solid #c59d5f" : "none",
                      paddingBottom: isActive ? "5px" : "0",
                    })}
                  >
                    {navText[language].legalServices}
                  </NavLink>
                </li>
                <li className="nav-item mx-3 mb-2">
                  <NavLink
                    to="/insolvency-services"
                    style={({ isActive }) => ({
                      textDecoration: "none",
                      color: isActive ? "#c59d5f" : "#fff",
                      borderBottom: isActive ? "1px solid #c59d5f" : "none",
                      paddingBottom: isActive ? "5px" : "0",
                    })}
                  >
                    {navText[language].corporateServices}
                  </NavLink>
                </li>
                <li className="nav-item mx-3 mb-2">
                  <NavLink
                    to="/information"
                    style={({ isActive }) => ({
                      textDecoration: "none",
                      color: isActive ? "#c59d5f" : "#fff",
                      borderBottom: isActive ? "1px solid #c59d5f" : "none",
                      paddingBottom: isActive ? "5px" : "0",
                    })}
                  >
                    {navText[language].information}
                  </NavLink>
                </li>
                <li className="nav-item mx-3 mb-2">
                  <NavLink
                    to="/contact"
                    style={({ isActive }) => ({
                      textDecoration: "none",
                      color: isActive ? "#c59d5f" : "#fff",
                      borderBottom: isActive ? "1px solid #c59d5f" : "none",
                      paddingBottom: isActive ? "5px" : "0",
                    })}
                  >
                    {navText[language].contact}
                  </NavLink>
                </li>
                <li className="nav-item mx-3 mb-2 d-none d-md-block">
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