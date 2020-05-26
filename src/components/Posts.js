import React, { useEffect } from "react";
import PropTypes from "prop-types";

const Posts = ({ posts, fetchPosts, newPost }) => {
  //Fetch Posts and add to State via  Redux
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  //Rendering
  return (
    <div>
      {posts === null
        ? null
        : posts.map((post) => {
            return (
              <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            );
          })}
    </div>
  );
};
//Prop Types
Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
};

export default Posts;
