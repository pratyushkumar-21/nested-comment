import React from "react";
import CommentContainer from "../comment/CommentContainer";
import ReplyContainer from "../reply/ReplyContainer";

const CommentSection = (props) => {
  const { comments } = props;

  return (
    <div className="comment-section-wrapper">
      <div>Comment</div>

      <div>
        <ReplyContainer />
      </div>

      <div>
        {Object.values(comments).map((comment) => (
          <CommentContainer
            comment={comment}
            key={comment.id}
            path={`${comment.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
