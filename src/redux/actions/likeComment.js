import { LIKE_COMMENT } from "../constants";

export const likeComment = (comment = {}) => {
	return {
		type: LIKE_COMMENT,
		payload: comment,
	};
};
