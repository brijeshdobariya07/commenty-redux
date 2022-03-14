import { EDIT_COMMENT } from "../constants";

export const editComment = (comment = {}) => {
  return {
    type: EDIT_COMMENT,
    payload: comment,
  };
};
