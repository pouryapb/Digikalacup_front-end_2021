import React from "react";
import classnames from "classnames";
import CommentBox from "../CommentBox";
import "./_styles.scss";

const CommentList = ({ comments }) => {
  return (
    <div className="root-list">
      {comments.map((comment, idx) => {
        let count = 0;
        let currentComment = comment;
        while (currentComment.parentId) {
          count++;
          currentComment = comments.find(
            (c) => c.id === currentComment.parentId
          );
        }
        return (
          <div
            data-testid="comment-wrapper"
            className={classnames({
              // Should be true for root comment
              "root-comment": comment.parentId === null,
            })}
            key={comment.id}
          >
            {
              // Render comment and it's children here use CommentBox
              <CommentBox
                comment={comment}
                style={{
                  marginLeft: `${count * 16}px`,
                }}
              />
            }
          </div>
        );
      })}
    </div>
  );
};

export default CommentList;
