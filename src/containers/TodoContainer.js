import { connect } from "react-redux";
import TodoItem from "../components/TodoItem";
import { toggleTodo, deleteTodo } from "../actions/todosActions";

const mapStateToProps = (state) => ({
  todos: state.todo.todos,
});

export default connect(mapStateToProps, { toggleTodo, deleteTodo })(TodoItem);
