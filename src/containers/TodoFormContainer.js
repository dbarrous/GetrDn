import { connect } from "react-redux";
import TodoForm from "../components/TodoForm";
import { createTodo } from "../actions/todosActions";

export default connect(null, { createTodo })(TodoForm);
