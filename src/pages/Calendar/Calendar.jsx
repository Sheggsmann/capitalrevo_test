import React from "react";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import CurrencyIndicator from "../../components/CurrencyIndicator";
import Dropdown from "../../components/Dropdown";
import Table from "../../components/Table";
import ContentBox from "../../components/ContentBox";
import Accounts from "../../components/Accounts";
import HelpCircleIcon from "../../assets/help-circle-outline.svg";
import CalendarBg from "../../assets/calendar_bg.png";
import Lines from "../../assets/lines.svg";
import { useTranslation } from "react-i18next";
import "./Calendar.scss";

const CurrencyData = [
  {
    value: 0.66944,
    percentage: 0.39,
  },
  {
    value: 0.66944,
    percentage: 0.39,
  },
  {
    value: 0.66944,
    percentage: 0.39,
  },
  {
    value: 0.66944,
    percentage: 0.39,
  },
  {
    value: 0.66944,
    percentage: 0.39,
  },
  {
    value: 0.66944,
    percentage: 0.39,
  },
  {
    value: 0.66944,
    percentage: 0.39,
  },
];

const TableData = [
  {
    time: "11 April",
    data: [
      {
        time: "01:30",
        symbol: "USD",
        event: "Euro Zone Retail Sales MM",
        actual: "-",
        forecast: "-",
        previous: "0.3",
      },
      {
        time: "01:30",
        symbol: "USD",
        event: "Euro Zone Retail Sales MM",
        actual: "-",
        forecast: "-",
        previous: "0.3",
      },
      {
        time: "01:30",
        symbol: "USD",
        event: "Euro Zone Retail Sales MM",
        actual: "-",
        forecast: "-",
        previous: "0.3",
      },
      {
        time: "01:30",
        symbol: "USD",
        event: "Euro Zone Retail Sales MM",
        actual: "-",
        forecast: "-",
        previous: "0.3",
      },
    ],
  },
  {
    time: "12 April",
    data: [
      {
        time: "01:30",
        symbol: "USD",
        event: "Euro Zone Retail Sales MM",
        actual: "-",
        forecast: "-",
        previous: "0.3",
      },
      {
        time: "01:30",
        symbol: "USD",
        event: "Euro Zone Retail Sales MM",
        actual: "-",
        forecast: "-",
        previous: "0.3",
      },
      {
        time: "01:30",
        symbol: "USD",
        event: "Euro Zone Retail Sales MM",
        actual: "-",
        forecast: "-",
        previous: "0.3",
      },
    ],
  },
  {
    time: "13 April",
    data: [
      {
        time: "01:30",
        symbol: "USD",
        event: "Euro Zone Retail Sales MM",
        actual: "-",
        forecast: "-",
        previous: "0.3",
      },
      {
        time: "01:30",
        symbol: "USD",
        event: "Euro Zone Retail Sales MM",
        actual: "-",
        forecast: "-",
        previous: "0.3",
      },
      {
        time: "01:30",
        symbol: "USD",
        event: "Euro Zone Retail Sales MM",
        actual: "-",
        forecast: "-",
        previous: "0.3",
      },
    ],
  },
];

const Calendar = () => {
  const { t } = useTranslation();

  return (
    <div className="calendar">
      <Hero
        bgImage={CalendarBg}
        heading={t("calendar.title")}
        text={t("calendar.description")}
      />
      <div className="calendar_main">
        <div className="calendar_bg1" />
        <div className="calendar_bg2" />
        {/* <div className="calendar_lines" /> */}
        <img src={Lines} alt="calendar lines" className="calendarLines" />

        <div className="calendar_currencies">
          {CurrencyData.map((d, i) => (
            <CurrencyIndicator
              key={i}
              value={d.value}
              percentage={d.percentage}
            />
          ))}
        </div>

        <div className="calendar_content1">
          <h2>{t("calendar.section1Title")}</h2>
          <p className="body-large">{t("calendar.section1Description")}</p>
        </div>

        <div className="calendar_tableContainer">
          <Dropdown label="Symbols" options={["USD", "EUR", "EURUSD"]} />
          <Table data={TableData} />
        </div>

        <div className="calendar_content2">
          <h2>{t("calendar.section2Title")}</h2>
          <p className="body-large">{t("calendar.section2Description")}</p>
        </div>

        <div className="calendar_boxes">
          <ContentBox
            logo={HelpCircleIcon}
            heading={t("calendar.card1.title")}
            text={
              <>
                {/* The Economic Calendar is a tool that helps traders to monitor
                and analyze market-moving events, and predict further price
                movements. It highlights upcoming national and international
                news around the world in chronological order by date. */}
                {t("calendar.card1.description").substring(0, 237)}
                <br /> <br />
                {t("calendar.card1.description").substring(237)}
              </>
            }
          />
          <ContentBox
            logo={HelpCircleIcon}
            transparent
            heading={t("calendar.card2.title")}
            text={
              <>
                {/* You can choose multiple currencies and stocks from the dropdown
                list. By default, all will be selected. After making your
                selection, you can view the upcoming events in the table below
                the dropdown menu. */}
                {t("calendar.card2.description").substring(0, 204)}
                <br /> <br />
                {/* It should be noted that the number of trading instruments in the
                calendar changes dynamically, and depends on the number of
                upcoming events and news. */}
                {t("calendar.card2.description").substring(204)}
              </>
            }
          />
          <ContentBox
            logo={HelpCircleIcon}
            transparent
            heading={t("calendar.card3.title")}
            text={
              <>
                {/* The Economic Calendar is indispensable if you want to keep track
                of upcoming news, reports and announcements at a glance. */}
                {t("calendar.card3.description").substring(0, 122)}
                <br /> <br />
                {/* The events may highly impact the volatility of forex currency
                pairs, stocks and other markets. Thus, traders often use the
                calendar to plan their trades and stay informed on chart
                patterns and indicators that may be affected by the events. */}
                {t("calendar.card3.description").substring(122)}
              </>
            }
          />
          <ContentBox
            logo={HelpCircleIcon}
            heading={t("calendar.card4.title")}
            text={
              <>
                {/* After selecting your desired instruments, you will see a list of
                events displayed in the calendar. There are two key figures in
                the table, which are the ‘Actual’ and ‘Forecast’ numbers. */}
                {t("calendar.card4.description").substring(0, 186)}
                <br /> <br />
                {/* A significant difference between the two numbers
                indicates that there might be some volatility in the chart of
                the related trading instruments. Generally, Volatility spikes
                pre-event and subsides post-event. */}
                {t("calendar.card4.description").substring(186)}
              </>
            }
          />
        </div>

        <Accounts />
      </div>

      <Footer dark />
    </div>
  );
};

export default Calendar;
