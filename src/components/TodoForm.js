import React, { useState } from "react";
import PropTypes from "prop-types";

const TodoForm = ({ createTodo }) => {
  const [state, setState] = useState({ name: "" });

  return (
    <div>
      <h2>Add a Todo!</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (state.name.length >= 1) {
            createTodo([{ ...state, isComplete: false }]);
          }
          setState({ name: "" });
        }}
      >
        <div>
          <label>Todo: </label>
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={(e) =>
              setState({ ...state, [e.target.name]: e.target.value })
            }
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

TodoForm.propTypes = {
  createTodo: PropTypes.func.isRequired,
};

export default TodoForm;
