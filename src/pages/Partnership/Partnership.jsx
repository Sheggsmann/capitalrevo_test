import Hero from "../../components/Hero";
import InvestmentBox from "../../components/InvestmentBox";
import Footer from "../../components/Footer";
import NumericLogo from "../../assets/partnership/numeric.svg";
import AccountCheckLogo from "../../assets/partnership/account-check-outline.svg";
import CashFastLogo from "../../assets/partnership/cash-fast.svg";
import CalendarSyncLogo from "../../assets/partnership/calendar-sync-outline.svg";
import CalendarWeekLogo from "../../assets/partnership/calendar-week-outline.svg";
import SourceBranchLogo from "../../assets/partnership/source-branch.svg";
import PartnershipBg from "../../assets/partnership_bg.png";
import PartnershipSection from "../../assets/partnership_section.png";
import Lines from "../../assets/lines.svg";
import { useTranslation } from "react-i18next";
import "./Partnership.scss";

const Partnership = () => {
  const { t } = useTranslation();

  const PartnershipBoxes = [
    {
      logo: NumericLogo,
      heading: t("partnership.card1.title"),
      text: t("partnership.card1.description"),
    },
    {
      logo: AccountCheckLogo,
      heading: t("partnership.card2.title"),
      text: t("partnership.card2.description"),
    },
    {
      logo: CashFastLogo,
      heading: t("partnership.card3.title"),
      text: t("partnership.card3.description"),
    },
    {
      logo: CalendarSyncLogo,
      heading: t("partnership.card4.title"),
      text: t("partnership.card4.description"),
    },
    {
      logo: CalendarWeekLogo,
      heading: t("partnership.card5.title"),
      text: t("partnership.card5.description"),
    },
    {
      logo: SourceBranchLogo,
      heading: t("partnership.card6.title"),
      text: t("partnership.card6.description"),
    },
  ];

  return (
    <div className="partnership">
      <Hero
        bgImage={PartnershipBg}
        heading={t("partnership.title")}
        text={t("partnership.titleDescription")}
      />

      <div className="partnership_main">
        <div className="partnership_bg1" />
        <div className="partnership_bg2" />
        {/* <div className="partnership_lines" /> */}
        <img src={Lines} alt="partnership lines" className="partnershipLines" />

        <div className="partnership_content">
          <h2>{t("partnership.section1Title")}</h2>
          <p className="body-large">{t("partnership.section1Description")}</p>
        </div>

        <div className="partnership_offer">
          <div className="partnership_offerBoxes">
            {PartnershipBoxes.map((p, i) => (
              <div key={i} className="partnership_offerBox">
                <img src={p.logo} alt="face" />
                <h3>{p.heading}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="partnership_investmentBox">
          <InvestmentBox
            heading={t("partnership.section2Title")}
            text={t("partnership.section2Description")}
            buttonText={t("nav.becomeAPartner")}
            image={PartnershipSection}
          />
        </div>
      </div>

      <Footer dark />
    </div>
  );
};

export default Partnership;
