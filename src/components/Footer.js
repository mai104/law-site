import React, { useContext, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LanguageContext } from "../App";
import { Link } from "react-router-dom";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
  faClock,
  faChevronUp
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faFacebook,
  faTwitter,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";

const Footer = () => {
  const { language } = useContext(LanguageContext);
  const [showScroll, setShowScroll] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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
      followUs: "Follow Us",
      backToTop: "Back to Top",
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
      followUs: "تابعنا",
      backToTop: "العودة للأعلى",
      copyright: "© ٢٠٢٥ مكتب المحاماة السعودي. جميع الحقوق محفوظة.",
      whatsapp: {
        header: "مكتب المحاماة السعودي",
        status: "متصل",
        greeting: "السلام عليكم، كيف يمكننا مساعدتك اليوم؟"
      }
    }
  };

  // Handle resize events for responsive adjustments
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Check if scroll position is beyond 500px to show Back to Top button
  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 500) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 500) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentContent = content[language];

  return (
    <>
      <footer style={{ backgroundColor: "#0f4c75", color: "white", marginTop: "50px" }}>
        <div className="container">
          <div className="row py-5">
            {/* Logo and Description Section */}
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="text-center text-md-start">
                <span className="d-flex justify-content-center justify-content-md-start align-items-center mb-3">
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
                <p className="content pt-3" style={{ color: "#e0e0e0", textAlign: isMobile ? "center" : "left" }}>
                  {currentContent.description}
                </p>
                
                {/* Social Media Icons */}
                <div className={`mt-3 ${isMobile ? 'text-center' : 'text-md-start'}`}>
                  <h6 style={{ color: "#c59d5f", fontWeight: "bold", marginBottom: "15px", display: "inline-block" }}>
                    {currentContent.followUs}
                  </h6>
                  <div className="social-icons d-flex gap-3 justify-content-center justify-content-md-start">
                    <a href="#" className="text-white" style={{ fontSize: "1.2rem", transition: "transform 0.3s ease" }} onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-3px)"} onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}>
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="#" className="text-white" style={{ fontSize: "1.2rem", transition: "transform 0.3s ease" }} onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-3px)"} onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}>
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="#" className="text-white" style={{ fontSize: "1.2rem", transition: "transform 0.3s ease" }} onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-3px)"} onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}>
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://wa.me/966501234567" target="_blank" rel="noopener noreferrer" className="text-white" style={{ fontSize: "1.2rem", transition: "transform 0.3s ease" }} onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-3px)"} onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}>
                      <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <div className={`${isMobile ? 'text-center' : 'text-md-start'}`}>
                <h6 style={{ color: "#c59d5f", fontWeight: "bold", marginBottom: "15px", borderBottom: "2px solid #c59d5f", paddingBottom: "10px", display: "inline-block" }}>
                  {currentContent.quickLinks}
                </h6>
                <ul className="list-unstyled">
                  {currentContent.links.map((link, index) => (
                    <li key={index} className="mb-2">
                      <Link 
                        to={link.path} 
                        style={{ 
                          color: "white", 
                          textDecoration: "none", 
                          transition: "all 0.3s ease",
                          display: "inline-block",
                          padding: "3px 0"
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.color = "#c59d5f";
                          e.currentTarget.style.transform = language === "ar" ? "translateX(-5px)" : "translateX(5px)";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.color = "white";
                          e.currentTarget.style.transform = "translateX(0)";
                        }}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Section */}
            <div className="col-lg-5 col-md-12">
              <div className={`${isMobile ? 'text-center' : 'text-md-start'}`}>
                <h6 style={{ color: "#c59d5f", fontWeight: "bold", marginBottom: "15px", borderBottom: "2px solid #c59d5f", paddingBottom: "10px", display: "inline-block" }}>
                  {currentContent.contact}
                </h6>
                <div className={`d-flex flex-column ${isMobile ? 'align-items-center' : 'align-items-start'}`}>
                  <a href={`tel:${currentContent.phone.replace(/\s+/g, '')}`} className="mb-3 d-flex align-items-center text-white" style={{ textDecoration: "none", transition: "all 0.3s ease" }} onMouseOver={(e) => e.currentTarget.style.color = "#c59d5f"} onMouseOut={(e) => e.currentTarget.style.color = "white"}>
                    <FontAwesomeIcon
                      icon={faPhone}
                      style={{ color: "#c59d5f", width: "20px", marginRight: "10px" }}
                    />
                    <span>{currentContent.phone}</span>
                  </a>
                  <a href={`mailto:${currentContent.email}`} className="mb-3 d-flex align-items-center text-white" style={{ textDecoration: "none", transition: "all 0.3s ease" }} onMouseOver={(e) => e.currentTarget.style.color = "#c59d5f"} onMouseOut={(e) => e.currentTarget.style.color = "white"}>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      style={{ color: "#c59d5f", width: "20px", marginRight: "10px" }}
                    />
                    <span>{currentContent.email}</span>
                  </a>
                  <span className="mb-3 d-flex align-items-center">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      style={{ color: "#c59d5f", width: "20px", marginRight: "10px", alignSelf: "flex-start" }}
                    />
                    <span style={{ maxWidth: "300px" }}>{currentContent.location}</span>
                  </span>
                  <span className="mb-3 d-flex align-items-center">
                    <FontAwesomeIcon
                      icon={faClock}
                      style={{ color: "#c59d5f", width: "20px", marginRight: "10px", alignSelf: "flex-start" }}
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
        </div>

        {/* Copyright Section */}
        <div style={{ backgroundColor: "#072b44", padding: "15px 0" }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 text-center text-md-start">
                <p className="mb-md-0 mb-2" style={{ color: "#a0a0a0", fontSize: "0.9rem" }}>{currentContent.copyright}</p>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <button 
                  onClick={scrollTop} 
                  style={{
                    display: showScroll ? 'inline-block' : 'none',
                    backgroundColor: "#c59d5f",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    padding: "5px 15px",
                    fontSize: "0.9rem",
                    cursor: "pointer",
                    transition: "all 0.3s ease"
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#b48a45"}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#c59d5f"}
                >
                  {currentContent.backToTop} <FontAwesomeIcon icon={faChevronUp} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsAppWidget */}
        <div>
          <WhatsAppWidget
            phoneNo="+966501234567"
            position="right"
            iconSize="40"
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