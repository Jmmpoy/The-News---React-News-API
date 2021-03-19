import React, { useEffect, useState} from "react";
import axios from "axios";
export const GenericContext = React.createContext();

export const GenericContextProvider = (props) => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("general");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const queryRequest = `https://newsapi.org/v2/everything?page=1&q=${query}&pageSize=100&apiKey=${apiKey}`;
  const categoryRequest = `https://newsapi.org/v2/top-headlines?category=${category}&pageSize=100&country=us&apiKey=${apiKey}`;
  const loadState = async () => {
    console.log("load state async");
    try {
      if (query !== "") {
        const { data } = await axios.get(queryRequest);
        setData(data.articles);
      } else if (category !== null) {
        const { data } = await axios.get(categoryRequest);
        setData(data.articles);
        //setQuery
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      console.log("fetchInitializedData");
    }
  };

  // FETCH DATA ON INIT
  useEffect(() => {
    loadState();
    console.log("context");
  }, [category, query, loading,]);

  return (
    <GenericContext.Provider
      value={{
        data,
        setData,
        category,
        setCategory,
        query,
        setQuery,
        loading,
        setLoading,
      }}>
      {props.children}
    </GenericContext.Provider>
  );
};