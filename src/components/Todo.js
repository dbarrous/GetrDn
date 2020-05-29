import React from "react";
import TodoFormContainer from "../containers/TodoFormContainer";
import TodoContainer from "../containers/TodoContainer";

const Todo = () => {
  return (
    <div>
      <h1>Todos:</h1>

      <TodoFormContainer />
      <TodoContainer />
    </div>
  );
};

export default Todo;
