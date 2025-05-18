import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LanguageContext } from "../App";
import { Link } from "react-router-dom";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";

const Footer = () => {
  const { language } = useContext(LanguageContext);

  // Content based on language
  const content = {
    en: {
      description: "Our law firm provides expert legal guidance and representation in Saudi Arabia. We specialize in corporate law, commercial transactions, foreign investment, and dispute resolution in accordance with Saudi regulations.",
      contact: "Contact Information",
      email: "info@saudilawfirm.com",
      phone: "+966 50 123 4567",
      location: "King Fahd Road, Al Olaya District, Riyadh, Saudi Arabia",
      schedule: "Office Hours",
      scheduleHours: "Sunday – Thursday: 8:30AM – 5:00PM",
      scheduleWeekend: "Friday – Saturday: Closed",
      quickLinks: "Quick Links",
      links: [
        { name: "Home", path: "/" },
        { name: "Legal Services", path: "/legal-services" },
        { name: "Corporate Services", path: "/insolvency-services" },
        { name: "Information", path: "/information" },
        { name: "Contact Us", path: "/contact" }
      ],
      sitemap: "Sitemap",
      copyright: "© 2025 Saudi Law Firm. All Rights Reserved.",
      whatsapp: {
        header: "Saudi Law Office",
        status: "Online",
        greeting: "As-salamu alaykum, how can we assist you today?"
      }
    },
    ar: {
      description: "يقدم مكتب المحاماة لدينا إرشادات وتمثيل قانوني متخصص في المملكة العربية السعودية. نحن متخصصون في قانون الشركات والمعاملات التجارية والاستثمار الأجنبي وحل النزاعات وفقًا للأنظمة السعودية.",
      contact: "معلومات الاتصال",
      email: "info@saudilawfirm.com",
      phone: "٩٦٦+ ٥٠ ١٢٣ ٤٥٦٧",
      location: "طريق الملك فهد، حي العليا، الرياض، المملكة العربية السعودية",
      schedule: "ساعات العمل",
      scheduleHours: "الأحد - الخميس: ٨:٣٠ صباحًا - ٥:٠٠ مساءً",
      scheduleWeekend: "الجمعة - السبت: مغلق",
      quickLinks: "روابط سريعة",
      links: [
        { name: "الرئيسية", path: "/" },
        { name: "الخدمات القانونية", path: "/legal-services" },
        { name: "خدمات الشركات", path: "/insolvency-services" },
        { name: "معلومات", path: "/information" },
        { name: "اتصل بنا", path: "/contact" }
      ],
      sitemap: "خريطة الموقع",
      copyright: "© ٢٠٢٥ مكتب المحاماة السعودي. جميع الحقوق محفوظة.",
      whatsapp: {
        header: "مكتب المحاماة السعودي",
        status: "متصل",
        greeting: "السلام عليكم، كيف يمكننا مساعدتك اليوم؟"
      }
    }
  };

  const currentContent = content[language];

  return (
    <>
      <footer style={{ backgroundColor: "#0f4c75", color: "white", marginTop: "50px" }}>
        <div className="container">
          <div className="row py-5">
            {/* Logo and Description Section */}
            <div className="col-lg-4 ps-4 mx-auto text-center">
              <span className="d-flex justify-content-center align-items-center mb-3">
                <img
                  src="/assets/logo.png"
                  className="img-fluid logo-image me-1"
                  alt="scales of justice logo"
                  width="50"
                  height="50"
                  style={{ backgroundColor: "white", padding: "5px", borderRadius: "5px" }}
                />
                <span style={{ color: "#c59d5f", fontSize: "1.5rem", fontWeight: "bold", marginLeft: "10px" }}>
                  {language === "en" ? "Saudi Law Firm" : "مكتب المحاماة السعودي"}
                </span>
              </span>
              <p className="content pt-3 px-3" style={{ color: "#e0e0e0" }}>
                {currentContent.description}
              </p>
            </div>

            {/* Quick Links Section */}
            <div className="col-lg-3 text-center text-lg-start">
              <h6 style={{ color: "#c59d5f", fontWeight: "bold", marginBottom: "20px", borderBottom: "2px solid #c59d5f", paddingBottom: "10px", display: "inline-block" }}>
                {currentContent.quickLinks}
              </h6>
              <ul className="list-unstyled">
                {currentContent.links.map((link, index) => (
                  <li key={index} className="mb-2">
                    <Link to={link.path} style={{ color: "white", textDecoration: "none", transition: "all 0.3s ease" }}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Section */}
            <div className="col-lg-5 text-center text-lg-start">
              <h6 style={{ color: "#c59d5f", fontWeight: "bold", marginBottom: "20px", borderBottom: "2px solid #c59d5f", paddingBottom: "10px", display: "inline-block" }}>
                {currentContent.contact}
              </h6>
              <div className="d-flex flex-column">
                <span className="mb-3 d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{ color: "#c59d5f", width: "20px", marginRight: "10px" }}
                  />
                  <span>{currentContent.phone}</span>
                </span>
                <span className="mb-3 d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ color: "#c59d5f", width: "20px", marginRight: "10px" }}
                  />
                  <span>{currentContent.email}</span>
                </span>
                <span className="mb-3 d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{ color: "#c59d5f", width: "20px", marginRight: "10px" }}
                  />
                  <span>{currentContent.location}</span>
                </span>
                <span className="mb-3 d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faClock}
                    style={{ color: "#c59d5f", width: "20px", marginRight: "10px" }}
                  />
                  <div>
                    <div>{currentContent.scheduleHours}</div>
                    <div>{currentContent.scheduleWeekend}</div>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div style={{ backgroundColor: "#072b44", padding: "15px 0" }}>
          <div className="container d-flex align-items-center justify-content-center">
            <p className="mb-0" style={{ color: "#a0a0a0", fontSize: "0.9rem" }}>{currentContent.copyright}</p>
          </div>
        </div>

        {/* WhatsAppWidget */}
        <div>
          <WhatsAppWidget
            phoneNo="+966501234567"
            position="right"
            iconSize="50"
            iconColor="white"
            iconBgColor="#25D366"
            headerIcon="/assets/logo.png"
            headerTxtColor="white"
            headerBgColor="#0f4c75"
            headerTitle={currentContent.whatsapp.header}
            headerCaption={currentContent.whatsapp.status}
            bodyBgColor="#f5f5f5"
            chatPersonName="Legal Advisor"
            chatMessage={currentContent.whatsapp.greeting}
            footerBgColor="#0f4c75"
            btnBgColor="#c59d5f"
            btnTxtColor="white"
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;