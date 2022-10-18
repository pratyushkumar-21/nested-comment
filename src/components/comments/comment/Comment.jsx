import React from "react";
import ReplyContainer from "../reply/ReplyContainer";
import CommentContainer from "./CommentContainer";

const Comment = (props) => {
  const {
    comment,
    path,
    handleReply,
    handleManageActiveAction,
    handleEdit,
    handleDelete,
    manageActiveAction,
    commentDateInText,
    isEdited,
  } = props;

  const { author, text, replies } = comment;

  return (
    <div>
      <div className="comment">
        <div className="comment-body">
          <div className="comment-image-desc-wrapper">
            <div>
              <img
                className="author-image"
                src="https://picsum.photos/200"
                alt="author-avatar"
              />
            </div>
            <div>
              <div>
                <div>
                  <span className="author-text">{author}</span>{" "}
                  <span className="faded-text">{commentDateInText}</span>
                </div>
                <div>
                  <div>
                    <span className="main-text">{text}</span>
                    <span className="faded-text">
                      {isEdited && " (edited)"}
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div className="comment-action">
                  <div>
                    <span className="action-text" onClick={handleReply}>
                      reply
                    </span>
                  </div>
                  <div>
                    <span className="action-text" onClick={handleEdit}>
                      edit
                    </span>
                  </div>
                  <div>
                    <span className="action-text" onClick={handleDelete}>
                      delete
                    </span>
                  </div>
                </div>
                <div className="comment-footer">
                  {manageActiveAction &&
                    manageActiveAction.id === comment.id && (
                      <ReplyContainer
                        path={path}
                        handleManageActiveAction={handleManageActiveAction}
                        manageActiveAction={manageActiveAction}
                        presetValue={
                          manageActiveAction.action === "edit" ? text : ""
                        }
                        buttonLabel={
                          manageActiveAction.action === "edit"
                            ? "Edit"
                            : "Reply"
                        }
                        placeholder="reply"
                      />
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {replies && (
        <div className="comment-replies">
          {Object.values(replies).map((reply) => (
            <CommentContainer
              comment={reply}
              key={reply.id}
              path={`${path}-${reply.id}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
