import React,{useState, useEffect} from 'react'
import '../../style/layout.scss'
import { motion } from 'framer-motion';
export default function Right({ sport }) {
  
  const [data, setData] = useState();
  // console.log(sport.articles);

  useEffect(() => {
  
    setData()
    
  }, [data]);

  


  
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
        }}
      >
        Sports
      </motion.h1>
      <div className="Right">
        {sport.articles.map((article, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .5, duration: .5, ease: "easeInOut" }}
            className="Right-article"
            key={index}
          >
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

        {sport.articles.map((article, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
            className="Right-article"
            key={index}
          >
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

        {sport.articles.map((article, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
            className="Right-article"
            key={index}
          >
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
