import Posts from "../components/Posts";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

const mapStateToProps = (state) => ({
  posts: state.posts.items,
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
