import { TOGGLE_TODOS, CREATE_TODO, DELETE_TODO } from "../actions/types";

const initialState = {
  todos: [],
};

const replaceAt = (array, index, value) => {
  const newArray = array.slice(0);
  newArray[index] = value;
  return newArray;
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TODOS:
      const newState = replaceAt(state.todos, action.payload.index, {
        name: action.payload.itemInfo.name,
        isComplete: !action.payload.itemInfo.isComplete,
      });
      return { todos: newState };

    case CREATE_TODO:
      console.log("Adding Post - Reducer");
      return { todos: [action.payload[0], ...state.todos] };

    case DELETE_TODO:
      console.log("Deleting Todo- Reducer");

      const newArray = state.todos.filter((todo) => {
        if (todo.name === action.payload.name) {
          console.log("Deleted Todo");
          return null;
        }

        return todo;
      });

      return { todos: newArray };

    default:
      return state;
  }
};

export default todoReducer;
