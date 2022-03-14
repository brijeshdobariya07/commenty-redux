import React, { useState, useEffect } from "react";
import { MdSend } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { addComment } from "../redux/actions/addComment";
import { v4 as uuidv4 } from "uuid";
import { editComment } from "../redux/actions/editComment.js";
import { editReplyComment } from "../redux/actions/editReplyComment";

function TypeCommentBox(props) {
  const [commentMsg, setCommentMsg] = useState("");
  const [didWeGetEditComment, setDidWeGetEditComment] = useState(false);
  // const getCommentsState = useSelector((state) => state.comments.comments);
  const getHoldEditComment = useSelector((state) => state.editComment.comment);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      getHoldEditComment !== {} &&
      getHoldEditComment.id &&
      getHoldEditComment.text !== ""
    ) {
      setCommentMsg(getHoldEditComment.text || "");
      setDidWeGetEditComment(true);
    } else {
      setCommentMsg("");
      setDidWeGetEditComment(false);
    }
  }, [getHoldEditComment]);

  const sendComment = {
    id: uuidv4(),
    text: commentMsg,
    like: false,
    reply: [],
  };

  const handleInput = (e) => {
    setCommentMsg(e.target.value);
  };

  const handleSendCommentButton = (e) => {
    e.preventDefault();
    if (
      commentMsg !== "" &&
      commentMsg.id === undefined &&
      didWeGetEditComment === false
    ) {
      dispatch(addComment(sendComment));
      setCommentMsg("");
    }
    if (
      getHoldEditComment.text !== "" &&
      getHoldEditComment.id !== "" &&
      getHoldEditComment.subid === undefined &&
      didWeGetEditComment
    ) {
      getHoldEditComment.text = commentMsg;
      dispatch(editComment(getHoldEditComment));
    }
    if (
      getHoldEditComment.text !== "" &&
      getHoldEditComment.id !== "" &&
      getHoldEditComment.subid !== undefined &&
      didWeGetEditComment
    ) {
      getHoldEditComment.text = commentMsg;
      dispatch(editReplyComment(getHoldEditComment));
    }
    if (commentMsg === "") {
      alert("Please Type Something");
    }
  };

  return (
    <div>
      <form action="">
        <div className="type-comment-box-container">
          <div className="type-comment-input">
            <input
              type="text"
              placeholder="Enter Comment . . ."
              onChange={(e) => handleInput(e)}
              value={commentMsg}
            />
          </div>
          <button type="submit" onClick={(e) => handleSendCommentButton(e)}>
            <MdSend className="send-icon" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default TypeCommentBox;
