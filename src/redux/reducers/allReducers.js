import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import { reducer as formReducer } from "redux-form";
import filterReducer from "./filterReducer";

const allReducers = combineReducers({
  items: itemReducer,
  filter: filterReducer,
  form: formReducer
});

export default allReducers;
