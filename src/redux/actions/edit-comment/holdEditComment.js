import { HOLD_EDIT_COMMENT } from "../../constants";

export const holdEditComment = (comment = {}) => {
  return {
    type: HOLD_EDIT_COMMENT,
    payload: comment,
  };
};
