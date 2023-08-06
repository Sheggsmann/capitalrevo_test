import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import FaceAgentLogo from "../../assets/face-agent-1.svg";
import EmailLogo from "../../assets/email-outline.svg";
import LiveChatLogo from "../../assets/message-outline.svg";
import "./Contact.scss";

const ContactBoxes = [
  {
    logo: EmailLogo,
    heading: "Email us",
    text: "Send us an email to",
    subText: "support@capitalrevo.com",
    type: "email",
  },
  {
    logo: FaceAgentLogo,
    heading: "Phone support",
    text: "Call us at",
    subText: "+44 7862 144547",
    type: "tel",
  },
  {
    logo: LiveChatLogo,
    heading: "Live chat support",
    text: "Chat with us, get an instant reply",
  },
];

const Contact = () => {
  return (
    <div className="contact">
      <Hero
        heading="Contact us"
        text="Need help? Our 5-star support team is ready to help you Monday through Sunday, 9:00 a.m. to 6:00 p.m. UTC+2"
      />

      <div className="contact_main">
        <div className="contact_bg1" />
        {/* <div className="contact_bg2" /> */}

        <div className="contact_content">
          <h2>
            Your <span className="accent">24/7</span> customer service
          </h2>
          <p className="body-large">
            Contact our customer service team who are available 24/7 to assist
            you.
          </p>
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
