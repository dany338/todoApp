import * as SerempreActions from "../actions";
// Apis, constants
import api from "../utils/api";

// **** Todos ****
// Obtener los todos
export const getTodosRequest = () => {
  return async dispatch => {
    try {
      dispatch(SerempreActions.fetchTodosRequest());
      const todos = await api.getTodos();
      dispatch(SerempreActions.fetchTodosSuccess(todos));
    } catch (error) {
      dispatch(SerempreActions.fetchTodosFailure(error.message));
    }
  };
};

export const todoFormChangeRequest = (name, value) => {
  return dispatch => {
    try {
      dispatch(SerempreActions.setTodoFormChange(name, value));
    } catch (error) {
      dispatch(SerempreActions.fetchTodosFailure(error.message));
    }
  };
};

export const createTodoRequest = todo => {
  return dispatch => {
    try {
      dispatch(SerempreActions.fetchCreateTodo(todo));
    } catch (error) {
      dispatch(SerempreActions.fetchUsersFailure(error.message));
    }
  };
};

export const updateTodoRequest = todo => {
  return dispatch => {
    try {
      dispatch(SerempreActions.fetchUpdateTodo(todo));
    } catch (error) {
      dispatch(SerempreActions.fetchUsersFailure(error.message));
    }
  };
};

export const setTodoSelected = todoSelected => {
  return dispatch => {
    dispatch(SerempreActions.fetchTodoSelected(todoSelected));
  };
};
