import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import ContactForm from "../components/ContactForm";
import { LanguageContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faClock,
  faFax
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const { language } = useContext(LanguageContext);

  // Content based on language
  const content = {
    en: {
      meta: {
        title: "Contact Us | Saudi Law Firm",
        description: "Get in touch with our legal team. We're here to assist with your legal and business questions and needs in Saudi Arabia."
      },
      title: "CONTACT US",
      subtitle: "We're Here to Help",
      intro: "Our team of professionals is ready to assist you with any legal or business matters in Saudi Arabia. Whether you have questions, need consultation, or are ready to schedule an appointment, we're here to help.",
      office: {
        title: "Main Office",
        address: "King Fahd Road, Al Olaya District",
        city: "Riyadh 12214",
        country: "Kingdom of Saudi Arabia",
        phone: "+966 50 123 4567",
        fax: "+966 11 234 5678",
        email: "info@saudilawfirm.com",
        hours: {
          weekdays: "Sunday - Thursday: 8:30 AM - 5:00 PM",
          weekend: "Friday - Saturday: Closed"
        }
      },
      form: {
        title: "Send Us a Message",
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        subject: "Subject",
        message: "Your Message",
        button: "Submit",
        success: "Thank you! Your message has been sent successfully.",
        error: "Sorry, there was an error sending your message. Please try again later."
      },
      map: {
        title: "Our Location",
        altText: "Map showing our office location in Riyadh"
      }
    },
    ar: {
      meta: {
        title: "اتصل بنا | مكتب المحاماة السعودي",
        description: "تواصل مع فريقنا القانوني. نحن هنا للمساعدة في الأسئلة والاحتياجات القانونية والتجارية في المملكة العربية السعودية."
      },
      title: "اتصل بنا",
      subtitle: "نحن هنا للمساعدة",
      intro: "فريقنا من المحترفين مستعد لمساعدتك في أي مسائل قانونية أو تجارية في المملكة العربية السعودية. سواء كانت لديك أسئلة، أو تحتاج إلى استشارة، أو كنت مستعدًا لتحديد موعد، فنحن هنا للمساعدة.",
      office: {
        title: "المكتب الرئيسي",
        address: "طريق الملك فهد، حي العليا",
        city: "الرياض 12214",
        country: "المملكة العربية السعودية",
        phone: "+٩٦٦ ٥٠ ١٢٣ ٤٥٦٧",
        fax: "+٩٦٦ ١١ ٢٣٤ ٥٦٧٨",
        email: "info@saudilawfirm.com",
        hours: {
          weekdays: "الأحد - الخميس: ٨:٣٠ صباحًا - ٥:٠٠ مساءً",
          weekend: "الجمعة - السبت: مغلق"
        }
      },
      form: {
        title: "أرسل لنا رسالة",
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        subject: "الموضوع",
        message: "رسالتك",
        button: "إرسال",
        success: "شكرًا لك! تم إرسال رسالتك بنجاح.",
        error: "عذرًا، حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى لاحقًا."
      },
      map: {
        title: "موقعنا",
        altText: "خريطة توضح موقع مكتبنا في الرياض"
      }
    }
  };

  // Select current language content
  const currentContent = content[language];

  return (
    <>
      <div className="contact-page">
        <Helmet>
          <title>{currentContent.meta.title}</title>
          <meta
            name="description"
            content={currentContent.meta.description}
          />
        </Helmet>

        {/* Header Section */}
        <div className="contact-header">
          <div className="contact-overlay"></div>
          <div className="container py-5">
            <div className="row">
              <div className="col-12 text-center text-white">
                <h1 className="display-4 fade-in">{currentContent.title}</h1>
                <p className="lead fade-in" style={{animationDelay: "0.2s"}}>{currentContent.subtitle}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Introduction Section */}
        <div className="container mt-5">
          <div className="row">
            <div className="col-12">
              <p className="fs-5 text-center slide-up">{currentContent.intro}</p>
            </div>
          </div>
        </div>

        {/* Contact Details and Form */}
        <div className="container mt-5 mb-5">
          <div className="row g-5">
            {/* Office Information */}
            <div className="col-md-5">
              <div className="card h-100 shadow slide-in-left">
                <div className="card-body">
                  <h3 className="card-title text-center mb-4">{currentContent.office.title}</h3>
                  <div className="office-info">
                    <div className="contact-item">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
                      <div className="contact-text">
                        <p className="mb-0">{currentContent.office.address}</p>
                        <p className="mb-0">{currentContent.office.city}</p>
                        <p>{currentContent.office.country}</p>
                      </div>
                    </div>
                    <div className="contact-item">
                      <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                      <div className="contact-text">
                        <p>{currentContent.office.phone}</p>
                      </div>
                    </div>
                    <div className="contact-item">
                      <FontAwesomeIcon icon={faFax} className="contact-icon" />
                      <div className="contact-text">
                        <p>{currentContent.office.fax}</p>
                      </div>
                    </div>
                    <div className="contact-item">
                      <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                      <div className="contact-text">
                        <p>{currentContent.office.email}</p>
                      </div>
                    </div>
                    <div className="contact-item">
                      <FontAwesomeIcon icon={faClock} className="contact-icon" />
                      <div className="contact-text">
                        <p className="mb-0">{currentContent.office.hours.weekdays}</p>
                        <p>{currentContent.office.hours.weekend}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-md-7">
              <div className="card shadow slide-in-right">
                <div className="card-body">
                  <h3 className="card-title text-center mb-4">{currentContent.form.title}</h3>
                  <ContactForm formLabels={currentContent.form} language={language} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="container-fluid px-0 mb-5">
          <div className="map-container">
            <h3 className="text-center mb-4 slide-up">{currentContent.map.title}</h3>
            <div className="rounded shadow overflow-hidden slide-up" style={{animationDelay: "0.2s"}}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.448893948089!2d46.68422048500468!3d24.713448984120597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sKing%20Fahd%20Rd%2C%20Riyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1652789561752!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title={currentContent.map.altText}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;