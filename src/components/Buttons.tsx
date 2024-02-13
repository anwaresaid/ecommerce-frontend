import React from "react";

function Buttons({ onClickHandler, value, title }) {
  return (
    <button
      className="btns"
      name="company"
      onClick={onClickHandler}
      value={value}
    >
      {title}
    </button>
  );
}

export default Buttons;
