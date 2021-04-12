import React from "react";

function Task({name, category}) {

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{name}</div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;
