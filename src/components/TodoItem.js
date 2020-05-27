import React from "react";
import styled from "styled-components";
import { v4 } from "uuid";
import PropTypes from "prop-types";

const Container = styled.div`
  background: ${(props) => (props.props ? "green" : "red")};
  color: white;
`;

const TodoItem = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <div>
      {todos !== undefined
        ? todos.map((todo, i) => {
            return (
              <div key={v4()}>
                <Container
                  props={todo.isComplete}
                  onClick={() => {
                    toggleTodo({ itemInfo: todo, index: i });
                  }}
                >
                  <h4>{todo.name}</h4>
                </Container>
                <button onClick={() => deleteTodo(todo)}>X</button>
              </div>
            );
          })
        : null}
    </div>
  );
};

TodoItem.propTypes = {
  toggleTodo: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
};
export default TodoItem;
