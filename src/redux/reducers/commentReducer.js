import { ADD_COMMENT } from "../constants";

const initialState = {
  comments: [
    {
      id: 1,
      text: "This is Comment One",
      like: true,
      reply: [
        { id: 1, text: "This is reply of comment one", like: false, subid: 1 },
        { id: 2, text: "This is reply of comment one", like: true, subid: 1 },
      ],
    },
  ],
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };

    default:
      return state;
  }
};

export default commentReducer;
