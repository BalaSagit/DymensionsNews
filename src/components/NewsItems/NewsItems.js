import React from "react";
import "./NewsItems.css";
import { useSelector } from "react-redux";


const IndividualNewsItem = (props) => {
  return(
    <div>
      {props.item}
    </div>
  )
}

const NewsItems = () => {
  const [selectedCategory] = useSelector(({ newsCategories }) => [
    newsCategories.selectedCategory
  ]);

  React.useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=a8909a92a0e6475eafe3380fd7a07f8c')
      .then(results => results.json())
      .then(data => {
        console.log(data)
      });
  }, []);

  const items = ['x','y','z']
  return <div className="news-items-container">{items.map((x) => <IndividualNewsItem item={x}/>)}</div>;
};

export default NewsItems;
