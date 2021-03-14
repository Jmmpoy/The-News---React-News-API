import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
const SportsContext = React.createContext();

export const SportsContextProvider = (props) => {
  const [data, setData] = useState([]);
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const request = `https://newsapi.org/v2/top-headlines?category=sports&pageSize=100&apiKey=${apiKey}`;

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(request);
      console.log("sports array data", data);
      setData(data.articles);
    };
    fetchData();
  }, []);

  return (
    <SportsContext.Provider value={{ data }}>
      {props.children}
    </SportsContext.Provider>
  );
};

export function useAPI() {
  const context = useContext(SportsContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
