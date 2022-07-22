import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";
import { ssEvents } from "./config/config";
import "./app.css";
function App() {
  const [crawledCount, setCrawledCount] = useState(0);
  const [brokenLinksCount, setbrokenLinksCount] = useState(0);
  const [brokenLinks, setBrokenLinks] = useState("");
  const [showResult, setShowResult] = useState(false);

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
          />
        </div>
      </header>
    </div>
  );
}

export default App;
