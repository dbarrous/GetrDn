import React from "react";
import PostsContainer from "../containers/PostsContainer";
import PostsFormContainer from "../containers/PostsFormContainer";
const App = () => {
  return (
    <div>
      <h1>These are the retrieved posts:</h1>
      <PostsFormContainer />
      <hr />
      <PostsContainer />
    </div>
  );
};

export default App;
