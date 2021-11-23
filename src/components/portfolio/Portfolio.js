import { useState } from "react";
import ListaPortfolio from "../listaPortfolio/ListaPortfolio";
import "./portfolio.scss";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "desing",
      title: "Desing",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item, pos) => (
          <ListaPortfolio
            title={item.title}
            key={pos}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          ></ListaPortfolio>
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img src="galeria/appSimpsons.png" alt="imagen" />
          <h3>Blog App</h3>
        </div>
        <div className="item">
          <img src="galeria/appSimpsons.png" alt="imagen" />
          <h3>Blog App</h3>
        </div>
        <div className="item">
          <img src="galeria/appSimpsons.png" alt="imagen" />
          <h3>Blog App</h3>
        </div>
        <div className="item">
          <img src="galeria/appSimpsons.png" alt="imagen" />
          <h3>Blog App</h3>
        </div>
        <div className="item">
          <img src="galeria/appSimpsons.png" alt="imagen" />
          <h3>Blog App</h3>
        </div>
        <div className="item">
          <img src="galeria/appSimpsons.png" alt="imagen" />
          <h3>Blog App</h3>
        </div>
      </div>
    </div>
  );
}
