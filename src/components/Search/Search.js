import React, { useState, useContext} from "react";
import Filter from "./Filter";
import { FaSearch } from "react-icons/fa";
import { MdClear } from "react-icons/md";
import { GenericContext } from "../../Context/GenericContext";
import "./Search.scss";
export default function Search() {
  const { setQuery,setLoading, setCategory,loading } = useContext(
    GenericContext
  );
  const [input, setInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  
  const handleChange = (e) => {
    setInput(e.target.value);  
  };

  const handleSearch = (e) => {
    setLoading(true);
    e.preventDefault();
    setQuery(input);
    setCategory("");
  };

  const handleFocus = () => {
    setIsFocused(true);
    setInput("");
  }

  const handleBlur = () => {
    setIsFocused(false);
  }

  const Clear = () => {
    setInput("");
  }
  

  return (
    <section className="Dashboard-Search">
      <Filter />
      <div className="Dashboard-SearchBar">
        <div className="Dashboard-SearchBar-InputBlock">
        <input
          type="text"
          placeholder="Search"
          value={input}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          
        />
        <button className="clear" style={{visibility: input !== "" ? 'visible' : 'hidden' }} onClick={Clear}>
          <MdClear/>
        </button>
        </div>
        <button className="submit" onClick={(e) => handleSearch(e)} disabled={loading} >
          <FaSearch />
        </button>
      </div>
    </section>
  );
}
