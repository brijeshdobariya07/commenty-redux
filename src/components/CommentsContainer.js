import React, { useEffect } from "react";
// import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { FaShare, FaHeart } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import { ImPencil2 } from "react-icons/im";
import { useState } from "react";
import { deleteComment } from "../redux/actions/deleteComment";
import { likeComment } from "../redux/actions/likeComment";
import MiniReplyPopup from "./MiniReplyPopup";
import { likeReplyComment } from "../redux/actions/likeReplyComment";
import { deleteReplyComment } from "../redux/actions/deleteReplyComment";
import { holdEditComment } from "../redux/actions/edit-comment/holdEditComment";
import TypeCommentBox from "./TypeCommentBox";

function CommentsContainer(props) {
  const [isReplyButtonClicked, setIsReplyButtonClicked] = useState({
    id: "",
    isReply: false,
  });
  const [isEdit, setIsEdit] = useState({ id: "", edit: false });
  const allComments = useSelector((state) => state.comments.comments);
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log(allComments);
  }, [allComments]);

  const handleDeleteComment = (comment) => {
    alert("This Comment Will be deleted");
    dispatch(deleteComment(comment));
  };

  const handleLikeComment = (comment) => {
    dispatch(likeComment(comment));
  };

  const handleEditComment = (comment) => {
    setIsEdit({ id: comment.id, edit: !isEdit.edit });
    if (!isEdit.edit) {
      dispatch(holdEditComment(comment));
    } else {
      dispatch(holdEditComment({}));
    }
  };

  const handleReplyPopup = (id) => {
    setIsReplyButtonClicked({ id: id, isReply: !isReplyButtonClicked.isReply });
  };

  const originalReplyState = () => {
    setIsReplyButtonClicked({
      id: "",
      isReply: false,
    });
  };

  // For Reply comments
  const handleLikeReplyComment = (belongingComment, replyComment) => {
    dispatch(likeReplyComment(replyComment));
  };

  const handleDeleteReply = (comment) => {
    alert("This Comment Will be deleted");
    dispatch(deleteReplyComment(comment));
  };

  return (
    <div className="comments-container">
      {allComments.map((comment) => {
        const { id, text, like, reply } = comment;
        return (
          <div className="mapped-comment" key={id}>
            <div className="comment">
              <div className="comment-text">{text}</div>
              <div className="action-icons">
                <FaHeart
                  className={like ? "like" : "unlike"}
                  onClick={() => handleLikeComment(comment)}
                />
                <FaShare onClick={() => handleReplyPopup(id)} />
                {isReplyButtonClicked.isReply &&
                isReplyButtonClicked.id === id ? (
                  <MiniReplyPopup
                    originalReplyState={originalReplyState}
                    belongingComment={comment}
                  />
                ) : null}

                <ImPencil2
                  className={isEdit.edit && isEdit.id === id ? "edit-icon" : ""}
                  onClick={() => handleEditComment(comment)}
                />
                <IoTrashOutline
                  className="trash-icon"
                  onClick={() => handleDeleteComment(comment)}
                />
              </div>
            </div>

            <div className="reply-comments">
              {reply.map((thisReply) => {
                return (
                  <div className="reply-comment" key={thisReply.id}>
                    <div className="comment-text">{thisReply.text}</div>
                    <div className="action-icons">
                      <FaHeart
                        className={thisReply.like ? "like" : "unlike"}
                        onClick={() =>
                          handleLikeReplyComment(comment, thisReply)
                        }
                      />
                      <ImPencil2
                        className={
                          isEdit.edit && isEdit.id === thisReply.id
                            ? "edit-icon"
                            : ""
                        }
                        onClick={() => handleEditComment(thisReply)}
                      />
                      <IoTrashOutline
                        className="trash-icon"
                        onClick={() => handleDeleteReply(thisReply)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CommentsContainer;

// const MainCommentsDiv = styled.div`
//   width: 60%;
//   overflow: auto;

//   .comment {
//     width: 70%;
//     background: #f2f2f2;
//     padding:
//   }
// `;
