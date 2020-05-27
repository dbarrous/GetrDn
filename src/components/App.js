import React from "react";
import TodoFormContainer from "../containers/TodoFormContainer";
import TodoContainer from "../containers/TodoContainer";
const App = () => {
  return (
    <div>
      <h1>Todos:</h1>
      <hr />
      <TodoFormContainer />
      <TodoContainer />
    </div>
  );
};

export default App;
