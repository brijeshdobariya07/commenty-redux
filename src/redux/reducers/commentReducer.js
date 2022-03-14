import {
  ADD_COMMENT,
  ADD_REPLY_COMMENT,
  LIKE_REPLY_COMMENT,
  DELETE_REPLY_COMMENT,
  EDIT_COMMENT,
  EDIT_REPLY_COMMENT,
} from "../constants";
import { DELETE_COMMENT } from "../constants";
import { LIKE_COMMENT } from "../constants";

const initialState = {
  comments: [
    {
      id: "1",
      text: "Everything has beauty, but not everyone can see. ",
      like: true,
      reply: [
        {
          id: "2",
          text: "Nice",
          like: false,
          subid: "1",
        },
        {
          id: "3",
          text: "Very Good",
          like: true,
          subid: "1",
        },
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
      //   console.log(state);
      return state;

    case EDIT_COMMENT:
      console.log(action.payload);
      const copyStateCommentsForEdit = [...state.comments];
      const editComment = action.payload;
      const findIndexForEdit = copyStateCommentsForEdit.findIndex(
        (item) => item.id === editComment.id
      );
      copyStateCommentsForEdit[findIndexForEdit].text = editComment.text;
      return { ...state, comments: copyStateCommentsForEdit };

    case LIKE_REPLY_COMMENT:
      const copyStateCommentsForReplyLike = [...state.comments];
      const likeReplyComment = action.payload;
      const findIndexForReplyLike = copyStateCommentsForReplyLike.findIndex(
        (item) => item.id === likeReplyComment.subid
      );
      const findIndexOfReplyComment = copyStateCommentsForReplyLike[
        findIndexForReplyLike
      ].reply.findIndex((item) => item.id === likeReplyComment.id);

      copyStateCommentsForReplyLike[findIndexForReplyLike].reply[
        findIndexOfReplyComment
      ].like = !likeReplyComment.like;
      return { ...state, comments: copyStateCommentsForReplyLike };

    case DELETE_REPLY_COMMENT:
      const copyStateCommentsForReplyDelete = [...state.comments];
      const deleteReplyComment = action.payload;
      const findMainCommentIndex = copyStateCommentsForReplyDelete.findIndex(
        (item) => item.id === deleteReplyComment.subid
      );
      const findIndexOfDeleteReplyComment = copyStateCommentsForReplyDelete[
        findMainCommentIndex
      ].reply.findIndex((item) => item.id === deleteReplyComment.id);
      copyStateCommentsForReplyDelete[findMainCommentIndex].reply.splice(
        findIndexOfDeleteReplyComment,
        1
      );
      return { ...state, comments: copyStateCommentsForReplyDelete };

    case EDIT_REPLY_COMMENT:
      const copyStateCommentsForEditReply = [...state.comments];
      const editReplyComment = action.payload;
      const findIndexForEditComment = copyStateCommentsForEditReply.findIndex(
        (item) => item.id === editReplyComment.subid
      );
      const findIndexForEditReplyComment = copyStateCommentsForEditReply[
        findIndexForEditComment
      ].reply.findIndex((item) => item.id === editReplyComment.id);
      copyStateCommentsForEditReply[findIndexForEditComment].reply[
        findIndexForEditReplyComment
      ].text = editReplyComment.text;
      return { ...state, comments: copyStateCommentsForEditReply };

    default:
      return state;
  }
};

export default commentReducer;
