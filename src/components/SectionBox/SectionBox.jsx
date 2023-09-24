import React from "react";
import Button from "../Button";
import "./SectionBox.scss";
import { useTranslation } from "react-i18next";

const SectionBox = ({
  heading,
  text,
  bgImage,
  tabs = false,
  btn = false,
  btnText,
}) => {
  const { t } = useTranslation();
  return (
    <div className="sectionBox" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="sectionBox_Content">
        <h3>{heading}</h3>
        <p>{text}</p>
        {tabs && (
          <div className="sectionBox_Options">
            <div>{t("home.easyWithdrawals")}</div>
            <div>{t("home.flexibleDeposits")}</div>
            <div>{t("home.customerSupport")}</div>
            <div>{t("home.accountManager")}</div>
          </div>
        )}
        {btn && (
          <a href="https://client.kwakolmarkets.com/register">
            <Button>{btnText}</Button>
          </a>
        )}
      </div>
    </div>
  );
};

export default SectionBox;
