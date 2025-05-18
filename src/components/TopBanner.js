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
    <div className="topbanner d-none d-lg-block" style={{
      backgroundColor: "#0f4c75",
      color: "white",
      padding: "8px 0",
      width: "100%"
    }}>
      <div className="container d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <span className="px-2">
            <FontAwesomeIcon icon={faPhone} style={{ color: "#c59d5f" }} />
            <span className="px-1">{currentContent.phone}</span>
          </span>
          <span className="px-2">
            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#c59d5f" }} />
            <span className="px-1">{currentContent.email}</span>
          </span>
        </div>
        <div>
          <FontAwesomeIcon icon={faLocationDot} style={{ color: "#c59d5f" }} />
          <span className="px-1">{currentContent.location}</span>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;