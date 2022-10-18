import React from "react";
import CommentSection from "./CommentSection";
import { useSelector } from "react-redux";

const CommentSectionContainer = (props) => {
  const comments = useSelector((state) => state.comments.replies);

  return <CommentSection comments={comments} />;
};

export default CommentSectionContainer;
