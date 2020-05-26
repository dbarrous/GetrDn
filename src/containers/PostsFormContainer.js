import { connect } from "react-redux";
import PostsForm from "../components/PostsForm";
import { createPost } from "../actions/postActions";

export default connect(null, { createPost })(PostsForm);
