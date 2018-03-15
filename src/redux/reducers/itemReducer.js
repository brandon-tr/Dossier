import update from "immutability-helper";
const initialState = {
  arr: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      let index = 0;
      state.arr.map((item, id) => {
        item.tab === action.tab ? (index = id) : null;
      });
      return update(state, {
        arr: { [index]: { list: { $push: [action.payload] } } }
      });
    case "ADD_TAB":
      return {
        ...state,
        arr: [...state.arr, { tab: action.payload, list: [] }]
      };
    default:
      return state;
  }
};
