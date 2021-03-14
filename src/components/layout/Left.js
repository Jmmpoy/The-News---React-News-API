import React from "react";
import "../../style/layout.scss";
import All from "../Navigation/all";
import Tech from "../Navigation/tech";
import Health from "../Navigation/health";
import Science from "../Navigation/science";
import { motion } from "framer-motion";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import Article from "../Article";

export default function Left() {
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

  const menuItems = [
    { name: "All", path: "/" },
    { name: "Tech", path: "/tech" },
    { name: "Science", path: "/science" },
    { name: "Health", path: "/health" },
  ];

  const menuRoutes = [
    { component: <All />, path: "/", nestedPath: "/:articleId" },
    { component: <Tech />, path: "/tech", nestedPath: "/tech/:articleId" },
    {
      component: <Science />,
      path: "/science",
      nestedPath: "/science/:articleId",
    },
    {
      component: <Health />,
      path: "/health",
      nestedPath: "/health/:articleId",
    },
  ];

  return (
    <div className="Left-Container">
      <Router>
        <motion.section
          className="News-SubMenu"
          initial="hidden"
          animate="show"
          variants={variants}>
          <motion.ul className="News-SubMenu-Categories">
            {menuItems.map((item) => (
              <motion.li variants={item}>
                <NavLink to={item.path}>{item.name}</NavLink>
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>

        <div className="Left">
          <Switch>
            {menuRoutes.map((item) => (
              <Route exact path={item.path}>
                {item.component}
              </Route>
            ))}
            {menuRoutes.map((item) => (
              <Route exact path={item.nestedPath}>
                <Article />
              </Route>
            ))}
          </Switch>
        </div>
      </Router>
    </div>
  );
}
