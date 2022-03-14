import React, { useState } from "react";
import { MdSend } from "react-icons/md";
import { addReplyComment } from "../redux/actions/addReplyComment";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

function MiniReplyPopup(props) {
  const [replyText, setReplyText] = useState("");
  const originalReplyState = props.originalReplyState;
  const belongingComment = props.belongingComment;
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const sendThisReply = {
      id: uuidv4(),
      text: replyText,
      like: false,
      subid: belongingComment.id,
    };
    if (replyText !== "") {
      belongingComment.reply.push(sendThisReply);
      dispatch(addReplyComment(belongingComment));
      originalReplyState();
    } else {
      alert("Please Enter something");
    }
  };
  return (
    <div>
      <div className="reply-popup">
        <form action="">
          <input
            type="text"
            placeholder="Reply ?"
            onChange={(e) => setReplyText(e.target.value)}
            value={replyText}
          />
          <button type="submit" onClick={(e) => handleSubmit(e)}>
            <MdSend />
          </button>
        </form>
      </div>
    </div>
  );
}

export default MiniReplyPopup;
