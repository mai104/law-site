import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faFileCircleCheck,
  faCommentsDollar,
  faGavel,
  faBalanceScale,
  faHandshake,
  faUserTie,
  faUniversity
} from "@fortawesome/free-solid-svg-icons";
import { LanguageContext } from "../App";

const Home = () => {
  const { language } = useContext(LanguageContext);

  // Content based on language
  const content = {
    en: {
      meta: {
        title: "Saudi Law Firm | Legal and Insolvency Services",
        description: "Our Saudi Law Firm provides specialized consultation, assistance, and representation for legal or insolvency issues in accordance with Saudi regulations."
      },
      hero: {
        title: "PROFESSIONAL LAW FIRM",
        subtitle: "LEGAL AND INSOLVENCY SERVICES",
        location: "Saudi Arabia",
        quote: "\"Justice is the foundation of governance\" - Saudi Arabian Legal Principle"
      },
      buttons: {
        appointment: "Book Appointment",
        evaluation: "Request Evaluation",
        fees: "Service Fees"
      },
      intro: {
        title: "WELCOME",
        question: "Are you facing a legal challenge in Saudi Arabia?",
        text: "Our Law Firm provides specialized consultation, assistance, and representation for legal and commercial matters under Saudi law. We offer expert guidance on corporate structuring, foreign investment, commercial disputes, and regulatory compliance in the Kingdom. Our team is committed to finding the best solutions while preserving your business reputation."
      },
      services: {
        title: "OUR SERVICES",
        subtitle: "Areas of Expertise",
        legal: {
          title: "Legal Services",
          description: "Comprehensive legal assistance and representation in Saudi commercial law, company formation, foreign investment regulations, civil disputes, labor law, commercial agencies, and regulatory compliance with Saudi authorities.",
          button: "Learn More"
        },
        insolvency: {
          title: "Business Solutions",
          description: "Expert services in business restructuring, debt recovery, commercial disputes, mergers and acquisitions, contract drafting and review, and practical solutions for businesses operating in the Saudi market.",
          button: "Learn More"
        }
      },
      about: {
        title: "ABOUT US",
        subtitle: "Who We Are",
        text: "We are your trusted legal partner in Saudi Arabia, offering professional solutions for all commercial, regulatory, and contractual matters. Our team combines deep knowledge of Saudi laws with international business expertise to provide practical and effective legal guidance. With over 10 years of experience navigating the Saudi legal landscape, we bring professionalism and cultural understanding to every case."
      },
      expertise: {
        title: "WHY CHOOSE US",
        subtitle: "Our Unique Strengths",
        list: [
          "Deep understanding of Saudi regulations and business practices",
          "Bilingual expertise (Arabic and English) for seamless communication",
          "Strategic approach to legal and business challenges",
          "Strong relationships with Saudi governmental authorities",
          "Commitment to ethical and Shariah-compliant solutions",
          "Comprehensive support through our network of specialists"
        ],
        experience: "years of experience"
      },
      featuredServices: {
        title: "SPECIALIZED SOLUTIONS",
        items: [
          {
            icon: "faBalanceScale",
            title: "Commercial Litigation",
            description: "Expert representation in commercial disputes before Saudi courts and arbitration centers"
          },
          {
            icon: "faHandshake",
            title: "Foreign Investment",
            description: "Comprehensive guidance for establishing and operating businesses in Saudi Arabia"
          },
          {
            icon: "faUserTie",
            title: "Corporate Structuring",
            description: "Strategic advice on optimal corporate structures for the Saudi market"
          },
          {
            icon: "faUniversity",
            title: "Regulatory Compliance",
            description: "Ensuring full compliance with Saudi regulations and governmental requirements"
          }
        ]
      }
    },
    ar: {
      meta: {
        title: "مكتب محاماة سعودي | خدمات قانونية وحلول الأعمال",
        description: "يقدم مكتب المحاماة السعودي لدينا استشارات متخصصة ومساعدة وتمثيل في القضايا القانونية وفقًا للأنظمة السعودية."
      },
      hero: {
        title: "مكتب محاماة محترف",
        subtitle: "خدمات قانونية وحلول أعمال",
        location: "المملكة العربية السعودية",
        quote: "\"العدل أساس الملك\" - مبدأ قانوني سعودي"
      },
      buttons: {
        appointment: "حجز موعد",
        evaluation: "طلب تقييم",
        fees: "رسوم الخدمات"
      },
      intro: {
        title: "مرحبًا بكم",
        question: "هل تواجه تحديًا قانونيًا في المملكة العربية السعودية؟",
        text: "يقدم مكتب المحاماة لدينا استشارات متخصصة ومساعدة وتمثيل في المسائل القانونية والتجارية بموجب القانون السعودي. نقدم إرشادات خبيرة حول الهيكلة المؤسسية والاستثمار الأجنبي والنزاعات التجارية والامتثال التنظيمي في المملكة. يلتزم فريقنا بإيجاد أفضل الحلول مع الحفاظ على سمعة عملك التجارية."
      },
      services: {
        title: "خدماتنا",
        subtitle: "مجالات الخبرة",
        legal: {
          title: "الخدمات القانونية",
          description: "مساعدة وتمثيل قانوني شامل في القانون التجاري السعودي، وتأسيس الشركات، وأنظمة الاستثمار الأجنبي، والنزاعات المدنية، وقانون العمل، والوكالات التجارية، والامتثال التنظيمي مع السلطات السعودية.",
          button: "اعرف المزيد"
        },
        insolvency: {
          title: "حلول الأعمال",
          description: "خدمات متخصصة في إعادة هيكلة الأعمال، واسترداد الديون، والنزاعات التجارية، وعمليات الاندماج والاستحواذ، وصياغة ومراجعة العقود، وحلول عملية للشركات العاملة في السوق السعودي.",
          button: "اعرف المزيد"
        }
      },
      about: {
        title: "من نحن",
        subtitle: "من نحن",
        text: "نحن شريكك القانوني الموثوق في المملكة العربية السعودية، ونقدم حلولاً احترافية لجميع المسائل التجارية والتنظيمية والتعاقدية. يجمع فريقنا بين المعرفة العميقة بالقوانين السعودية والخبرة في الأعمال الدولية لتقديم إرشادات قانونية عملية وفعالة. مع أكثر من 10 سنوات من الخبرة في التنقل في المشهد القانوني السعودي، نحن نجلب الاحترافية والفهم الثقافي لكل قضية."
      },
      expertise: {
        title: "لماذا تختارنا",
        subtitle: "نقاط قوتنا الفريدة",
        list: [
          "فهم عميق للأنظمة والممارسات التجارية السعودية",
          "خبرة ثنائية اللغة (العربية والإنجليزية) للتواصل السلس",
          "نهج استراتيجي للتحديات القانونية والتجارية",
          "علاقات قوية مع الجهات الحكومية السعودية",
          "الالتزام بالحلول الأخلاقية والمتوافقة مع الشريعة",
          "دعم شامل من خلال شبكتنا من المتخصصين"
        ],
        experience: "سنوات من الخبرة"
      },
      featuredServices: {
        title: "حلول متخصصة",
        items: [
          {
            icon: "faBalanceScale",
            title: "التقاضي التجاري",
            description: "تمثيل متخصص في النزاعات التجارية أمام المحاكم السعودية ومراكز التحكيم"
          },
          {
            icon: "faHandshake",
            title: "الاستثمار الأجنبي",
            description: "إرشادات شاملة لتأسيس وتشغيل الأعمال في المملكة العربية السعودية"
          },
          {
            icon: "faUserTie",
            title: "الهيكلة المؤسسية",
            description: "نصائح استراتيجية حول الهياكل المؤسسية المثلى للسوق السعودي"
          },
          {
            icon: "faUniversity",
            title: "الامتثال التنظيمي",
            description: "ضمان الامتثال الكامل للوائح السعودية والمتطلبات الحكومية"
          }
        ]
      }
    }
  };

  // Map icon names to actual icons
  const iconMap = {
    faBalanceScale: faBalanceScale,
    faHandshake: faHandshake,
    faUserTie: faUserTie,
    faUniversity: faUniversity
  };

  // Select current language content
  const currentContent = content[language];

  return (
    <>
      <div className="home-page">
        <Helmet>
          <title>{currentContent.meta.title}</title>
          <meta name="description" content={currentContent.meta.description} />
        </Helmet>
        
        {/* HERO SECTION */}
        <div className="container-fluid">
          <div className="row">
            <div className="hero-section">
              <div className="hero-overlay"></div>
              <div className="text-container d-flex flex-column justify-content-start align-items-start pt-6 fade-in">
                <div className="text-1 fs-2 pb-3">{currentContent.hero.title}</div>
                <div className="text-2 fs-4">
                  {currentContent.hero.subtitle}
                  <span className="fw-bold">
                    <br />{currentContent.hero.location}
                  </span>
                </div>
                <div className="text-3 fst-italic fw-light">
                  {currentContent.hero.quote}
                </div>
              </div>
              
              {/* horizontal buttons for desktop */}
              <div className="horizontal-btn d-none d-md-flex justify-content-center align-items-end w-100 h-100">
                <div className="col flex-grow-1">
                  <Link to="/contact">
                    <button
                      id="horizontal1"
                      className="btn btn-outline-dark btn-lg type-button p-4 w-100 fw-bold scale-on-hover"
                      aria-label={currentContent.buttons.appointment}
                    >
                      <span className="p-3">
                        <FontAwesomeIcon icon={faCalendarCheck} size="1x" />
                      </span>
                      {currentContent.buttons.appointment}
                    </button>
                  </Link>
                </div>
                <div className="col flex-grow-1">
                  <Link to="/contact">
                    <button
                      className="btn btn-lg btn-outline-dark type-button p-4 w-100 fw-bold scale-on-hover"
                      aria-label={currentContent.buttons.evaluation}
                    >
                      <span className="p-3">
                        <FontAwesomeIcon icon={faFileCircleCheck} size="1x" />
                      </span>
                      {currentContent.buttons.evaluation}
                    </button>
                  </Link>
                </div>
                <div className="col flex-grow-1">
                  <Link to="/information">
                    <button
                      className="btn btn-lg btn-outline-dark type-button p-4 w-100 fw-bold scale-on-hover"
                      aria-label={currentContent.buttons.fees}
                    >
                      <span className="p-3">
                        <FontAwesomeIcon icon={faCommentsDollar} size="1x" />
                      </span>
                      {currentContent.buttons.fees}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* small screens buttons*/}
            <div className="mobile-btn d-md-none d-flex justify-content-between pt-2">
              <Link to="/contact">
                <button
                  id="small"
                  className="btn btn-outline-dark type-button p-2 mb-1 btn-md me-1 scale-on-hover"
                  aria-label={currentContent.buttons.appointment}
                >
                  <span className="p-3">
                    <FontAwesomeIcon icon={faCalendarCheck} size="1x" />
                  </span>
                  {currentContent.buttons.appointment}
                </button>
              </Link>
              <Link to="/contact">
                <button
                  className="btn btn-outline-dark type-button p-2 mb-1 btn-md me-1 scale-on-hover"
                  aria-label={currentContent.buttons.evaluation}
                >
                  <span className="p-3">
                    <FontAwesomeIcon icon={faFileCircleCheck} size="1x" />
                  </span>
                  {currentContent.buttons.evaluation}
                </button>
              </Link>
              <Link to="/information">
                <button
                  className="btn btn-outline-dark type-button p-2 btn-md scale-on-hover"
                  aria-label={currentContent.buttons.fees}
                >
                  <span className="p-3">
                    <FontAwesomeIcon icon={faCommentsDollar} size="1x" />
                  </span>
                  {currentContent.buttons.fees}
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* FEATURED SERVICES SECTION */}
        <section className="featured-services py-5">
          <div className="container">
            <h6 className="guide-text slide-up">{currentContent.featuredServices.title}</h6>
            <div className="row g-4 mt-2">
              {currentContent.featuredServices.items.map((item, index) => (
                <div className="col-md-6 col-lg-3" key={index}>
                  <div className="service-card text-center p-4 h-100 slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="icon-container mb-3">
                      <FontAwesomeIcon icon={iconMap[item.icon]} size="3x" className="service-icon" />
                    </div>
                    <h5 className="service-title mb-3">{item.title}</h5>
                    <p className="service-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INTRO SECTION */}
        <section className="card py-5 px-3 border-0">
          <div className="row">
            <div className="col-lg-7">
              <div className="card-body slide-in-left">
                <h6 className="guide-text mb-4">{currentContent.intro.title}</h6>
                <h5 className="lh-base text-center pb-4">
                  {currentContent.intro.question}
                </h5>

                <p className="text-separator fw-normal">
                  {currentContent.intro.text}
                </p>
              </div>
            </div>

            <div className="col-lg-5 d-flex align-items-center justify-content-center">
              <div className="slide-in-right">
                <img
                  src="https://via.placeholder.com/600x400/cccccc/444444?text=Saudi+Legal+Services"
                  className="intro-img img-fluid d-block rounded-2 shadow"
                  alt="Legal services in Saudi Arabia"
                  style={{ maxHeight: "300px" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <div className="">
          <div className="row">
            <div className="col">
              <div className="services-section">
                <div className="services-overlay"></div>

                <div className="services-content container mt-3">
                  <h6 className="guide-text fade-in">{currentContent.services.title}</h6>

                  <h5 className="lh-base text-center pb-3 fade-in">
                    {currentContent.services.subtitle}
                  </h5>
                  <div className="row mt-3 gx-3 flex-column flex-md-row">
                    <div className="col-md-6 slide-in-left">
                      <h5 className="color text-center pb-4">
                        {currentContent.services.legal.title}
                      </h5>
                      <div className="d-flex align-items-center">
                        <div className="service-icon-container mx-auto">
                          <FontAwesomeIcon icon={faBalanceScale} size="4x" className="service-main-icon" />
                        </div>
                      </div>
                      <p className="pt-4 px-2">
                        {currentContent.services.legal.description}
                      </p>
                      <div className="py-3 text-center">
                        <Link to="/legal-services">
                          <button
                            type="button"
                            className="btn btn-primary mb-4 pulse-animation"
                            aria-label={currentContent.services.legal.button}
                          >
                            {currentContent.services.legal.button}
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-6 slide-in-right">
                      <h5 className="color text-center pb-4">
                        {currentContent.services.insolvency.title}
                      </h5>
                      <div className="d-flex align-items-center">
                        <div className="service-icon-container mx-auto">
                          <FontAwesomeIcon icon={faHandshake} size="4x" className="service-main-icon" />
                        </div>
                      </div>
                      <p className="pt-4 px-2">
                        {currentContent.services.insolvency.description}
                      </p>
                      <div className="py-3 text-center">
                        <Link to="/insolvency-services">
                          <button
                            type="button"
                            className="btn btn-primary mb-4 pulse-animation"
                            aria-label={currentContent.services.insolvency.button}
                          >
                            {currentContent.services.insolvency.button}
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ABOUT US SECTION */}
        <section className="card py-4 px-3 border-0">
          <div className="row">
            <div className="col-lg-7">
              <div className="card-body slide-in-left">
                <p className="guide-text mb-4">{currentContent.about.title}</p>
                <h5 className="lh-base text-center pb-4">{currentContent.about.subtitle}</h5>

                <p className="text-separator fw-normal">
                  {currentContent.about.text}
                </p>
              </div>
            </div>
            <div className="col-lg-5 d-flex align-items-center justify-content-center">
              <div className="slide-in-right">
                <img
                  src="https://via.placeholder.com/600x400/cccccc/444444?text=Saudi+Legal+Team"
                  className="intro-img img-fluid d-block rounded-2 shadow"
                  alt="Professional legal team in Saudi Arabia"
                  style={{ maxHeight: "300px" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* EXPERTISE SECTION */}
        <section className="recommendation p-3 bg-image m-3 px-0">
          <h6 className="guide-text fade-in">{currentContent.expertise.title}</h6>
          <div className="container d-flex flex-column justify-content-center align-items-center">
            <h5 className="h-50 lh-base text-center pb-4 fade-in">{currentContent.expertise.subtitle}</h5>
          </div>
          <div className="row mt-4 flex-column flex-md-row mb-3">
            <div className="col col-md-7 order-md-2 slide-in-right">
              <ul className="my-list">
                {currentContent.expertise.list.map((item, index) => (
                  <li key={index} className="fade-in" style={{animationDelay: `${index * 0.1}s`}}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="col col-md-5 order-md-2 mt-5 slide-in-left">
              <div className="square container d-flex flex-column justify-content-center align-items-center py-5 w-50 border border-white border-4 fw-bold rotate-on-hover">
                <div>
                  <FontAwesomeIcon icon={faGavel} size="2x" className="mb-2" />
                </div>
                <div className="fs-1">10+</div>
                <div>{currentContent.expertise.experience}</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="cta-section text-center py-5">
          <div className="container">
            <div className="cta-content bg-primary text-white p-5 rounded-3 shadow slide-up">
              <h2 className="mb-4">{language === 'en' ? 'Ready to Discuss Your Legal Needs?' : 'هل أنت مستعد لمناقشة احتياجاتك القانونية؟'}</h2>
              <p className="mb-4">{language === 'en' ? 'Contact us today for a confidential consultation with our expert legal team.' : 'اتصل بنا اليوم للحصول على استشارة سرية مع فريقنا القانوني المتخصص.'}</p>
              <Link to="/contact">
                <button className="btn btn-light btn-lg pulse-animation">
                  {language === 'en' ? 'Contact Us Now' : 'اتصل بنا الآن'}
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;