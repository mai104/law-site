import React, { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Home from "./pages/Home";
import LegalServices from "./pages/LegalServices";
import CorporateServices from "./pages/InsolvencyServices"; // تم تغيير الاسم لكن ملف المصدر لم يتغير
import Info from "./pages/Info";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ErrorPage from "./pages/ErrorPage";

// Create a context for language
export const LanguageContext = createContext();

function App() {
  // State for language (en = English, ar = Arabic)
  const [language, setLanguage] = useState("ar"); // تعيين اللغة الافتراضية للعربية

  // Function to toggle language
  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === "en" ? "ar" : "en");
  };

  // Page title and description based on language
  const metaContent = {
    en: {
      title: "Saudi Law Firm | Legal and Corporate Services",
      description: "Professional Saudi law firm offering comprehensive legal and corporate services in accordance with Saudi regulations. Expert consultation, assistance, and representation."
    },
    ar: {
      title: "مكتب محاماة سعودي | خدمات قانونية وخدمات الشركات",
      description: "مكتب محاماة سعودي محترف يقدم خدمات قانونية وخدمات شركات شاملة وفقًا للأنظمة السعودية. استشارات ومساعدة وتمثيل متخصص."
    }
  };

  return (
    <div className="App" dir={language === "ar" ? "rtl" : "ltr"}>
      <LanguageContext.Provider value={{ language, toggleLanguage }}>
        <BrowserRouter>
          <Helmet>
            <title>{metaContent[language].title}</title>
            <meta
              name="description"
              content={metaContent[language].description}
            />
            {language === "ar" && <html lang="ar" dir="rtl" />}
          </Helmet>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/information" element={<Info />} />
            <Route path="/legal-services" element={<LegalServices />} />
            <Route path="/insolvency-services" element={<CorporateServices />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;