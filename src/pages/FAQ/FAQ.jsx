import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import Accordion from "../../components/Accordion/Accordion";
import FAQ_BG from "../../assets/faq_bg.png";
import Lines from "../../assets/lines.svg";
import { useTranslation } from "react-i18next";
import "./FAQ.scss";

const FAQ = () => {
  const { t } = useTranslation();

  const PaymentSystems = [
    {
      question: t("faq.paymentSystems.question1"),
      answer: t("faq.paymentSystems.answer1"),
    },
    {
      question: t("faq.paymentSystems.question2"),
      answer: "",
    },
    {
      question: t("faq.paymentSystems.question3"),
      answer: "",
    },
    {
      question: t("faq.paymentSystems.question4"),
      answer: "",
    },
  ];

  const Trading = [
    {
      question: t("faq.trading.question1"),
      answer: "",
    },
    {
      question: t("faq.trading.question2"),
      answer: "",
    },
    {
      question: t("faq.trading.question3"),
      answer: "",
    },
    {
      question: t("faq.trading.question4"),
      answer: "",
    },
  ];

  const General = [
    {
      question: t("faq.general.question1"),
      answer: "",
    },
    {
      question: t("faq.general.question2"),
      answer: "",
    },
    {
      question: t("faq.general.question3"),
      answer: "",
    },
    {
      question: t("faq.general.question4"),
      answer: "",
    },
  ];

  return (
    <div className="faq">
      <Hero
        bgImage={FAQ_BG}
        heading={t("faq.title")}
        text={t("faq.description")}
      />

      <div className="faq_main">
        <div className="faq_bg1" />
        <img src={Lines} alt="faq_lines" className="faqLines" />
        {/* <div className="contact_bg2" /> */}

        <div className="faq_content">
          <div className="faq_contentBox">
            <div className="faq_header">
              <h2>{t("faq.paymentSystems.title")}</h2>
            </div>

            {PaymentSystems.map((p, i) => (
              <Accordion key={i} question={p.question} answer={p.answer} />
            ))}
          </div>

          <div className="faq_contentBox">
            <div className="faq_header">
              <h2>{t("faq.trading.title")}</h2>
            </div>

            {Trading.map((p, i) => (
              <Accordion key={i} question={p.question} answer={p.answer} />
            ))}
          </div>

          <div className="faq_contentBox">
            <div className="faq_header">
              <h2>{t("faq.general.title")}</h2>
            </div>

            {General.map((p, i) => (
              <Accordion key={i} question={p.question} answer={p.answer} />
            ))}
          </div>
        </div>
      </div>

      <Footer dark />
    </div>
  );
};

export default FAQ;
