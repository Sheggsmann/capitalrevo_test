import React from "react";
import "./Deposits.scss";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import Rating from "../../components/Rating";
import SafetyLogo from "../../assets/safety.svg";
import CardLogo from "../../assets/card.svg";
import WalletLogo from "../../assets/wallet-1.svg";
import WithdrawalsLogo from "../../assets/withdrawal.svg";
import ContentBox from "../../components/ContentBox";
import SectionBox2 from "../../components/SectionBox2";
import DepositBg from "../../assets/deposit_bg.png";
import DepositBag from "../../assets/deposits_bag.png";
import Lines from "../../assets/lines.svg";
import { useTranslation } from "react-i18next";

const Deposits = () => {
  const { t } = useTranslation();

  return (
    <div className="deposits">
      <Hero
        bgImage={DepositBg}
        heading={t("deposits.title")}
        text={t("deposits.titleDescription")}
      />
      <div className="deposits_main">
        <div className="deposits_bg1" />
        <div className="deposits_bg2" />
        {/* <div className="deposits_lines" /> */}
        <img src={Lines} alt="depositLines" className="depositLines" />

        <div className="deposits_textContainer">
          <h2>
            <span className="accent">
              {" "}
              {t("deposits.section1Title").substring(0, 8)}{" "}
            </span>{" "}
            {t("deposits.section1Title").substring(8, 19)},
            <br />
            <span className="accent">
              {t("deposits.section1Title").substring(20, 25)}
            </span>{" "}
            {t("deposits.section1Title").substring(25)}
          </h2>
          <p className="body-large">{t("deposits.section1Description")}</p>
        </div>
        <div className="deposits_boxes">
          <ContentBox
            logo={CardLogo}
            heading={t("deposits.card1.title")}
            text={t("deposits.card1.description")}
          />
          <ContentBox
            logo={WithdrawalsLogo}
            heading={t("deposits.card2.title")}
            text={t("deposits.card2.description")}
            transparent
          />
          <ContentBox
            logo={WalletLogo}
            heading={t("deposits.card3.title")}
            text={t("deposits.card3.description")}
            transparent
          />
          <ContentBox
            logo={SafetyLogo}
            heading={t("deposits.card4.title")}
            text={t("deposits.card4.description")}
          />
        </div>
        {/*       
        <div className="deposits_textContainer deposits_textContainer2">
          <h2>
            <span className="accent"> 0% </span> Deposit{" "}
            <span className="accent"> Commission </span>
          </h2>
          <p className="body-large">
            The commission our clients are charged with for depositing funds to
            their accounts via any depositing method is always 0%
          </p>
        </div> */}
        {/* 
        <div className="deposits_boxes">
          <ContentBox
            logo={LicenseLogo}
            heading="Deposit with your bank card"
            text="You can fund your trading using either of these major credit cards. Credit/Debit card payments max $600 per transaction. If you deposit by card you must withdraw the same amount by card before taking profits via another method."
          />
          <ContentBox
            logo={SafetyLogo}
            heading="Deposit from your bank (wire transfer)"
            text={
              <>
                Wire Transfer is the most wide-spread money transfer method in
                the world. Transfer money from your bank account to the Capital
                Revo account.
                <br />
                We charge $0 for fees deposits of up $5,000." transparent
              </>
            }
          />
          <ContentBox
            logo={LicenseLogo}
            heading="Deposit with cryptocurrency"
            text="Capital Revo accepts both deposits and withdrawals via stable coins. All the digital currencies can be easily bought and sold for real money or another electronic currency. Track your deposit on Blockchain.info"
          />
          <ContentBox
            logo={SafetyLogo}
            heading="Instant and secure transactions"
            text="Transactions are carried out within a few seconds without manual processing. 3-D Secure technology is an additional security layer for online payments and has also been adopted by VISA and Mastercard."
          />
        </div>
         */}
        {/* <div className="deposits_textContainer deposits_textContainer3">
          <h2>Deposit methods</h2>
          <p className="body-large">
            Choose from flexible payment options in local currencies, including
            the world’s most popular payment systems, e-wallets, and crypto
            wallets.
          </p>
        </div>
         */}
        {/* <div className="deposits_methods">
          {DepositMethods.map((d, i) => (
            <DepositMethod key={i} d={d} />
          ))}
        </div>
         */}
        <Rating
          color="body"
          heading={t("common.excellent")}
          count="724"
          source="TrustPilot"
        />
        <SectionBox2
          bgImage={DepositBag}
          btn
          btnText="Make a deposit"
          heading={t("deposits.section2Title")}
          text={t("deposits.section2Description")}
        />
      </div>
      <Footer dark />
    </div>
  );
};

export default Deposits;
