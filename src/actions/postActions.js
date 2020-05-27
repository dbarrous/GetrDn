import { FETCH_POSTS, NEW_POSTS } from "./types";

const fetchPosts = () => (dispatch) => {
  console.log("Fetching Post - Action");
  fetch("http://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((posts) => dispatch({ type: FETCH_POSTS, payload: posts }))
    .catch((err) => console.log(err));
};

const createPost = (post) => {
  console.log("Creating Post - Action");
  return { type: NEW_POSTS, payload: post };
};

export { fetchPosts, createPost };
