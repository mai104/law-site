import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { LanguageContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faBalanceScale,
  faChartLine,
  faBuilding,
  faGavel,
  faFileContract,
  faMoneyBillWave,
  faGlobeAsia
} from "@fortawesome/free-solid-svg-icons";

const CorporateServices = () => {
  const { language } = useContext(LanguageContext);

  // Content based on language
  const content = {
    en: {
      meta: {
        title: "Corporate Services | Saudi Law Firm",
        description: "Expert corporate and business legal services tailored for the Saudi market including company formation, regulatory compliance, commercial disputes, and more."
      },
      title: "CORPORATE SERVICES",
      subtitle: "Business Legal Solutions for Saudi Arabia",
      intro: "Our corporate services are designed to help businesses navigate the legal complexities of operating in Saudi Arabia. We provide comprehensive legal support across all stages of business development, from establishment to expansion, restructuring, and dispute resolution.",
      areas: {
        title: "Our Corporate & Business Legal Services",
        list: [
          {
            icon: faBuilding,
            title: "Company Formation & Licensing",
            description: "Full legal support for establishing various types of business entities in Saudi Arabia, including LLCs, JSCs, and branch offices. We handle all registration requirements, commercial licensing, and regulatory compliance with MISA, SAGIA, and other Saudi authorities."
          },
          {
            icon: faHandshake,
            title: "Commercial Contracts",
            description: "Drafting, reviewing, and negotiating all types of commercial agreements, including distribution agreements, agency agreements, franchise agreements, and service contracts in compliance with Saudi commercial laws."
          },
          {
            icon: faGlobeAsia,
            title: "Foreign Investment Advisory",
            description: "Specialized legal guidance for foreign investors on establishing and maintaining business operations in Saudi Arabia, navigating investment regulations, and optimizing corporate structures for the Saudi market."
          },
          {
            icon: faBalanceScale,
            title: "Commercial Litigation & Dispute Resolution",
            description: "Representation in commercial disputes before Saudi courts, arbitration centers, and administrative committees. We handle contract disputes, shareholder conflicts, and commercial agency disputes with strategic approaches."
          },
          {
            icon: faFileContract,
            title: "Corporate Governance & Compliance",
            description: "Development of corporate governance frameworks in line with Saudi regulations, including board procedures, disclosure policies, and compliance programs to ensure adherence to evolving Saudi laws."
          },
          {
            icon: faChartLine,
            title: "Mergers & Acquisitions",
            description: "Comprehensive legal support for mergers, acquisitions, and joint ventures in Saudi Arabia, including due diligence, transaction structuring, regulatory approvals, and post-merger integration advice."
          },
          {
            icon: faMoneyBillWave,
            title: "Banking & Finance",
            description: "Legal services for banking transactions, Islamic finance arrangements, project financing, and capital markets activities in compliance with Saudi financial regulations and Shariah principles."
          },
          {
            icon: faGavel,
            title: "Corporate Restructuring",
            description: "Strategic advice on corporate reorganizations, debt restructuring, business recovery options, and navigating financial challenges while maintaining business operations in Saudi Arabia."
          }
        ]
      },
      approach: {
        title: "Our Approach to Corporate Legal Services",
        description: "We combine deep knowledge of Saudi regulations with practical business acumen to deliver solutions that are both legally sound and commercially viable. Our team understands the unique business environment in Saudi Arabia and maintains strong relationships with regulatory authorities to ensure efficient handling of corporate matters. We focus on providing clear guidance, proactive risk management, and strategic legal support tailored to each client's specific business objectives."
      },
      consultation: {
        title: "Business Legal Assessment",
        description: "Our initial business legal assessment provides a comprehensive evaluation of your corporate legal needs in the Saudi context. This includes reviewing your business structure, compliance status, contractual framework, and potential legal risks in light of Saudi regulations and your business goals.",
        button: "Request a Consultation"
      },
      testimonials: {
        title: "Client Success Stories",
        list: [
          {
            quote: "The team provided invaluable guidance during our expansion into the Saudi market. Their knowledge of local regulations and business practices was exceptional.",
            client: "International Technology Corporation"
          },
          {
            quote: "When facing a complex commercial dispute, their strategic approach and understanding of Saudi commercial law made all the difference in achieving a favorable outcome.",
            client: "Saudi Trading Company"
          },
          {
            quote: "Their expertise in structuring our joint venture with a Saudi partner ensured compliance with all local requirements while protecting our commercial interests.",
            client: "European Manufacturing Firm"
          }
        ]
      }
    },
    ar: {
      meta: {
        title: "خدمات الشركات | مكتب محاماة سعودي",
        description: "خدمات قانونية متخصصة للشركات مصممة للسوق السعودي تشمل تأسيس الشركات والامتثال التنظيمي والنزاعات التجارية والمزيد."
      },
      title: "خدمات الشركات",
      subtitle: "حلول قانونية للأعمال في المملكة العربية السعودية",
      intro: "صممت خدمات الشركات لدينا لمساعدة الشركات على التنقل في التعقيدات القانونية للعمل في المملكة العربية السعودية. نحن نقدم دعمًا قانونيًا شاملاً عبر جميع مراحل تطوير الأعمال، من التأسيس إلى التوسع وإعادة الهيكلة وحل النزاعات.",
      areas: {
        title: "خدماتنا القانونية للشركات والأعمال",
        list: [
          {
            icon: faBuilding,
            title: "تأسيس الشركات والترخيص",
            description: "دعم قانوني كامل لتأسيس مختلف أنواع الكيانات التجارية في المملكة العربية السعودية، بما في ذلك الشركات ذات المسؤولية المحدودة، وشركات المساهمة، والمكاتب الفرعية. نتعامل مع جميع متطلبات التسجيل والترخيص التجاري والامتثال التنظيمي مع وزارة الاستثمار والهيئة العامة للاستثمار وغيرها من السلطات السعودية."
          },
          {
            icon: faHandshake,
            title: "العقود التجارية",
            description: "صياغة ومراجعة والتفاوض على جميع أنواع الاتفاقيات التجارية، بما في ذلك اتفاقيات التوزيع، واتفاقيات الوكالة، واتفاقيات الامتياز، وعقود الخدمات بما يتوافق مع القوانين التجارية السعودية."
          },
          {
            icon: faGlobeAsia,
            title: "استشارات الاستثمار الأجنبي",
            description: "إرشادات قانونية متخصصة للمستثمرين الأجانب حول تأسيس والحفاظ على العمليات التجارية في المملكة العربية السعودية، والتنقل في لوائح الاستثمار، وتحسين الهياكل المؤسسية للسوق السعودي."
          },
          {
            icon: faBalanceScale,
            title: "التقاضي التجاري وحل النزاعات",
            description: "التمثيل في النزاعات التجارية أمام المحاكم السعودية ومراكز التحكيم واللجان الإدارية. نتعامل مع نزاعات العقود، وخلافات المساهمين، ونزاعات الوكالات التجارية بنهج استراتيجي."
          },
          {
            icon: faFileContract,
            title: "حوكمة الشركات والامتثال",
            description: "تطوير أطر حوكمة الشركات بما يتماشى مع اللوائح السعودية، بما في ذلك إجراءات مجلس الإدارة، وسياسات الإفصاح، وبرامج الامتثال لضمان الالتزام بالقوانين السعودية المتطورة."
          },
          {
            icon: faChartLine,
            title: "عمليات الاندماج والاستحواذ",
            description: "دعم قانوني شامل لعمليات الاندماج والاستحواذ والمشاريع المشتركة في المملكة العربية السعودية، بما في ذلك العناية الواجبة، وهيكلة المعاملات، والموافقات التنظيمية، ونصائح ما بعد الاندماج."
          },
          {
            icon: faMoneyBillWave,
            title: "الخدمات المصرفية والتمويل",
            description: "خدمات قانونية للمعاملات المصرفية، وترتيبات التمويل الإسلامي، وتمويل المشاريع، وأنشطة أسواق المال بما يتوافق مع اللوائح المالية السعودية ومبادئ الشريعة."
          },
          {
            icon: faGavel,
            title: "إعادة هيكلة الشركات",
            description: "نصائح استراتيجية بشأن إعادة تنظيم الشركات، وإعادة هيكلة الديون، وخيارات إنعاش الأعمال، والتنقل في التحديات المالية مع الحفاظ على عمليات الأعمال في المملكة العربية السعودية."
          }
        ]
      },
      approach: {
        title: "نهجنا في الخدمات القانونية للشركات",
        description: "نحن نجمع بين المعرفة العميقة باللوائح السعودية والفطنة التجارية العملية لتقديم حلول سليمة قانونياً وقابلة للتطبيق تجارياً. يفهم فريقنا بيئة الأعمال الفريدة في المملكة العربية السعودية ويحافظ على علاقات قوية مع السلطات التنظيمية لضمان التعامل الفعال مع المسائل المؤسسية. نركز على تقديم توجيهات واضحة، وإدارة استباقية للمخاطر، ودعم قانوني استراتيجي مصمم وفقًا للأهداف التجارية المحددة لكل عميل."
      },
      consultation: {
        title: "تقييم الأعمال القانوني",
        description: "يوفر تقييم الأعمال القانوني الأولي لدينا تقييمًا شاملاً لاحتياجاتك القانونية المؤسسية في السياق السعودي. يشمل ذلك مراجعة هيكل عملك، وحالة الامتثال، والإطار التعاقدي، والمخاطر القانونية المحتملة في ضوء اللوائح السعودية وأهداف عملك.",
        button: "طلب استشارة"
      },
      testimonials: {
        title: "قصص نجاح العملاء",
        list: [
          {
            quote: "قدم الفريق توجيهات لا تقدر بثمن خلال توسعنا في السوق السعودي. كانت معرفتهم باللوائح والممارسات التجارية المحلية استثنائية.",
            client: "شركة تكنولوجيا عالمية"
          },
          {
            quote: "عند مواجهة نزاع تجاري معقد، أحدث نهجهم الاستراتيجي وفهمهم للقانون التجاري السعودي فرقًا كبيرًا في تحقيق نتيجة إيجابية.",
            client: "شركة تجارية سعودية"
          },
          {
            quote: "ساعدت خبرتهم في هيكلة مشروعنا المشترك مع شريك سعودي على ضمان الامتثال لجميع المتطلبات المحلية مع حماية مصالحنا التجارية.",
            client: "شركة تصنيع أوروبية"
          }
        ]
      }
    }
  };

  // Map icon names to actual icons
  const iconMap = {
    faBuilding,
    faHandshake,
    faGlobeAsia,
    faBalanceScale,
    faFileContract,
    faChartLine,
    faMoneyBillWave,
    faGavel
  };

  // Select current language content
  const currentContent = content[language];

  return (
    <>
      <div className="corporate-services-page">
        <Helmet>
          <title>{currentContent.meta.title}</title>
          <meta
            name="description"
            content={currentContent.meta.description}
          />
        </Helmet>

        {/* Header Section */}
        <div className="services-header">
          <div className="services-overlay"></div>
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

        {/* Corporate Services */}
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 text-center mb-4">
              <h2 className="section-title slide-up">{currentContent.areas.title}</h2>
            </div>
          </div>
          <div className="row g-4">
            {currentContent.areas.list.map((area, index) => (
              <div className="col-md-6 col-lg-6" key={index}>
                <div className="card h-100 shadow-sm service-card slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="card-body d-flex flex-column">
                    <div className="d-flex align-items-center mb-3">
                      <div className="icon-container me-3">
                        <FontAwesomeIcon icon={iconMap[area.icon.name]} className="service-icon" />
                      </div>
                      <h5 className="card-title mb-0">{area.title}</h5>
                    </div>
                    <p className="card-text">{area.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Approach Section */}
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 text-center mb-4">
              <h2 className="section-title slide-up">{currentContent.approach.title}</h2>
            </div>
            <div className="col-12">
              <div className="card shadow-sm bg-light">
                <div className="card-body">
                  <p className="fs-5 slide-up" style={{animationDelay: "0.2s"}}>{currentContent.approach.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 text-center mb-4">
              <h2 className="section-title slide-up">{currentContent.testimonials.title}</h2>
            </div>
          </div>
          <div className="row g-4">
            {currentContent.testimonials.list.map((testimonial, index) => (
              <div className="col-md-4" key={index}>
                <div className="card h-100 shadow testimonial-card slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="card-body">
                    <div className="quote-mark text-primary mb-3">
                      <i className="fas fa-quote-left fa-2x"></i>
                    </div>
                    <p className="card-text fst-italic mb-4">{testimonial.quote}</p>
                    <div className="testimonial-client">
                      <p className="fw-bold text-end">— {testimonial.client}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Consultation Section */}
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-12 text-center mb-4">
              <h2 className="section-title slide-up">{currentContent.consultation.title}</h2>
            </div>
            <div className="col-md-8 mx-auto">
              <div className="card shadow">
                <div className="card-body text-center">
                  <p className="card-text slide-up" style={{animationDelay: "0.2s"}}>{currentContent.consultation.description}</p>
                  <a href="/contact" className="btn btn-primary mt-3 pulse-animation" style={{animationDelay: "0.4s"}}>
                    {currentContent.consultation.button}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CorporateServices;