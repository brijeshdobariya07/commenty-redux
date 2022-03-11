import React from "react";
import CommentsContainer from "./CommentsContainer";
import Header from "./Header";
import TypeCommentBox from "./TypeCommentBox";

function MainContainer() {
  return (
    <div>
      <div className="main-container">
        <Header />
        <CommentsContainer />
        <TypeCommentBox />
      </div>
    </div>
  );
}

export default MainContainer;
