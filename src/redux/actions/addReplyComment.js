import { ADD_REPLY_COMMENT } from "../constants";

export const addReplyComment = (comment = {}) => {
	return {
		type: ADD_REPLY_COMMENT,
		payload: comment,
	};
};
