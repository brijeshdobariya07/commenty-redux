import { ADD_COMMENT, ADD_REPLY_COMMENT } from "../constants";
import { DELETE_COMMENT } from "../constants";
import { LIKE_COMMENT } from "../constants";

const initialState = {
	comments: [
		{
			id: "1",
			text: "This is Comment One",
			like: true,
			reply: [
				{
					id: "1",
					text: "This is reply of comment one",
					like: false,
					subid: 1,
				},
				{ id: "2", text: "This is reply of comment one", like: true, subid: 1 },
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

		case DELETE_COMMENT:
			const copyStateComments = [...state.comments];
			const deleteComment = action.payload;
			const findIndexInComments = copyStateComments.findIndex(
				(comment) => comment.id === deleteComment.id
			);
			copyStateComments.splice(findIndexInComments, 1);
			return { ...state, comments: copyStateComments };

		case LIKE_COMMENT:
			const copyStateCommentsForLike = [...state.comments];
			const isLikedComment = action.payload;
			const findIndexForLike = copyStateCommentsForLike.findIndex(
				(comment) => comment.id === isLikedComment.id
			);
			copyStateCommentsForLike[findIndexForLike].like = !isLikedComment.like;
			return { ...state, comments: copyStateCommentsForLike };

		case ADD_REPLY_COMMENT:
			console.log(action.payload);
			return state;

		default:
			return state;
	}
};

export default commentReducer;
