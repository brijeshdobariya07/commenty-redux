import { DELETE_COMMENT } from "../constants";

export const deleteComment = (comment = {}) => {
	return {
		type: DELETE_COMMENT,
		payload: comment,
	};
};
