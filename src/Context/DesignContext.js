import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
export const DesignContext = React.createContext();

export const DesignContextProvider = (props) => {
  const [data, setData] = useState([]);
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const request = `https://newsapi.org/v2/top-headlines?category=health&pageSize=100&apiKey=${apiKey}`;

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(request);
      console.log("news array data", data);
      setData(data.articles);
    };
    fetchData();
  }, []);

  return (
    <DesignContext.Provider value={{ data }}>
      {props.children}
    </DesignContext.Provider>
  );
};

export function useAPI() {
  const context = useContext(DesignContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
