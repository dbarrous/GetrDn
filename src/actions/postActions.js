import { FETCH_POSTS, NEW_POSTS } from "./types";

const fetchPosts = () => (dispatch) => {
  console.log("Fetching Post - Action");
  fetch("http://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((posts) => dispatch({ type: FETCH_POSTS, payload: posts }))
    .catch((err) => console.log(err));
};

const createPost = (postData) => (dispatch) => {
  console.log("Creating Post - Action");
  fetch("http://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => dispatch({ type: NEW_POSTS, payload: post }))
    .catch((err) => console.log(err));
};

export { fetchPosts, createPost };
