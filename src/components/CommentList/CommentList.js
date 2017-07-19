import React from "react";
import { Comment } from "../";
import "./CommentList.css";

const CommentList = props => {
  const comments = props.comments;
  return (
    <ul className="commentList">
      {comments.map(comment => {
        return (
          <Comment
            key={comment.id}
            name={comment.email.split("@")[0]}
            body={comment.body}
          />
        );
      })}
    </ul>
  );
};

export default CommentList;
