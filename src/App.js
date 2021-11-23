import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Topbar from "./components/topbar/Topbar";
import Work from "./components/works/Work";
import Contact from "./components/contact/Contact";
import "./App.scss";
import { useState } from "react";
import Education from "./components/education/Education";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Topbar>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Menu>
      <div className="sections">
        <Intro></Intro>
        <Portfolio>ESto es solo una prueba</Portfolio>
        <Education></Education>
        <Work></Work>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
