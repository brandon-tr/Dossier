export const addItem = (item, tab) => {
  return {
    type: "ADD_ITEM",
    tab: tab,
    payload: item
  };
};

export const showTab = tab => {
  return {
    type: "SHOW_TAB",
    payload: tab
  };
};

export const addTab = tab => {
  return {
    type: "ADD_TAB",
    payload: tab
  };
};
