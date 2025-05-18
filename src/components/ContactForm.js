import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faSpinner } from "@fortawesome/free-solid-svg-icons";

const ContactForm = ({ formLabels, language }) => {
  const form = useRef();
  const [status, setStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  // Set the form's text direction based on language
  const formDirection = language === "ar" ? "rtl" : "ltr";

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

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear specific error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };

  // Validate form
  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = language === "ar" ? "الاسم مطلوب" : "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = language === "ar" ? "البريد الإلكتروني مطلوب" : "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = language === "ar" ? "البريد الإلكتروني غير صالح" : "Email is invalid";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = language === "ar" ? "الموضوع مطلوب" : "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = language === "ar" ? "الرسالة مطلوبة" : "Message is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setStatus("sending");

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        form.current,
        "YOUR_USER_ID" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("success");
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: ""
          });
          form.current.reset();
          
          // Clear success message after 5 seconds
          setTimeout(() => {
            setStatus(null);
          }, 5000);
        },
        (error) => {
          console.log(error.text);
          setStatus("error");
          
          // Clear error message after 5 seconds
          setTimeout(() => {
            setStatus(null);
          }, 5000);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} dir={formDirection} className="contact-form">
      <div className="row g-3">
        <div className={isMobile ? "col-12" : "col-md-6"}>
          <label htmlFor="name" className="form-label">
            {formLabels.name} <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={language === "ar" ? "أدخل اسمك الكامل" : "Enter your full name"}
            required
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>
        <div className={isMobile ? "col-12" : "col-md-6"}>
          <label htmlFor="email" className="form-label">
            {formLabels.email} <span className="text-danger">*</span>
          </label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={language === "ar" ? "أدخل بريدك الإلكتروني" : "Enter your email address"}
            required
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>
        <div className={isMobile ? "col-12" : "col-md-6"}>
          <label htmlFor="phone" className="form-label">
            {formLabels.phone}
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={language === "ar" ? "أدخل رقم هاتفك (اختياري)" : "Enter your phone number (optional)"}
          />
        </div>
        <div className={isMobile ? "col-12" : "col-md-6"}>
          <label htmlFor="subject" className="form-label">
            {formLabels.subject} <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className={`form-control ${errors.subject ? "is-invalid" : ""}`}
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder={language === "ar" ? "أدخل موضوع الرسالة" : "Enter message subject"}
            required
          />
          {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
        </div>
        <div className="col-12">
          <label htmlFor="message" className="form-label">
            {formLabels.message} <span className="text-danger">*</span>
          </label>
          <textarea
            className={`form-control ${errors.message ? "is-invalid" : ""}`}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder={language === "ar" ? "اكتب رسالتك هنا..." : "Write your message here..."}
            required
          ></textarea>
          {errors.message && <div className="invalid-feedback">{errors.message}</div>}
        </div>
        <div className="col-12">
          <button
            type="submit"
            className="btn btn-primary pulse-animation w-100 mt-3"
            disabled={status === "sending"}
            style={{
              backgroundColor: "var(--primary-color)",
              border: "none",
              padding: "12px",
              fontSize: "1rem",
              fontWeight: "bold",
              transition: "all 0.3s ease"
            }}
          >
            {status === "sending" ? (
              <>
                <FontAwesomeIcon icon={faSpinner} spin className="me-2" />
                {language === "ar" ? "جاري الإرسال..." : "Sending..."}
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
                {formLabels.button}
              </>
            )}
          </button>
        </div>
      </div>

      {status === "success" && (
        <div className="alert alert-success mt-3" role="alert">
          {formLabels.success}
        </div>
      )}

      {status === "error" && (
        <div className="alert alert-danger mt-3" role="alert">
          {formLabels.error}
        </div>
      )}
    </form>
  );
};

export default ContactForm;