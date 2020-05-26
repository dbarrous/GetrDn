import React, { useState } from "react";
import PropTypes from "prop-types";

const PostsForm = ({ createPost }) => {
  const [state, setState] = useState({ title: "", body: "" });

  return (
    <div>
      <h2>Post Form</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createPost(state);
          setState({ title: "", body: "" });
        }}
      >
        <div>
          <label>Title: </label>
          <br />
          <input
            type="text"
            name="title"
            value={state.title}
            onChange={(e) =>
              setState({ ...state, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div>
          <label>Body: </label>
          <br />
          <textarea
            name="body"
            value={state.body}
            onChange={(e) =>
              setState({ ...state, [e.target.name]: e.target.value })
            }
          />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

PostsForm.propTypes = {
  createPost: PropTypes.func.isRequired,
};

export default PostsForm;
