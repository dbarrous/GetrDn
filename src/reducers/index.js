import { combineReducers } from "redux";
import todoReducer from "./todoReducer.js";

export default combineReducers({ todo: todoReducer });
