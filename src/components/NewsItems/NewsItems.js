import React, { useState } from "react";
import "./NewsItems.css";
import { useSelector } from "react-redux";

const IndividualNewsItem = (props) => {
  return (
    <div className="individual-news-item">
      <div className="ini-img-container">
        <img
          src={props.newsItem.urlToImage}
          alt={props.newsItem.title + " News Item Image"}
          className="ini-img"
        />
      </div>

      <a href={props.newsItem.url} target="_blank" className="ini-title" rel="noopener noreferrer">
        {props.newsItem.title}
      </a>

      <p className="ini-description">{props.newsItem.description}</p>
      <div className="ini-footer">
        <footer className="ini-footer-left">
          <p className="ini-author">{props.newsItem.author}</p>
          <p className="ini-pub-at">{props.newsItem.publishedAt}</p>
        </footer>
        <a
          href={props.newsItem.url}
          target="_blank"
          rel="noopener noreferrer"
          className="ini-click-for-more"
        >
          more...
        </a>
      </div>
    </div>
  );
};

const NewsItems = () => {
  const [selectedCategory] = useSelector(({ newsCategories }) => [
    newsCategories.selectedCategory
  ]);

  const [newsList, setNewsList] = useState([]);

  React.useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=" +
        selectedCategory +
        "&pageSize=15&apiKey=a8909a92a0e6475eafe3380fd7a07f8c"
    )
      .then((results) => results.json())
      .then((data) => {
        if (data.articles) {
          setNewsList(data.articles);
        }
      });
  }, [selectedCategory]);

  return (
    <div className="news-items-container">
      {newsList.length >= 1 ? (
        newsList.map((newsItem) => (
          <IndividualNewsItem key={newsItem.title} newsItem={newsItem} />
        ))
      ) : (
        <img
          src="https://freefrontend.com/assets/img/html-css-404-page-templates/HTML-Error-Page.png"
          alt= "Empty Page"
          className="empty-page-img"
        />
      )}
    </div>
  );
};

export default NewsItems;
