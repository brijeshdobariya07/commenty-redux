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

	const handleSendCommentButton = (e) => {
		e.preventDefault();
		if (commentMsg !== "") {
			dispatch(addComment(sendComment));
			setCommentMsg("");
		} else {
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
