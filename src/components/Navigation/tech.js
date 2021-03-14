import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useAPI } from "../../Context/TechContext";
export default function tech() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data } = useAPI();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    console.log("tech news", data);
  }, []);
  return (
    <>
      {data
        .filter(
          (article) =>
            article.urlToImage && article.title && article.author !== null
        )
        .map((article, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: -0.2, duration: 0.2, ease: "easeInOut" }}
            className="article"
            key={index}>
            <a href={article.url}>
              <div className="article-img">
                <img src={article.urlToImage} alt="img" />
              </div>

              <div className="article-text">
                <p>{article.title}</p>
                <p>{article.author}</p>
              </div>
            </a>
          </motion.div>
        ))}
    </>
  );
}
