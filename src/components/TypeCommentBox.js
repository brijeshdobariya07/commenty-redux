import React, { useState, useEffect } from "react";
import { MdSend } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { addComment } from "../redux/actions/addComment";
import { v4 as uuidv4 } from "uuid";

function TypeCommentBox() {
	const [commentMsg, setCommentMsg] = useState("");
	// const getCommentsState = useSelector((state) => state.comments.comments);
	const dispatch = useDispatch();

	const sendComment = {
		id: uuidv4(),
		text: commentMsg,
		like: false,
		reply: [],
	};

	const handleInput = (e) => {
		setCommentMsg(e.target.value);
	};

	const handleSendCommentButton = () => {
		if (commentMsg !== "") {
			dispatch(addComment(sendComment));
			setCommentMsg("");
		} else {
			alert("Please Type Something");
		}
	};

	return (
		<div>
			<div className="type-comment-box-container">
				<div className="type-comment-input">
					<input
						type="text"
						placeholder="Enter Comment . . ."
						onChange={(e) => handleInput(e)}
						value={commentMsg}
					/>
				</div>
				<div>
					<MdSend className="send-icon" onClick={handleSendCommentButton} />
				</div>
			</div>
		</div>
	);
}

export default TypeCommentBox;
