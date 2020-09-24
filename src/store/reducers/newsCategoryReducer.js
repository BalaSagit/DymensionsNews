const defaultState = {
  newsCategories: [
    "BITCOIN",
    "U.S.A",
    "APPLE",
    "TECHCRUNCH",
    "WALL STREET JOURNAL"
  ],

  selectedCategory: "BITCOIN"
};

export default (state = defaultState, action) => {
  let updatedState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case "SET_NEWS_CATEGORIES":
      updatedState.newsCategories = action.payload;
      break;

    case "UPDATE_SELECTED_CATEGORY":
      updatedState.selectedCategory = action.payload;
      break;

    default:
      return updatedState;
  }

  return updatedState;
};
