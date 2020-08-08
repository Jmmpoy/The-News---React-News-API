import React,{useState, useEffect} from 'react'
import '../../style/layout.scss'
export default function Right({ sport }) {
  
  const [data, setData] = useState();
  // console.log(sport.articles);

  useEffect(() => {
  
    setData()
    
  }, [data]);

  


  
  return (
    <div className="Right-Container">
      <h1>Sports</h1>
      <div className="Right">
        {sport.articles.map((article, index) => (
          <div className="Right-article" key={index}>
            <a href={article.url}>
              <div>
                <img src={article.urlToImage} alt="yo" />
              </div>

              <div>
                <h4>{article.title}</h4>
                <p>{article.author}</p>
              </div>
            </a>
          </div>
        ))}

        {sport.articles.map((article, index) => (
          <div className="Right-article" key={index}>
            <a href={article.url}>
              <div>
                <img src={article.urlToImage} alt="yo" />
              </div>

              <div>
                <h4>{article.title}</h4>
                <p>{article.author}</p>
              </div>
            </a>
          </div>
        ))}

        {sport.articles.map((article, index) => (
          <div className="Right-article" key={index}>
            <a href={article.url}>
              <div>
                <img src={article.urlToImage} alt="yo" />
              </div>

              <div>
                <h4>{article.title}</h4>
                <p>{article.author}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
