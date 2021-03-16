import React, { useState, useEffect, useContext } from "react";
import Filter from "./Filter";
import { FaSearch } from "react-icons/fa";

import "./Search.scss";
import { GenericContext } from "../../Context/GenericContext";
export default function Search() {
  const [searchInput, setSearchInput] = useState("");
  const { data, setData } = useContext(GenericContext);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    console.log(searchInput);
  };

  useEffect(() => {
    if (data.length > 0) {
      console.log(("data is :", data));
    }

    // const search = async () => {
    //   const results = await data.filter((article) =>
    //     article.includes(searchInput)
    //   );
    //   await console.log(("data is :", data));
    //   //console.log(results);
    //   //setData(results);
    // };

    // search();
  }, [searchInput]);

  return (
    <section className="Dashboard-Search">
      <Filter />
      <div className="Dashboard-SearchBar">
        <input
          placeholder="Search"
          value={searchInput}
          onChange={handleChange}
        />
        <button>
          <FaSearch />
        </button>
      </div>
    </section>
  );
}
