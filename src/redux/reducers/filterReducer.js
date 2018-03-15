export default (state = null, action) => {
  switch (action.type) {
    case "SHOW_TAB":
      return action.payload;
    default:
      return state;
  }
};
