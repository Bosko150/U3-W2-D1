import React from "react";

const SingleComment = ({ comment }) => {
  return (
    <li className="bg-light">
      <p>{comment.comment}</p>
      <p>Rate: {comment.rate}</p>
    </li>
  );
};

export default SingleComment;
