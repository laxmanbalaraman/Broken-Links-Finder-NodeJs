import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";
import { ssEvents } from "./config/config";
import "./app.css";
import Result from "./components/result/Result";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
function App() {
  const [crawledCount, setCrawledCount] = useState(0);
  const [brokenLinksCount, setbrokenLinksCount] = useState(0);
  const [brokenLinks, setBrokenLinks] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loadingIcon, setLoadingIcon] = useState(false);

  console.log("loading icon is ", loadingIcon);

  ssEvents.addEventListener("crawled", (e) => {
    console.log(e.data);
    setCrawledCount(e.data);
  });

  ssEvents.addEventListener("broken", (e) => {
    console.log(e.data);
    setbrokenLinksCount(e.data);
  });

  ssEvents.onerror = (e) => {
    console.log("error occured", e);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="hero">
          <Navbar />
          <Search
            setBrokenLinks={setBrokenLinks}
            setShowResult={setShowResult}
            setLoadingIcon={setLoadingIcon}
          />
          <Result
            brokenLinks={brokenLinks}
            crawledCount={crawledCount}
            brokenLinksCount={brokenLinksCount}
            loadingIcon={loadingIcon}
          />
          <About />
          <Footer />
        </div>
      </header>
    </div>
  );
}

export default App;
