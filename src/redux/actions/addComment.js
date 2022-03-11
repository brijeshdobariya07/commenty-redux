import { ADD_COMMENT } from "../constants";

export const addComment = (comment = "") => {
  return {
    type: ADD_COMMENT,
    payload: comment,
  };
};
