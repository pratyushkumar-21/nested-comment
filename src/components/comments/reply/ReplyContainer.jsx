import React, { useEffect, useState } from "react";
import Reply from "./Reply";
import { useDispatch } from "react-redux";
import { addComment, updateComment } from "../../../store/comments";
import { validateInputBox } from "../../../utils/formValidation";

const ReplyContainer = (props) => {
  const {
    path = "",
    manageActiveAction = {},
    handleManageActiveAction,
    presetValue = "",
    buttonLabel = "Add Coment",
    placeholder = "comment",
  } = props;

  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const buttonDisabled = !validateInputBox(value);

  useEffect(() => {
    setValue(presetValue);
  }, [presetValue]);

  const handleInputChange = (e) => setValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!manageActiveAction.action || manageActiveAction.action === "reply")
      dispatch(addComment({ text: value, path }));
    else if (manageActiveAction.action === "edit")
      dispatch(updateComment({ path, text: value }));

    setValue("");

    if (handleManageActiveAction) handleManageActiveAction();
  };

  return (
    <Reply
      handleSubmit={handleSubmit}
      value={value}
      handleInputChange={handleInputChange}
      buttonLabel={buttonLabel}
      buttonDisabled={buttonDisabled}
      placeholder={placeholder}
    />
  );
};

export default ReplyContainer;
