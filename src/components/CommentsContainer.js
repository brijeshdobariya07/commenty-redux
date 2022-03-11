import React, { useEffect } from "react";
// import styled from "styled-components";
import { useSelector, connect } from "react-redux";
import { FaShare, FaHeart } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import { ImPencil2 } from "react-icons/im";
import { useState } from "react";

function CommentsContainer(props) {
  const allComments = useSelector((state) => state.comments.comments);
  useEffect(() => {
    console.log(allComments);
  }, [allComments]);

  return (
    <div className="comments-container">
      {allComments.map((comment) => {
        const { id, text, like, reply } = comment;
        return (
          <div className="mapped-comment" key={id}>
            <div className="comment">
              <div className="comment-text">{text}</div>
              <div className="action-icons">
                <FaHeart className={like ? "like" : "unlike"} />
                <FaShare />
                <ImPencil2 className="edit-icon" />
                <IoTrashOutline className="trash-icon" />
              </div>
            </div>

            <div className="reply-comments">
              {reply.map((thisReply) => {
                return (
                  <div className="reply-comment" key={thisReply.id}>
                    <div className="comment-text">{thisReply.text}</div>
                    <div className="action-icons">
                      <FaHeart className={thisReply.like ? "like" : "unlike"} />
                      <ImPencil2 className="edit-icon" />
                      <IoTrashOutline className="trash-icon" />
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
