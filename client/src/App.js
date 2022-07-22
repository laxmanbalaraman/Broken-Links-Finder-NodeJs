import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";
import "./app.css";
function App() {
  const [crawledCount, setCrawledCount] = useState(0);
  const [brokenLinksCount, setbrokenLinksCount] = useState(0);
  const [brokenLinks, setBrokenLinks] = useState("");
  const [showResult, setShowResult] = useState(false);

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
