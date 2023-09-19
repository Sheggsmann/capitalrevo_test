import React from "react";
import "./Calendar.scss";
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
  return (
    <div className="calendar">
      <Hero
        bgImage={CalendarBg}
        heading="Economic Calendar"
        text="Keep an eye on key upcoming economic events, announcements, and news. Plus, set up filters in a few clicks, selecting for event importance and affected currencies."
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
          <h2>Stay updated in the financial markets</h2>
          <p className="body-large">
            Stay informed and make strategic trading decisions with our
            comprehensive Economic Calendar. Track key events, indicators, and
            market impact.
          </p>
        </div>

        <div className="calendar_tableContainer">
          <Dropdown label="Symbols" options={["USD", "EUR", "EURUSD"]} />
          <Table data={TableData} />
        </div>

        <div className="calendar_content2">
          <h2>About the Economic Calendar</h2>
          <p className="body-large">
            Bookmark this page and refer to the calendar regularly to stay
            up-to-date with the happenings in the financial markets.
          </p>
        </div>

        <div className="calendar_boxes">
          <ContentBox
            logo={HelpCircleIcon}
            heading="What is Economic Calendar?"
            text={
              <>
                The Economic Calendar is a tool that helps traders to monitor
                and analyze market-moving events, and predict further price
                movements. It highlights upcoming national and international
                news around the world in chronological order by date.
                <br /> <br />
                These major events can have a high impact on the financial
                markets and are usually announced or released in reports.
              </>
            }
          />
          <ContentBox
            logo={HelpCircleIcon}
            transparent
            heading="How to use the Economic Calendar?"
            text={
              <>
                You can choose multiple currencies and stocks from the dropdown
                list. By default, all will be selected. After making your
                selection, you can view the upcoming events in the table below
                the dropdown menu.
                <br /> <br />
                It should be noted that the number of trading instruments in the
                calendar changes dynamically, and depends on the number of
                upcoming events and news.
              </>
            }
          />
          <ContentBox
            logo={HelpCircleIcon}
            transparent
            heading="Why you should use the Economic Calendar?"
            text={
              <>
                The Economic Calendar is indispensable if you want to keep track
                of upcoming news, reports and announcements at a glance.
                <br /> <br />
                The events may highly impact the volatility of forex currency
                pairs, stocks and other markets. Thus, traders often use the
                calendar to plan their trades and stay informed on chart
                patterns and indicators that may be affected by the events.
              </>
            }
          />
          <ContentBox
            logo={HelpCircleIcon}
            heading="How to read the Economic Calendar?"
            text={
              <>
                After selecting your desired instruments, you will see a list of
                events displayed in the calendar. There are two key figures in
                the table, which are the ‘Actual’ and ‘Forecast’ numbers.
                <br /> <br />A significant difference between the two numbers
                indicates that there might be some volatility in the chart of
                the related trading instruments. Generally, Volatility spikes
                pre-event and subsides post-event.
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
