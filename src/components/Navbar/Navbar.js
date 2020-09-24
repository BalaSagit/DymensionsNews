import React from "react";
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { updateSelectedCategory } from "../../store/actions/newsCategoryActions";

const NavItem = (props) => {

  const dispatch = useDispatch();

  return (
    <button
      className="nav-item"
      onClick={() => dispatch(updateSelectedCategory(props.newsItem))}
      onMouseDown={(e) => e.preventDefault()}
    >
      {props.newsItem}

    </button>
  );
};


const Navbar = () => {

  const [newsCategories] = useSelector(({ newsCategories }) => [
    newsCategories.newsCategories
  ]);

  return (
    <nav className="navbar-container">
      {newsCategories.map((item) => (
        <NavItem key={item} newsItem={item} />
      ))}
    </nav>
  );
};

export default Navbar;
