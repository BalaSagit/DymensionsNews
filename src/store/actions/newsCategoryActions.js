export const setNewsCategories = (data) => (dispatch) => {
  dispatch({
    type: "SET_NEWS_CATEGORIES",
    payload: data
  });
};

export const updateSelectedCategory = (data) => (dispatch) => {
  dispatch({
    type: "UPDATE_SELECTED_CATEGORY",
    payload: data
  });
};

