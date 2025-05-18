import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { LanguageContext } from "../App";

const Info = () => {
  const { language } = useContext(LanguageContext);

  // Content based on language
  const content = {
    en: {
      meta: {
        title: "Legal Information | Professional Law Firm",
        description: "Important information about legal processes, fees, and frequently asked questions related to legal and insolvency services."
      },
      title: "INFORMATION CENTER",
      subtitle: "Resources & Important Information",
      intro: "This page contains valuable information to help you better understand legal processes, our fee structure, and answers to frequently asked questions. Being well-informed is the first step toward effectively addressing your legal challenges.",
      sections: [
        {
          title: "Fee Structure",
          content: [
            {
              subtitle: "Initial Consultation",
              details: "We offer a 30-minute initial consultation at a fixed rate of $150. During this consultation, we'll discuss your situation, provide preliminary guidance, and outline potential next steps."
            },
            {
              subtitle: "Hourly Rates",
              details: "Our standard hourly rates range from $250 to $450 per hour, depending on the complexity of your case and the seniority of the attorney handling your matter."
            },
            {
              subtitle: "Fixed Fee Services",
              details: "For certain standardized services, we offer fixed fee arrangements. These include company formation ($1,500), basic contract drafting ($800-$1,200), and simple will preparation ($500)."
            },
            {
              subtitle: "Retainer Arrangements",
              details: "For ongoing legal support, we offer monthly retainer packages starting at $2,000 per month, which includes a set number of hours and priority access to our legal team."
            }
          ]
        },
        {
          title: "Legal Process Information",
          content: [
            {
              subtitle: "Business Formation Timeline",
              details: "The process of forming a new business entity typically takes 2-3 weeks from initial consultation to completion of all required documentation and registration."
            },
            {
              subtitle: "Insolvency Procedure Overview",
              details: "The insolvency process generally involves an initial assessment (1-2 weeks), filing of necessary documentation (1 week), creditor notification period (30-45 days), followed by the development and implementation of a resolution plan, which can vary significantly in duration depending on complexity."
            },
            {
              subtitle: "Court Proceedings Expectations",
              details: "Legal proceedings can vary widely in duration. Simple civil cases may be resolved in 6-12 months, while more complex litigation can take several years. We provide detailed timelines during our consultations based on your specific circumstances."
            }
          ]
        },
        {
          title: "Frequently Asked Questions",
          content: [
            {
              subtitle: "When should I consult with a lawyer?",
              details: "It's best to consult with a lawyer as early as possible when facing any significant legal or financial challenge. Early intervention often leads to more options and better outcomes."
            },
            {
              subtitle: "What should I bring to my first meeting?",
              details: "For your initial consultation, please bring any relevant documents related to your situation, such as contracts, correspondence, financial statements, or court notices. Also prepare a chronological summary of events to help us understand your situation quickly."
            },
            {
              subtitle: "How long will my case take?",
              details: "The duration varies significantly depending on the nature and complexity of your case. During your consultation, we'll provide an estimated timeline based on your specific circumstances and keep you updated as your case progresses."
            },
            {
              subtitle: "What are the alternatives to litigation?",
              details: "Alternatives to litigation include negotiation, mediation, arbitration, and various forms of alternative dispute resolution. We discuss all available options and recommend the most appropriate approach for your situation."
            }
          ]
        }
      ]
    },
    ar: {
      meta: {
        title: "معلومات قانونية | مكتب محاماة محترف",
        description: "معلومات مهمة حول العمليات القانونية والرسوم والأسئلة الشائعة المتعلقة بالخدمات القانونية وخدمات الإعسار."
      },
      title: "مركز المعلومات",
      subtitle: "الموارد والمعلومات المهمة",
      intro: "تحتوي هذه الصفحة على معلومات قيمة لمساعدتك على فهم العمليات القانونية وهيكل الرسوم لدينا وإجابات للأسئلة الشائعة بشكل أفضل. إن كونك على دراية جيدة هو الخطوة الأولى نحو معالجة تحدياتك القانونية بشكل فعال.",
      sections: [
        {
          title: "هيكل الرسوم",
          content: [
            {
              subtitle: "استشارة أولية",
              details: "نقدم استشارة أولية مدتها 30 دقيقة بسعر ثابت قدره 150 دولارًا. خلال هذه الاستشارة، سنناقش وضعك، ونقدم توجيهات أولية، ونحدد الخطوات المحتملة التالية."
            },
            {
              subtitle: "الأسعار بالساعة",
              details: "تتراوح أسعارنا القياسية بالساعة من 250 إلى 450 دولارًا في الساعة، اعتمادًا على تعقيد قضيتك وأقدمية المحامي الذي يتعامل مع مسألتك."
            },
            {
              subtitle: "خدمات الرسوم الثابتة",
              details: "بالنسبة لبعض الخدمات الموحدة، نقدم ترتيبات رسوم ثابتة. وتشمل هذه تكوين الشركة (1500 دولار)، وصياغة العقود الأساسية (800-1200 دولار)، وإعداد الوصية البسيطة (500 دولار)."
            },
            {
              subtitle: "ترتيبات الاحتفاظ",
              details: "للدعم القانوني المستمر، نقدم حزم احتفاظ شهرية تبدأ من 2000 دولار شهريًا، والتي تتضمن عددًا محددًا من الساعات والوصول ذو الأولوية إلى فريقنا القانوني."
            }
          ]
        },
        {
          title: "معلومات العملية القانونية",
          content: [
            {
              subtitle: "الجدول الزمني لتكوين الأعمال",
              details: "تستغرق عملية تكوين كيان تجاري جديد عادة 2-3 أسابيع من الاستشارة الأولية إلى الانتهاء من جميع الوثائق المطلوبة والتسجيل."
            },
            {
              subtitle: "نظرة عامة على إجراءات الإعسار",
              details: "تتضمن عملية الإعسار بشكل عام تقييمًا أوليًا (1-2 أسبوع)، وتقديم الوثائق اللازمة (أسبوع واحد)، وفترة إخطار الدائنين (30-45 يومًا)، تليها تطوير وتنفيذ خطة حل، والتي يمكن أن تختلف مدتها بشكل كبير حسب التعقيد."
            },
            {
              subtitle: "توقعات الإجراءات القضائية",
              details: "يمكن أن تختلف مدة الإجراءات القانونية على نطاق واسع. قد يتم حل القضايا المدنية البسيطة في 6-12 شهرًا، بينما يمكن أن تستغرق التقاضي الأكثر تعقيدًا عدة سنوات. نقدم جداول زمنية مفصلة خلال استشاراتنا بناءً على ظروفك المحددة."
            }
          ]
        },
        {
          title: "الأسئلة الشائعة",
          content: [
            {
              subtitle: "متى يجب أن أستشير محاميًا؟",
              details: "من الأفضل استشارة محام في أقرب وقت ممكن عند مواجهة أي تحد قانوني أو مالي كبير. غالبًا ما يؤدي التدخل المبكر إلى مزيد من الخيارات ونتائج أفضل."
            },
            {
              subtitle: "ماذا يجب أن أحضر إلى اجتماعي الأول؟",
              details: "للاستشارة الأولية، يرجى إحضار أي وثائق ذات صلة متعلقة بحالتك، مثل العقود أو المراسلات أو البيانات المالية أو الإخطارات القضائية. قم أيضًا بإعداد ملخص زمني للأحداث لمساعدتنا على فهم وضعك بسرعة."
            },
            {
              subtitle: "كم من الوقت ستستغرق قضيتي؟",
              details: "تختلف المدة بشكل كبير اعتمادًا على طبيعة وتعقيد قضيتك. خلال استشارتك، سنقدم جدولًا زمنيًا تقديريًا بناءً على ظروفك المحددة ونبقيك على اطلاع أثناء تقدم قضيتك."
            },
            {
              subtitle: "ما هي البدائل للتقاضي؟",
              details: "تشمل بدائل التقاضي التفاوض والوساطة والتحكيم ومختلف أشكال حل النزاعات البديلة. نناقش جميع الخيارات المتاحة ونوصي بالنهج الأكثر ملاءمة لحالتك."
            }
          ]
        }
      ]
    }
  };

  // Select current language content
  const currentContent = content[language];

  return (
    <>
      <div className="info-page">
        <Helmet>
          <title>{currentContent.meta.title}</title>
          <meta
            name="description"
            content={currentContent.meta.description}
          />
        </Helmet>

        {/* Header Section */}
        <div className="info-header">
          <div className="info-overlay"></div>
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

        {/* Information Sections */}
        <div className="container mt-5 mb-5">
          {currentContent.sections.map((section, index) => (
            <div className="row mt-5" key={index}>
              <div className="col-12">
                <h2 className="text-center mb-4">{section.title}</h2>
                <div className="card shadow">
                  <div className="card-body p-4">
                    {section.content.map((item, subIndex) => (
                      <div className="mb-4" key={subIndex}>
                        <h4>{item.subtitle}</h4>
                        <p>{item.details}</p>
                        {subIndex < section.content.length - 1 && <hr />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Info;