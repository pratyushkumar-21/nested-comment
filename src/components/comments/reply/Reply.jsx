import React from "react";

const Reply = (props) => {
  const {
    value,
    handleSubmit,
    handleInputChange,
    buttonLabel,
    buttonDisabled,
    placeholder,
  } = props;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <div>
            <input
              type="text"
              value={value}
              placeholder={placeholder}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={buttonDisabled}
              className={buttonDisabled ? "button-disabled" : null}
            >
              {buttonLabel}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Reply;
