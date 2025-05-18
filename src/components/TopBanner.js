import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LanguageContext } from "../App";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const TopBanner = () => {
  const { language } = useContext(LanguageContext);

  // Content based on language
  const content = {
    en: {
      email: "info@saudilawfirm.com",
      phone: "+966 50 123 4567",
      location: "Riyadh, Saudi Arabia"
    },
    ar: {
      email: "info@saudilawfirm.com",
      phone: "٩٦٦+ ٥٠ ١٢٣ ٤٥٦٧",
      location: "الرياض، المملكة العربية السعودية"
    }
  };

  const currentContent = content[language];

  return (
    <>
      {/* Desktop version */}
      <div className="topbanner d-none d-lg-block" style={{
        backgroundColor: "#0f4c75",
        color: "white",
        padding: "8px 0",
        width: "100%"
      }}>
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <a href={`tel:${currentContent.phone.replace(/\s+/g, '')}`} className="px-2 text-white">
              <FontAwesomeIcon icon={faPhone} style={{ color: "#c59d5f" }} />
              <span className="px-1">{currentContent.phone}</span>
            </a>
            <a href={`mailto:${currentContent.email}`} className="px-2 text-white">
              <FontAwesomeIcon icon={faEnvelope} style={{ color: "#c59d5f" }} />
              <span className="px-1">{currentContent.email}</span>
            </a>
          </div>
          <div>
            <FontAwesomeIcon icon={faLocationDot} style={{ color: "#c59d5f" }} />
            <span className="px-1">{currentContent.location}</span>
          </div>
        </div>
      </div>

      {/* Mobile version */}
      <div className="topbanner d-lg-none" style={{
        backgroundColor: "#0f4c75",
        color: "white",
        padding: "8px 0",
        width: "100%"
      }}>
        <div className="container">
          <div className="row text-center">
            <div className="col-12 mb-1">
              <a href={`tel:${currentContent.phone.replace(/\s+/g, '')}`} className="d-block text-white mb-1">
                <FontAwesomeIcon icon={faPhone} style={{ color: "#c59d5f" }} />
                <span className="px-1">{currentContent.phone}</span>
              </a>
            </div>
            <div className="col-12 mb-1">
              <a href={`mailto:${currentContent.email}`} className="d-block text-white mb-1">
                <FontAwesomeIcon icon={faEnvelope} style={{ color: "#c59d5f" }} />
                <span className="px-1">{currentContent.email}</span>
              </a>
            </div>
            <div className="col-12 d-none d-md-block">
              <FontAwesomeIcon icon={faLocationDot} style={{ color: "#c59d5f" }} />
              <span className="px-1">{currentContent.location}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBanner;