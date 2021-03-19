import React, { useContext } from "react";
import "./Filter.scss";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { GenericContext } from "../../Context/GenericContext";
export default function Filter() {
  const { setCategory, setLoading, setQuery} = useContext(GenericContext);

  const hashtags = [
    { name: "#Popular", path: "/", category: "general" },
    { name: "#Politics", path: "/politics", category: null },
    { name: "#Business", path: "/business", category: "business" },
    { name: "#Science", path: "/science", category: "science" },
    { name: "#Sport", path: "/sport", category: "sports" },
    { name: "#IT", path: "/tech", category: "technology" },
    { name: "#Design", path: "/design", category: null },
    { name: "#Health", path: "/health", category: "health" },
  ];

  return (
    <Router>
      <section className="Dashboard-Filter">
        <ul className="Dashboard-Filter-List">
          {hashtags.map((hashtag, index) => (
            <li className="hashtag" key={index}>
              <NavLink
                to={hashtag.path}
                onClick={() => {
                  if (hashtag.category === null) {
                    setLoading(true);
                    const queryParam = hashtag.path.substring(1);
                    setQuery(queryParam);
                  } else {
                    setLoading(true);
                    setCategory(hashtag.category);
                    setQuery("");
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
