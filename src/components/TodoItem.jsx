import React from "react";

function TodoItem({ title }) {
  return (
    <div style={style}>
      <p>{title}</p>
    </div>
  );
}

const style = {
  border: "2px solid #f4f4f4",
  fontSize: "24px",
};

export default TodoItem;
