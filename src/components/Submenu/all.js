import React from 'react'

export default function all({tech, science, usa}) {
    return (
      <>
        {tech.articles.map((article, index) => (
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
        {science.articles.map((article, index) => (
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
        {usa.articles.map((article, index) => (
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
