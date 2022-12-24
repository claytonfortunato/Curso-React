import React from "react";

import Task from "./Task";

function Tasks({ tasks }) {
  return (
    <div>
      {tasks.map((task) => (
        <Task />
      ))}
    </div>
  );
}

export default Tasks;
