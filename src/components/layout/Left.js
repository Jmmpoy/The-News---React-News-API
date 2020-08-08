import React, { useState, useEffect } from "react";
import "../../style/layout.scss";
import All from "../Submenu/all";
import Tech from "../Submenu/tech";
import News from "../Submenu/news";
import Science from "../Submenu/science";
// import SubMenu from "../SubMenu";
import { motion } from "framer-motion";
export default function Left({ tech, usa, science }) {
  const [topic, setTopic] = useState("all");
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
  }, [topic, active]);

  const handleClick = (e) => {
    setTopic(e.target.value);
  };

  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: -150,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div className="Left-Container">
      <motion.section
        className="News-SubMenu"
        initial="hidden"
        animate="show"
        variants={variants}
      >
        <motion.ul className="News-SubMenu-Categories">
          <motion.li variants={item}>
            <button type="button" value="all" onClick={handleClick}>
              All
            </button>
          </motion.li>
          <motion.li variants={item}>
            <button type="button" value="tech" onClick={handleClick}>
              Tech
            </button>
          </motion.li>
          <motion.li variants={item}>
            <button type="button" value="science" onClick={handleClick}>
              Science
            </button>
          </motion.li>
          <motion.li variants={item}>
            <button type="button" value="news" onClick={handleClick}>
              News
            </button>
          </motion.li>
        </motion.ul>
      </motion.section>

      <div
        className="Left"
        
      >
        {topic === "tech" && <Tech tech={tech} />}
        {topic === "news" && <News usa={usa} />}
        {topic === "science" && <Science science={science} />}
        {topic === "all" && <All tech={tech} usa={usa} science={science} />}
      </div>
    </div>
  );
}
