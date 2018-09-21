import React from "react";
import ReactDOM from "react-dom";

function AddItem(props) {
  return (
    <div>
      <input type="text" onKeyPress={props.onChange} />
      <button onClick={props.onClick}>+</button>
    </div>
  );
}

export default AddItem;
