import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";
import "./app.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="hero">
          <Navbar />
          <Search />
        </div>
      </header>
    </div>
  );
}

export default App;
