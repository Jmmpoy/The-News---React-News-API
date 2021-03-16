import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
export const GenericContext = React.createContext();

export const GenericContextProvider = (props) => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("general");
  const [query, setQuery] = useState("");
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  //const searchRequest = `https://newsapi.org/v2/everything?page=1&q=${category}&pageSize=100&apiKey=${apiKey}`;
  const queryRequest = `https://newsapi.org/v2/everything?page=1&q=${category}&pageSize=100&apiKey=${apiKey}`;
  const request = `https://newsapi.org/v2/top-headlines?category=${category}&pageSize=100&country=us&apiKey=${apiKey}`;

  useEffect(() => {
    console.log("category", category);
    const fetchData = async () => {
      if (category === "politics" || "design" || query.length > 0) {
        const { data } = await axios.get(queryRequest);
        setData(data.articles);
        await console.log(data);
      } else {
        const { data } = await axios.get(request);
        setData(data.articles);
        await console.log(data);
      }
    };
    fetchData();
  }, [category, request, queryRequest]);

  return (
    <GenericContext.Provider
      value={{ data, setData, category, setCategory, query, setQuery }}>
      {props.children}
    </GenericContext.Provider>
  );
};

export function useAPI() {
  const context = useContext(GenericContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
