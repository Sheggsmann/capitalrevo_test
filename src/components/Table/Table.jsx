import React from "react";
import "./Table.scss";

const Table = ({ data }) => {
  return (
    <div className="table">
      <table>
        <thead>
          <th>Time</th>
          <th>Symbol</th>
          <th>Event</th>
          <th>Actual</th>
          <th>Forecast</th>
          <th>Previous</th>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <>
              <tr className="tableRowHighlight">
                <td>{d.time}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              {d.data.map((t, i) => (
                <tr>
                  <td>{t.time}</td>
                  <td>{t.symbol}</td>
                  <td>{t.event}</td>
                  <td>{t.actual}</td>
                  <td>{t.forecast}</td>
                  <td>{t.previous}</td>
                </tr>
              ))}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
