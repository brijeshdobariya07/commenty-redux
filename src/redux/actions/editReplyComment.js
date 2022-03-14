import { EDIT_REPLY_COMMENT } from "../constants";

export const editReplyComment = (comment = {}) => {
  return {
    type: EDIT_REPLY_COMMENT,
    payload: comment,
  };
};
