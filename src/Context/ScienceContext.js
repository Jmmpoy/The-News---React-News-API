import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

const ScienceContext = React.createContext();

export const ScienceContextProvider = (props) => {
  const [data, setData] = useState([]);
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const request = `https://newsapi.org/v2/top-headlines?category=science&pageSize=100&apiKey=${apiKey}`;
  // Science crunch
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(request);
      console.log("ScienceContext", data);
      setData(data.articles);
    };
    fetchData();
  }, []);

  return (
    <ScienceContext.Provider value={{ data }}>
      {props.children}
    </ScienceContext.Provider>
  );
};

export const useAPI = () => {
  const context = useContext(ScienceContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
};
