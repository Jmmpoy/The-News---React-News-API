import React, { useEffect } from "react";
import "../../style/layout.scss";

import { motion } from "framer-motion";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import Article from "../Article";
import GenericArticle from "../Navigation/GenericArticle";

export default function Left() {
  useEffect(() => {
    console.log("left comp");
  }, []);
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

  const menuRoutes = [
    { component: <GenericArticle />, path: "/", nestedPath: "/:articleId" },
    {
      component: <GenericArticle />,
      path: "/tech",
      nestedPath: "/tech/:articleId",
    },
    {
      component: <GenericArticle />,
      path: "/science",
      nestedPath: "/science/:articleId",
    },
    {
      component: <GenericArticle />,
      path: "/health",
      nestedPath: "/health/:articleId",
    },
  ];

  return (
    <div className="Dashboard-Container">
      <GenericArticle />
    </div>
  );
}
