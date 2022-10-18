import React, { useState, useEffect } from "react";
import Comment from "./Comment";
import { getDateInText, getTimeDiffInSec } from "../../../utils/formatDate";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteComment,
  manipulateManageActiveReply,
} from "../../../store/comments";

const CommentContainer = (props) => {
  const { comment, path = "" } = props;
  const dispatch = useDispatch();

  const commentDateInText = getDateInText(comment.createdAt);
  const isEdited = getTimeDiffInSec(comment.createdAt, comment.modifiedAt) > 0;

  const manageActiveAction = useSelector(
    (state) => state.comments.manageActiveAction
  );

  const [isReplyEnabled, setIsReplyEnabled] = useState(false);
  const [isEditEnabled, setIsEditEnabled] = useState(false);

  const handleAction = (replyValue, editValue) => {
    setIsReplyEnabled(replyValue);
    setIsEditEnabled(editValue);
  };

  useEffect(() => {
    if (manageActiveAction && manageActiveAction.id !== comment.id) {
      handleAction(false, false);
    }
  }, [manageActiveAction, comment.id]);

  const handleReply = () => {
    handleAction(!isReplyEnabled, false);

    if (!isReplyEnabled)
      dispatch(
        manipulateManageActiveReply({ action: "reply", id: comment.id })
      );
    else dispatch(manipulateManageActiveReply(null));
  };

  const handleEdit = () => {
    handleAction(false, !isEditEnabled);

    if (!isEditEnabled)
      dispatch(manipulateManageActiveReply({ action: "edit", id: comment.id }));
    else dispatch(manipulateManageActiveReply(null));
  };

  const handleManageActiveAction = () => {
    handleAction(false, false);
    dispatch(manipulateManageActiveReply(null));
  };

  const handleDelete = () => {
    dispatch(deleteComment({ path }));
  };

  return (
    <Comment
      comment={comment}
      path={path}
      handleReply={handleReply}
      handleEdit={handleEdit}
      handleManageActiveAction={handleManageActiveAction}
      handleDelete={handleDelete}
      manageActiveAction={manageActiveAction}
      commentDateInText={commentDateInText}
      isEdited={isEdited}
    />
  );
};

export default CommentContainer;
