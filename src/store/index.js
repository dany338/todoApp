import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import todosReducer from "../reducers";
// Call, dispatchers
import {
  getTodosRequest,
  todoFormChangeRequest,
  createTodoRequest,
  updateTodoRequest,
  setTodoSelected
} from "./dispatchers";

// Concepto nuevo: Middleware
const middlewares = applyMiddleware(thunk);
const store = createStore(
  todosReducer,
  middlewares
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export {
  store as default,
  getTodosRequest,
  todoFormChangeRequest,
  createTodoRequest,
  updateTodoRequest,
  setTodoSelected
};
