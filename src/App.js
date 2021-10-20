import "./App.css";
import NewsFeed from "./components/Feed/NewsFeed";
import Stats from "./components/stats/Stats.css";
import Header from "./components/header/Header";

export default function App() {
  return (
    <div className="App">
      <div className="app__header">
        <Header />
      </div>
      <div className="app__body">
        <div className="app__container">
          <NewsFeed />
          {/* stats */}
          <Stats />
        </div>
      </div>
    </div>
  );
}
