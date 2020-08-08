import React, { useState, useEffect, useRef} from "react";
import "../../style/layout.scss";
import All from '../Submenu/all';
import Tech from "../Submenu/tech";
import News from "../Submenu/news";
import Science from "../Submenu/science";
// import SubMenu from "../SubMenu";
export default function Left({ tech, usa, science }) {
  
  const [topic, setTopic] = useState("all");
  const [active, setActive] = useState(false);

  let { allBtn, techBtn, newsBtn, scienceBtn } = useRef(null);
  
  const refs = [
    allBtn, techBtn, newsBtn, scienceBtn
  ]


  useEffect(() => {
    setActive(true);
  }, [topic, active, refs]);


  const handleClick = (e) => {
    setTopic(e.target.value);
    
    
  };




  

  return (
    <div className="Left-Container">
      <section className="News-SubMenu">
        <ul className="News-SubMenu-Categories">
          <li>
            <button
              type="button"
              value="all"
              onClick={handleClick}
              ref={(el) => (allBtn = el)}
            >
              All
            </button>
          </li>
          <li>
            <button
              type="button"
              value="tech"
              onClick={handleClick}
              ref={(el) => (techBtn = el)}
            >
              Tech
            </button>
          </li>
          <li>
            <button
              type="button"
              value="science"
              onClick={handleClick}
              ref={(el) => (scienceBtn = el)}
            >
              Science
            </button>
          </li>
          <li>
            <button
              type="button"
              value="news"
              onClick={handleClick}
              ref={(el) => (newsBtn = el)}
            >
              News
            </button>
          </li>
        </ul>
      </section>
      <div className="Left">
        {topic === "tech" && <Tech tech={tech} />}
        {topic === "news" && <News usa={usa} />}
        {topic === "science" && <Science science={science} />}
        {topic === "all" && <All tech={tech} usa={usa} science={science} />}
      </div>
    </div>
  );
}
