import { TOGGLE_TODOS, CREATE_TODO, DELETE_TODO } from "./types";

export const toggleTodo = (todo) => {
  console.log("Toggle Todo - Action");
  return { type: TOGGLE_TODOS, payload: todo };
};

export const createTodo = (todo) => {
  console.log("Creating Todo - Action");
  return { type: CREATE_TODO, payload: todo };
};

export const deleteTodo = (todo) => {
  console.log("Deleting Todo - Action");
  return { type: DELETE_TODO, payload: todo };
};
