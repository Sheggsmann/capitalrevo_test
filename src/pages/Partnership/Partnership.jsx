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
import PartnershipSection from "../../assets/partnership_section.png"
import "./Partnership.scss";

const PartnershipBoxes = [
  {
    logo: NumericLogo,
    heading: "Fine level commission structure",
    text: "Earn rewards at multiple tiers for referring others to the platform.",
  },
  {
    logo: AccountCheckLogo,
    heading: "Deficated affiliate manager",
    text: "Get personalized support and guidance from a dedicated affiliate manager.",
  },
  {
    logo: CashFastLogo,
    heading: "Instanct withdrawals",
    text: "Enjoy quick and hassle-free withdrawal of your earnings whenver you need them.",
  },
  {
    logo: CalendarSyncLogo,
    heading: "Everlasting commision",
    text: "Keep earning commissions on your referred trader's activities indefinitely.",
  },
  {
    logo: CalendarWeekLogo,
    heading: "Weekly commission payouts",
    text: "Receive your commission earnings on a weekly basis for consistent cash flow.",
  },
  {
    logo: SourceBranchLogo,
    heading: "Motivating revenue sharing model",
    text: "Rewarding revenue sharing model that keeps you motivated to grow your affiliate business.",
  },
];

const Partnership = () => {
  return (
    <div className="partnership">
      <Hero
        bgImage={PartnershipBg}
        heading="Partnership program"
        text="Unlock lucrative opportunities with our onlien trading website's partnership program. Earn generous commissions and exclusive benefits."
      />

      <div className="partnership_main">
        <div className="partnership_bg1" />
        <div className="partnership_bg2" />
        <div className="partnership_lines" />

        <div className="partnership_content">
          <h2>What you get as a partner</h2>
          <p className="body-large">
            An online trading partnership program offers individuals the
            opportunity to earn commissions by referring clients to a trading
            platform.
          </p>
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
            heading="Grow your revenue"
            text="Start promoting the Capital Revo brand and earn commision each time new clients sign up to our platform with our Multi-Level partnership program. Join today to grow your revenue."
            buttonText="Become a partner"
            image={PartnershipSection}
          />
        </div>
      </div>

      <Footer dark />
    </div>
  );
};

export default Partnership;
