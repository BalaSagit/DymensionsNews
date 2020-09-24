import { combineReducers } from "redux";
import newsCategoryReducer from "./newsCategoryReducer";

const reducers = {
  newsCategories: newsCategoryReducer
};

export default combineReducers({
  ...reducers
});
