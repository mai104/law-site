import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { LanguageContext } from "../App";

const LegalServices = () => {
  const { language } = useContext(LanguageContext);

  // Content based on language
  const content = {
    en: {
      meta: {
        title: "Legal Services | Professional Law Firm",
        description: "Comprehensive legal services including commercial law, civil law, company formation, insolvency procedures, debt recovery, and more."
      },
      title: "LEGAL SERVICES",
      subtitle: "Professional Legal Assistance and Representation",
      intro: "Our law firm offers a wide range of legal services to both individuals and businesses. We provide professional legal assistance and representation in various areas of law, with a focus on commercial and civil matters.",
      areas: {
        title: "Main Areas of Practice",
        list: [
          {
            title: "Commercial Law",
            description: "Legal support for businesses and entrepreneurs in contract negotiation, drafting, review, commercial agreements, and business operations."
          },
          {
            title: "Company Formation",
            description: "Full legal support for starting a new business, including advice on business entity type, registration, drafting articles of association, and other formalities."
          },
          {
            title: "Civil Law",
            description: "Representation in civil disputes, including property rights, contractual obligations, tort actions, and family matters."
          },
          {
            title: "Labor Law",
            description: "Assistance with employment contracts, workplace disputes, termination proceedings, and labor compliance issues."
          },
          {
            title: "Family Law",
            description: "Legal support for family matters including divorce, child custody, alimony, and property division."
          },
          {
            title: "Insolvency Procedures",
            description: "Legal guidance on insolvency matters, bankruptcy proceedings, and debt restructuring options."
          },
          {
            title: "Debt Recovery",
            description: "Efficient strategies for recovering outstanding debts, including negotiation, mediation, and court proceedings when necessary."
          },
          {
            title: "Administrative Law",
            description: "Representation before administrative authorities and in disputes with public institutions."
          }
        ]
      },
      approach: {
        title: "Our Approach",
        description: "We believe in a client-centered approach to legal services. Our team of experienced lawyers works closely with each client to understand their specific needs and develop tailored legal solutions. We prioritize clear communication, transparency, and efficiency in all our legal services."
      },
      consultation: {
        title: "Initial Consultation",
        description: "We offer comprehensive initial consultations to understand your legal needs and provide preliminary guidance. During this consultation, we will assess your situation, discuss potential legal strategies, and outline how we can assist you.",
        button: "Schedule a Consultation"
      }
    },
    ar: {
      meta: {
        title: "الخدمات القانونية | مكتب محاماة محترف",
        description: "خدمات قانونية شاملة تشمل القانون التجاري، والقانون المدني، وتكوين الشركات، وإجراءات الإعسار، واسترداد الديون، والمزيد."
      },
      title: "الخدمات القانونية",
      subtitle: "مساعدة وتمثيل قانوني محترف",
      intro: "يقدم مكتب المحاماة لدينا مجموعة واسعة من الخدمات القانونية للأفراد والشركات على حد سواء. نحن نقدم المساعدة والتمثيل القانوني المهني في مختلف مجالات القانون، مع التركيز على المسائل التجارية والمدنية.",
      areas: {
        title: "المجالات الرئيسية للممارسة",
        list: [
          {
            title: "القانون التجاري",
            description: "الدعم القانوني للشركات ورجال الأعمال في التفاوض على العقود وصياغتها ومراجعتها والاتفاقات التجارية وعمليات الأعمال."
          },
          {
            title: "تأسيس الشركات",
            description: "دعم قانوني كامل لبدء عمل تجاري جديد، بما في ذلك المشورة بشأن نوع الكيان التجاري والتسجيل وصياغة النظام الأساسي وغيرها من الإجراءات الشكلية."
          },
          {
            title: "القانون المدني",
            description: "التمثيل في النزاعات المدنية، بما في ذلك حقوق الملكية والالتزامات التعاقدية وإجراءات الضرر والمسائل العائلية."
          },
          {
            title: "قانون العمل",
            description: "المساعدة في عقود العمل ونزاعات مكان العمل وإجراءات الإنهاء وقضايا الامتثال للعمل."
          },
          {
            title: "قانون الأسرة",
            description: "الدعم القانوني للمسائل العائلية بما في ذلك الطلاق وحضانة الأطفال والنفقة وتقسيم الممتلكات."
          },
          {
            title: "إجراءات الإعسار",
            description: "التوجيه القانوني بشأن مسائل الإعسار وإجراءات الإفلاس وخيارات إعادة هيكلة الديون."
          },
          {
            title: "استرداد الديون",
            description: "استراتيجيات فعالة لاسترداد الديون المستحقة، بما في ذلك التفاوض والوساطة والإجراءات القضائية عند الضرورة."
          },
          {
            title: "القانون الإداري",
            description: "التمثيل أمام السلطات الإدارية وفي النزاعات مع المؤسسات العامة."
          }
        ]
      },
      approach: {
        title: "نهجنا",
        description: "نحن نؤمن بنهج يركز على العميل للخدمات القانونية. يعمل فريقنا من المحامين ذوي الخبرة بشكل وثيق مع كل عميل لفهم احتياجاته المحددة وتطوير حلول قانونية مخصصة. نحن نعطي الأولوية للتواصل الواضح والشفافية والكفاءة في جميع خدماتنا القانونية."
      },
      consultation: {
        title: "الاستشارة الأولية",
        description: "نقدم استشارات أولية شاملة لفهم احتياجاتك القانونية وتقديم التوجيه الأولي. خلال هذه الاستشارة، سنقيم وضعك، ونناقش الاستراتيجيات القانونية المحتملة، ونحدد كيف يمكننا مساعدتك.",
        button: "جدولة استشارة"
      }
    }
  };

  // Select current language content
  const currentContent = content[language];

  return (
    <>
      <div className="legal-services-page">
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
                <h1 className="display-4">{currentContent.title}</h1>
                <p className="lead">{currentContent.subtitle}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Introduction Section */}
        <div className="container mt-5">
          <div className="row">
            <div className="col-12">
              <p className="fs-5 text-center">{currentContent.intro}</p>
            </div>
          </div>
        </div>

        {/* Main Areas of Practice */}
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 text-center mb-4">
              <h2>{currentContent.areas.title}</h2>
            </div>
          </div>
          <div className="row g-4">
            {currentContent.areas.list.map((area, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{area.title}</h5>
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
              <h2>{currentContent.approach.title}</h2>
            </div>
            <div className="col-12">
              <p className="fs-5 text-center">{currentContent.approach.description}</p>
            </div>
          </div>
        </div>

        {/* Consultation Section */}
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-12 text-center mb-4">
              <h2>{currentContent.consultation.title}</h2>
            </div>
            <div className="col-md-8 mx-auto">
              <div className="card shadow">
                <div className="card-body text-center">
                  <p className="card-text">{currentContent.consultation.description}</p>
                  <a href="/contact" className="btn btn-primary mt-3">
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

export default LegalServices;