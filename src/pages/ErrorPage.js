import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { LanguageContext } from "../App";

const ErrorPage = () => {
  const { language } = useContext(LanguageContext);

  // Content based on language
  const content = {
    en: {
      meta: {
        title: "Page Not Found | Professional Law Firm",
        description: "The page you're looking for doesn't exist."
      },
      title: "404",
      message: "Page Not Found",
      text: "The page you're looking for doesn't exist or has been moved.",
      button: "Back to Home"
    },
    ar: {
      meta: {
        title: "الصفحة غير موجودة | مكتب محاماة محترف",
        description: "الصفحة التي تبحث عنها غير موجودة."
      },
      title: "404",
      message: "الصفحة غير موجودة",
      text: "الصفحة التي تبحث عنها غير موجودة أو تم نقلها.",
      button: "العودة إلى الرئيسية"
    }
  };

  // Select current language content
  const currentContent = content[language];

  return (
    <div className="error-page">
      <Helmet>
        <title>{currentContent.meta.title}</title>
        <meta name="description" content={currentContent.meta.description} />
      </Helmet>
      <div className="error-code">{currentContent.title}</div>
      <div className="error-message">{currentContent.message}</div>
      <p className="mb-4">{currentContent.text}</p>
      <Link to="/" className="btn btn-primary">
        {currentContent.button}
      </Link>
    </div>
  );
};

export default ErrorPage;