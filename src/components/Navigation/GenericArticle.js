import React, { useContext, useEffect } from "react";
import { GenericContext } from "../../Context/GenericContext";

export default function GenericArticle() {
  const { data} = useContext(GenericContext);
  useEffect(() => {
    console.log("generic article render");
  }, []);

  return (
      <>
        {data
          .filter(
            (article) =>
              article.urlToImage && article.title && article.author !== null
          )
          .map((article, index) => (
            <div className="article" key={index}>
              <a href={article.url}>
                <div className="article-img">
                  <img src={article.urlToImage} alt="img" />
                </div>
                <div className="article-text">
                  <p>{article.title}</p>
                  <p>{article.author}</p>
                </div>
              </a>
            </div>
          ))}
      </>
    );
}
