import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

const TechContext = React.createContext();

export const TechContextProvider = (props) => {
  const [data, setData] = useState([]);
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const request = `https://newsapi.org/v2/top-headlines?category=technology&pageSize=100&apiKey=${apiKey}`;
  // Tech crunch
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(request);
      console.log("techContext", data);
      setData(data.articles);
    };
    fetchData();
  }, []);

  return (
    <TechContext.Provider value={{ data }}>
      {props.children}
    </TechContext.Provider>
  );
};

export const useAPI = () => {
  const context = useContext(TechContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
};
