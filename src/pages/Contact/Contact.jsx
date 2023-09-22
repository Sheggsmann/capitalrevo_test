import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import FaceAgentLogo from "../../assets/face-agent-1.svg";
import EmailLogo from "../../assets/email-outline.svg";
import LiveChatLogo from "../../assets/message-outline.svg";
import ContactUs from "../../assets/contact_bg.png";
import { useTranslation } from "react-i18next";
import "./Contact.scss";

const Contact = () => {
  const { t } = useTranslation();

  const ContactBoxes = [
    {
      logo: EmailLogo,
      heading: t("contactUs.card1.title"),
      text: t("contactUs.card1.description"),
      subText: "support@capitalrevo.com",
      type: "email",
    },
    {
      logo: FaceAgentLogo,
      heading: t("contactUs.card2.title"),
      text: t("contactUs.card2.description"),
      subText: "+44 7862 144547",
      type: "tel",
    },
    {
      logo: LiveChatLogo,
      heading: t("contactUs.card3.title"),
      text: t("contactUs.card3.description"),
    },
  ];
  return (
    <div className="contact">
      <Hero
        bgImage={ContactUs}
        heading={t("contactUs.title")}
        text={t("contactUs.titleDescription")}
      />

      <div className="contact_main">
        <div className="contact_bg1" />
        {/* <div className="contact_bg2" /> */}

        <div className="contact_content">
          <h2>
            {t("contactUs.section1Title").substring(0, 4)}{" "}
            <span className="accent">24/7</span>{" "}
            {t("contactUs.section1Title").substring(10)}
          </h2>
          <p className="body-large">{t("contactUs.section1Description")}</p>
        </div>

        <div className="contactFeatures">
          <div className="contactBoxes">
            {ContactBoxes.map((c, i) => (
              <div key={i} className="contactBox">
                <img src={c.logo} alt="face" />
                <h3>{c.heading}</h3>
                <p>{c.text}</p>

                {c.subText && (
                  <a
                    href={`${c.type === "email" ? "mailto" : "tel"}:${
                      c.subText
                    }`}
                    className="subtext"
                  >
                    {c.subText}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer dark />
    </div>
  );
};

export default Contact;
