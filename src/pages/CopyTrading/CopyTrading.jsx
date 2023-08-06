import React from "react";
import "./CopyTrading.scss";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import StepBox from "../../components/StepBox";
import JoinLogo from "../../assets/join.svg";
import Step2Logo from "../../assets/step-2-1.svg";
import DepositLogo from "../../assets/deposit.svg";
import Button from "../../components/Button";
import InvestmentBox from "../../components/InvestmentBox";

const StartSteps = [
  {
    image: JoinLogo,
    details: "A time-saving way to earn passive income",
  },
  {
    image: Step2Logo,
    details: "Seamless and optimised order execution",
  },
  {
    image: DepositLogo,
    details: "An easy and intuitive platform, open to all",
  },
];

const Traders = [1, 2, 3, 4, 5];

const TraderBox = () => {
  return (
    <div className="copyTrading_box">
      <span>Trade</span>
      <Button>Copy</Button>
    </div>
  );
};

const CopyTrading = () => {
  return (
    <div className="copyTrading">
      <Hero
        heading="Copytrading Platform"
        text="Follow successful traders, automatically replicate their strategies, and maximize your trading potential."
      />
      <div className="copyTrading_main">
        <div className="copyTrading_bg1" />
        <div className="copyTrading_bg2" />
        <div className="copyTrading_lines" />

        <div className="copyTrading_content1">
          <h2>Why copy the best traders?</h2>
          <p className="body-large">
            Copytrading can be beneficial as it allows you to replicate the
            trades of successful traders, potentially increasing your chances of
            profitability.
          </p>
        </div>

        <div className="copyTrading_steps">
          {StartSteps.map((d, i) => (
            <StepBox key={i} image={d.image} details={d.details} />
          ))}
        </div>

        <div className="copyTrading_content">
          <h2>Top Traders By ROI</h2>
          <p>Traders that have earned the highest ROI in the last 7 days.</p>
        </div>
        <div className="copyTrading_boxes">
          {Traders.map((k) => (
            <TraderBox key={k} />
          ))}
        </div>
        <div className="copyTrading_content">
          <h2>Top Intra-Day Traders</h2>
          <p>
            Intra-day traders with over 20% ROI and a win-rate of more than 20%
            in the last 7 days
          </p>
        </div>
        <div className="copyTrading_boxes">
          {Traders.map((k) => (
            <TraderBox key={k} />
          ))}
        </div>
        <div className="copyTrading_content">
          <h2>Lowest Drawdown</h2>
          <p>
            Traders with over 10% ROI and a max. drawdown of less than 20% in
            the last 30 days.
          </p>
        </div>
        <div className="copyTrading_boxes">
          {Traders.map((k) => (
            <TraderBox key={k} />
          ))}
        </div>
        <InvestmentBox
          heading="Start Investing Now"
          text="Our copytrading platform lets our clients access the opportunities of trading without any advanced technical skills."
        />
        <p className="body-large">
          Capital Revo Copytrading is a system that facilitates the management
          of funds placed in multiple separate accounts to be managed by one or
          more account holder(s), the manager(s). Past performance is not
          indicative of future results and no representation is being made by
          the Company in relation to certain results that may be achieved by
          investing in a PAMM Manager or that clients will or are likely to
          achieve profits or incur losses comparable to those that may be shown.
          <br /> <br />
          Prior to investing in a PAMM Manager you need to carefully consider
          any risks including but not limited to those involved in trading. The
          Company does not recommend the selection of any PAMM Manager. This
          responsibility lies solely with the investor. Therefore, Capital Revo
          Ltd. is under no circumstances, liable and/or responsible for any
          losses that arise out of the use of Copytrading.
          <br /> <br />
          Even if all reasonable efforts have been made by the Company to ensure
          the proper statistical reporting of PAMM Managers Performance, the
          Company cannot guarantee the accuracy of performance and/or results of
          any PAMM Manager.
        </p>
      </div>
      <Footer dark />
    </div>
  );
};

export default CopyTrading;
