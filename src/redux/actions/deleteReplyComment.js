import { DELETE_REPLY_COMMENT } from "../constants";

export const deleteReplyComment = (comment = {}) => {
	return {
		type: DELETE_REPLY_COMMENT,
		payload: comment,
	};
};
