import { FETCH_POSTS, NEW_POSTS } from "../actions/types";

const initialState = {
  items: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      console.log("Fetching Posts - Reducer");
      return Object.assign({}, state, { items: action.payload });
    case NEW_POSTS:
      console.log("Adding Post - Reducer");
      return Object.assign({}, state, {
        items: [...state.items, action.payload],
      });
    default:
      return state;
  }
};

export default postReducer;
