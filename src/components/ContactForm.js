import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

const ContactForm = ({ formLabels, language }) => {
  const form = useRef();
  const [status, setStatus] = useState(null);
  
  // Set the form's text direction based on language
  const formDirection = language === "ar" ? "rtl" : "ltr";

  const sendEmail = (e) => {
    e.preventDefault();
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
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("error");
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} dir={formDirection} className="contact-form">
      <div className="row g-3">
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">
            {formLabels.name}
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            {formLabels.email}
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="phone" className="form-label">
            {formLabels.phone}
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="subject" className="form-label">
            {formLabels.subject}
          </label>
          <input
            type="text"
            className="form-control"
            id="subject"
            name="subject"
            required
          />
        </div>
        <div className="col-12">
          <label htmlFor="message" className="form-label">
            {formLabels.message}
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="5"
            required
          ></textarea>
        </div>
        <div className="col-12">
          <button
            type="submit"
            className="btn btn-submit pulse-animation w-100 mt-3"
            disabled={status === "sending"}
          >
            {status === "sending" ? (language === "ar" ? "جاري الإرسال..." : "Sending...") : formLabels.button}
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