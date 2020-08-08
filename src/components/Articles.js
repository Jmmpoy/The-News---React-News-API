import React, { useState, useEffect } from "react";
import Right from "./layout/Right";
import Left from "./layout/Left";
import "../style/Articles.scss";
import axios from "axios";

export default function Articles() {
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const [techData, setTechData] = useState({ articles: [] });
  const [sportData, setSportData] = useState({ articles: [] });
  const [usaData, setUsaData] = useState({ articles: [] });
  const [scienceData, setScienceData] = useState({ articles: [] });
  

  // SCIENCE

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://newsapi.org/v2/top-headlines?sources=national-geographic&apiKey=${apiKey}`
      );
      setScienceData(result.data);
    };

    fetchData();
  }, [apiKey]);

  // BLEACHER REPORT
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://newsapi.org/v2/top-headlines?sources=bleacher-report&apiKey=${apiKey}`
      );
      setSportData(result.data);
      
    };

    fetchData();
  }, [apiKey]);

  // Tech crunch
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`
      );
      setTechData(result.data);
    };

    fetchData();
  }, [apiKey]);

  // HEADLINES USA
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
      );
      setUsaData(result.data);
    };
    fetchData();
  }, [apiKey]);

  return (
    <div className="News-Articles">
      <Left tech={techData} usa={usaData} science={scienceData} />
      <Right sport={sportData} />
    </div>
  );
}
