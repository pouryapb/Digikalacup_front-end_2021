import React from "react";
import "./_styles.scss";

const CommentBox = ({ comment, style }) => {
  return (
    <div data-testid={comment.id} className="comment-box" style={style}>
      <p className="comment-box__user">
        {comment.user.firstName} {comment.user.lastName}
      </p>
      <p className="comment-box__description">{comment.info.description}</p>
    </div>
  );
};

export default CommentBox;
