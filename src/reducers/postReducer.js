import { FETCH_POSTS, NEW_POSTS } from "../actions/types";
import { v4 as uuid } from "uuid";

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
      const id = uuid();
      return {
        items: [
          {
            userId: id,
            id: id,
            title: action.payload[0].title,
            body: action.payload[0].body,
          },
          ...state.items,
        ],
      };
    default:
      return state;
  }
};

export default postReducer;
