import React from "react";
import "./Deposits.scss";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import EarthBox from "../../components/EarthBox";
import Rating from "../../components/Rating";
import SafetyLogo from "../../assets/safety.svg";
import CardLogo from "../../assets/card.svg";
import WalletLogo from "../../assets/wallet-1.svg";
import WithdrawalsLogo from "../../assets/withdrawal.svg";
import ContentBox from "../../components/ContentBox";
import SectionBox from "../../components/SectionBox";
import SectionBox2 from "../../components/SectionBox2";
import DepositBg from "../../assets/deposit_bg.png";
import DepositBag from "../../assets/deposits_bag.png";
// import CheckdecagramIcon from "../../assets/check-decagram.svg";
// import CurrencyUSDLogo from "../../assets/currency-usd.svg";
// import ArrowSplitLogo from "../../assets/arrow-split-vertical.svg";
// import ScaleBalanceLogo from "../../assets/scale-balance.svg";

// const DepositMethods = [
//   {
//     title: "PayPal",
//     minDeposit: "$50",
//     minWithdraw: "$0.01",
//     processTime: "3-7 working days",
//   },
//   {
//     title: "Bitcoin",
//     minDeposit: "$50",
//     minWithdraw: "$0.01",
//     processTime: "3-7 working days",
//   },
//   {
//     title: "Razorpay",
//     minDeposit: "$50",
//     minWithdraw: "$0.01",
//     processTime: "3-7 working days",
//   },
//   {
//     title: "Rupeepay",
//     minDeposit: "$50",
//     minWithdraw: "$0.01",
//     processTime: "3-7 working days",
//   },
//   {
//     title: "SwiffyEft",
//     minDeposit: "$50",
//     minWithdraw: "$0.01",
//     processTime: "3-7 working days",
//   },
//   {
//     title: "PaymentRush",
//     minDeposit: "$50",
//     minWithdraw: "$0.01",
//     processTime: "3-7 working days",
//   },
//   {
//     title: "Help2Pay",
//     minDeposit: "$50",
//     minWithdraw: "$0.01",
//     processTime: "3-7 working days",
//   },
//   {
//     title: "USD Coin (USDC)",
//     minDeposit: "$50",
//     minWithdraw: "$0.01",
//     processTime: "3-7 working days",
//   },
// ];

// const DepositMethod = ({ d }) => {
//   const { title, minDeposit, minWithdraw, processTime } = d;
//   return (
//     <div
//       className={`deposits_method  ${
//         title === "PayPal" ? "deposits_methodSpecStandard" : ""
//       }`}
//     >
//       <div className="deposits_methodText">
//         <div className="deposits_methodSubHeading">
//           Payment system
//           {title === "PayPal" && (
//             <span className="deposits_methodRecommended">
//               <img src={CheckdecagramIcon} alt="check" />
//               Recommended
//             </span>
//           )}
//         </div>
//         <h3>{title}</h3>
//       </div>

//       <div className="deposits_methodSpecs">
//         <div className="deposits_methodSpec ">
//           <div className="deposits_methodSpecName">
//             <img src={CurrencyUSDLogo} alt="currency" />
//             Minimum deposit
//           </div>
//           <div className="deposits_methodSpecValue">{minDeposit}</div>
//         </div>

//         <div className="deposits_methodSpec">
//           <div className="deposits_methodSpecName">
//             <img src={ArrowSplitLogo} alt="currency" />
//             Minimum withdrawal
//           </div>
//           <div className="deposits_methodSpecValue">{minWithdraw}</div>
//         </div>

//         <div className="deposits_methodSpec">
//           <div className="deposits_methodSpecName">
//             <img src={ScaleBalanceLogo} alt="currency" />
//             Processing time
//           </div>
//           <div className="deposits_methodSpecValue">{processTime}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

const Deposits = () => {
  return (
    <div className="deposits">
      <Hero
        bgImage={DepositBg}
        heading="Deposits and Withdrawals"
        text="Choose from flexible payment options in local currencies, including the world’s most popular payment systems, e-wallets, and crypto wallets."
      />
      <div className="deposits_main">
        <div className="deposits_bg1" />
        <div className="deposits_bg2" />
        <div className="deposits_lines" />

        <div className="deposits_textContainer">
          <h2>
            <span className="accent"> Instant </span> Withdrawals,
            <br />
            <span className="accent">Easy</span> Deposits
          </h2>
          <p className="body-large">
            Our deposits and withdrawals are carried out in seconds with no
            manual processing, including on weekends.
          </p>
        </div>
        <div className="deposits_boxes">
          <ContentBox
            logo={CardLogo}
            heading="Withdraw/deposit to your bank card"
            text="The total amount you fund your Kwakol Markets account with your Credit or Debit card is the total amount we are legally allowed return to that card. Profits can be withdrawn using either Bitcoin or wire/bank transfer."
          />
          <ContentBox
            logo={WithdrawalsLogo}
            heading="Withdraw/deposit to your bank account"
            text="Wire Transfer is the most wide-spread money transfer method in the world. Transfer money from your CapitalRevo Wallet to your bank account. We charge $0 for fees deposits of up to $5,000, and $25 fee on withdrawals of $5,000 and above."
            transparent
          />
          <ContentBox
            logo={WalletLogo}
            heading="Withdraw/deposit to with crypto"
            text="Capital Revo can send your profits to you via Crypto. All you need to do is to create a withdraw request on your account and our team will process your request same day. The progress of this transaction can be tracked on blockchain.info"
            transparent
          />
          <ContentBox
            logo={SafetyLogo}
            heading="Instant and secure withdrawals"
            text="Transactions are carried out within a few seconds without manual processing. 3-D Secure technology is an additional security layer for online payments and has also been adopted by VISA and Mastercard."
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
          heading="Excellent"
          count="724"
          source="TrustPilot"
        />
        <SectionBox2
          bgImage={DepositBag}
          btn
          btnText="Make a deposit"
          heading="Ready to trade?"
          text="Access the most popular markets through a single account.
        Discover CFD on Stocks, ETFs, Crypto and more. Start trading in less than 5 minutes!"
        />
      </div>
      <Footer dark />
    </div>
  );
};

export default Deposits;
