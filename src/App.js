import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Topbar from "./components/topbar/Topbar";
import Work from "./components/works/Work";
import Contact from "./components/contact/Contact";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <div className="sections">
        <Intro></Intro>
        <Portfolio></Portfolio>
        <Work></Work>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
