import { combineReducers } from "redux";
import commentReducer from "./reducers/commentReducer";

const rootReducer = combineReducers({
  comments: commentReducer,
});

export default rootReducer;
