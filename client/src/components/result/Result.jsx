import React, { useState } from "react";
import "../result/result.css";
import loading from "../../assets/loading.svg";

function Result({ brokenLinks, crawledCount, brokenLinksCount }) {
  brokenLinks = "hellofdsafmlaskdgmkldsanmfs;gmsdlkgmldfsmglk hello helko";
  return (
    <div className="result">
      <h2 className="result-heading"> Results </h2>
      <div className="dummy"></div>
      <div className="meta-info">
        <div className="crawled">
          <i class="fas fa-spider icons"></i> Crawled:{" "}
          <span class="c-count">{crawledCount}</span>
        </div>
        <div className="broken">
          <i class="fa fa-chain-broken icons" aria-hidden="true"></i> Broken:{" "}
          <span class="b-count">{brokenLinksCount}</span>
        </div>
      </div>
      {!brokenLinks && (
        <div className="search-svg">
          {<img src={loading} alt="Loading" />}
          <div className="loadingCaption">
            <p>Please wait till our bot scans through your website...</p>
          </div>
        </div>
      )}

      {brokenLinks && (
        <table className="resultTable">
          <thead>
            <td className="link">Link</td>
            <td className="status-code">status code</td>
          </thead>
          <tbody>
            {brokenLinks.split(" ").map((link) => (
              <tr key={link}>
                <a href={link} target="_blank">
                  {link} <i class="fa fa-external-link" aria-hidden="true"></i>
                </a>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Result;
