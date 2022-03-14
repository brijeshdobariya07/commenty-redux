import { HOLD_EDIT_COMMENT } from "../constants";

const initialState = {
  comment: {},
};

const editCommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOLD_EDIT_COMMENT:
      return {
        comment: action.payload,
      };

    default:
      return state;
  }
};

export default editCommentReducer;
