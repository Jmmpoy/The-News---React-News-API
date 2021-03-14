import React, { useState, useEffect } from "react";
import "../../style/layout.scss";
import { motion } from "framer-motion";
import { useAPI } from "../../Context/SportsContext";
export default function Right() {
  const { data } = useAPI();
  useEffect(() => {
    console.log("sport", data);
  }, []);

  return (
    <div className="Right-Container">
      <motion.h1
        initial={{
          x: 360,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          delay: 1,
          duration: 2,
          ease: "easeInOut",
        }}>
        Sports
      </motion.h1>
      <div className="Right">
        {data
          .filter(
            (article) =>
              article.urlToImage && article.title && article.author !== null
          )
          .map((article, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
              className="Right-article"
              key={index}>
              <a href={article.url}>
                <div>
                  <img src={article.urlToImage} alt="yo" />
                </div>

                <div>
                  <h4>{article.title}</h4>
                  <p>{article.author}</p>
                </div>
              </a>
            </motion.div>
          ))}
      </div>
    </div>
  );
}
