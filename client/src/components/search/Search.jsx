import React from "react";
import "./search.css";
import heroBg from "../../assets/hero-bg.png";
import polygon from "../../assets/Polygon.svg";
// import brokenImage from "./BrokenImage.svg";
import Form from "../form/Form";
export default function Search({
  setBrokenLinks,
  setShowResult,
  setLoadingIcon,
}) {
  return (
    <div className="search">
      <div className="hero-content">
        <h1>Broken Links Finder</h1>
        <p>
          Find Broken links in your website using our unique web crawling bot
        </p>
        <Form
          setBrokenLinks={setBrokenLinks}
          setShowResult={setShowResult}
          setLoadingIcon={setLoadingIcon}
        />
      </div>
    </div>
  );
}
