import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ad82d0fce6074bc8a0eb2fab70e1b8cd"
        );
        setNews(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  const handlePrevClick = async () => {
    console.log("previous");
    let url = "https://newsapi.org/v2/top-headlines?country=us}&category=business&apiKey=ad82d0fce6074bc8a0eb2fab70e1b8cd&pageSize=10";
    let response = await fetch(url);
    let parsedData = await response.json();
    console.log(parsedData);
    // Update the state using setNews
    setNews(parsedData.articles);
  };

  const handleNextClick = async () => {
    console.log();
    if (this.state.page + 1 > this.state.totalResults / 10) {
      // Add your logic here
    } else {
      let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ad82d0fce6074bc8a0eb2fab70e1b8cd&pageSize=10";
      let response = await fetch(url);
      let parsedData = await response.json();
      console.log(parsedData);
      // Update the state using setNews
      setNews(parsedData.articles);
      console.log("Next");
      // Update the page state
      // ...
    }
  };

  return (
    <div>
      <h2>Latest News</h2>
      {news.map((element) => (
        <div className="col-md-4" key={element.url}>
          <NewsItem
            title={element.title ? element.title : ""}
            description={element.description ? element.description : ""}
            imageUrl={element.urlToImage}
            url={element.url}
            author={element.author}
            date={element.publishedAt}
          />
        </div>
      ))}
      <div className="container d-flex justify-content-between">
        <button
          disabled={this.state.page <= 1}
          type="button"
          className="btn btn-dark"
          onClick={handlePrevClick}
        >
          &larr; Previous
        </button>
        <button
          type="button"
          className="btn btn-dark"
          onClick={handleNextClick}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
}

export default News;




