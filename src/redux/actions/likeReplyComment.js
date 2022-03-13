import { LIKE_REPLY_COMMENT } from "../constants";

export const likeReplyComment = (comment = {}) => {
	return {
		type: LIKE_REPLY_COMMENT,
		payload: comment,
	};
};
