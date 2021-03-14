import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
export const TopHeadlinesContext = React.createContext();

export const TopHeadlinesContextProvider = (props) => {
  const [data, setData] = useState([]);
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const request = `https://newsapi.org/v2/top-headlines?category=general&pageSize=100&country=us&apiKey=${apiKey}`;

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(request);
      console.log("all section", data);
      setData(data.articles);
    };
    fetchData();
  }, []);

  return (
    <TopHeadlinesContext.Provider value={{ data }}>
      {props.children}
    </TopHeadlinesContext.Provider>
  );
};

export function useAPI() {
  const context = useContext(TopHeadlinesContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
