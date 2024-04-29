import React from "react";
import SingleComment from "./SingleComment";

const CommentsList = ({ comments }) => {
  return (
    <div>
      <h4>Comments</h4>
      <ul className="list-unstyled p-0">
        {comments.map((comment) => (
          <SingleComment key={comment._id} comment={comment} />
        ))}
      </ul>
    </div>
  );
};

export default CommentsList;
