import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import Accordion from "../../components/Accordion/Accordion";
import "./FAQ.scss";

const PaymentSystems = [
  {
    question: "What is the minimum amount to trade?",
    answer:
      "You can start trading on Kwakol with as low as $250 deposit and enjoy lightning-fast execution, tight spreads and low commissions.",
  },
  {
    question:
      "How do I make a withdrawal if I deposit funds with multiple payment methods?",
    answer: "",
  },
  {
    question: "How can I be sure my payment is safe?",
    answer: "",
  },
  {
    question: "Can I use my card to deposit?",
    answer: "",
  },
];

const Trading = [
  {
    question: "Is Capital Revo regulated?",
    answer: "",
  },
  {
    question: "How do I place a limit order?",
    answer: "",
  },
  {
    question: "How do I check my trading history?",
    answer: "",
  },
  {
    question: "Can I trade during the weekend?",
    answer: "",
  },
];

const General = [
  {
    question: "I can't register on the CapitalRevo platform",
    answer: "",
  },
  {
    question: "I'm unable to set up a password during registration",
    answer: "",
  },
  {
    question: "Why has my deposit/withdrawal been rejected?",
    answer: "",
  },
  {
    question: "How to clear your browser's cache and cookies?",
    answer: "",
  },
];

const FAQ = () => {
  return (
    <div className="faq">
      <Hero
        heading="Frequently Asked Questions"
        text="Discover answers to common questions and find helpful solutions. Simplify your trading journey with our expert guidance."
      />

      <div className="faq_main">
        <div className="faq_bg1" />
        {/* <div className="contact_bg2" /> */}

        <div className="faq_content">
          <div className="faq_contentBox">
            <div className="faq_header">
              <h2>Payment systems</h2>
            </div>

            {PaymentSystems.map((p, i) => (
              <Accordion key={i} question={p.question} answer={p.answer} />
            ))}
          </div>

          <div className="faq_contentBox">
            <div className="faq_header">
              <h2>Trading</h2>
            </div>

            {Trading.map((p, i) => (
              <Accordion key={i} question={p.question} answer={p.answer} />
            ))}
          </div>

          <div className="faq_contentBox">
            <div className="faq_header">
              <h2>General</h2>
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
