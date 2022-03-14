import { combineReducers } from "redux";
import commentReducer from "./reducers/commentReducer";
import editCommentReducer from "./reducers/editCommentReducer";

const rootReducer = combineReducers({
  comments: commentReducer,
  editComment: editCommentReducer,
});

export default rootReducer;
