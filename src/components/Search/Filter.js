import React, { useContext, useState } from "react";
import "./Filter.scss";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import GenericArticle from "../Navigation/GenericArticle";
import { GenericContext } from "../../Context/GenericContext";
export default function Filter() {
  const { setCategory } = useContext(GenericContext);

  const hashtags = [
    { name: "#Popular", path: "/", category: "general" },
    { name: "#Politics", path: "/politics", category: null, query: "politics" },
    { name: "#Business", path: "/business", category: "business" },
    { name: "#Science", path: "/science", category: "science" },
    { name: "#Sport", path: "/sport", category: "sports" },
    { name: "#IT", path: "/tech", category: "technology" },
    { name: "#Design", path: "/design", category: null, query: "design" },
    { name: "#Health", path: "/health", category: "health" },
  ];

  return (
    <Router>
      <section className="Dashboard-Filter">
        <ul className="Dashboard-Filter-List">
          {hashtags.map((hashtag) => (
            <li className="hashtag">
              <NavLink
                to={hashtag.path}
                onClick={() => {
                  if (hashtag.category === null) {
                    setCategory(hashtag.query);
                  } else {
                    setCategory(hashtag.category);
                  }
                }}>
                {hashtag.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </section>
    </Router>
  );
}
