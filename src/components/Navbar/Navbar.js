import React from "react";
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { updateSelectedCategory } from "../../store/actions/newsCategoryActions";

const NavItem = (props) => {
  const dispatch = useDispatch();
  return (
    <div
      className="nav-item"
      onClick={() => dispatch(updateSelectedCategory(props.newsItem))}
    >
      {props.newsItem}
    </div>
  );
};

const Navbar = () => {
  const [newsCategories] = useSelector(({ newsCategories }) => [
    newsCategories.newsCategories
  ]);

  return (
    <div className="navbar-container">
      {newsCategories.map((item) => (
        <NavItem key={item} newsItem={item} />
      ))}
    </div>
  );
};

export default Navbar;
