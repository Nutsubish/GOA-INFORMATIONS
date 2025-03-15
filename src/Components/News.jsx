import { useEffect, useState } from "react";

function NewsSearch() {
  const [input, setInput] = useState("");
  const [news, setNews] = useState([]);
  
  useEffect(() => {
    if (!input) return;

    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${input}&from=2025-02-15&sortBy=publishedAt&apiKey=f9444f0b50964e038c09750d3db0b477`
        );
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        setNews([]);
      }
    };

    fetchNews();
  }, [input]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div style={{textAlign: "center"}}>
        <form onSubmit={handleSubmit}>
          <h1>Search News</h1>
          <input type="text" value={input} onChange={handleChange} placeholder="Enter search term..." />
        </form>
      </div>
      <div>
        {news.length > 0 ? (
          news.map((article, index) => (
            <div key={index} style={{textAlign: "center"}}>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <a href={article.url} target="_blank">Read more</a>
            </div>
          ))
        ) : (
          <p style={{textAlign: "center"}}>No articles found.</p>
        )}
      </div>
    </>
  );
}

export default NewsSearch;