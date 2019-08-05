export const fetchTodosRequest = () => {
  return {
    type: "FETCH_TODOS_REQUEST"
  };
};

export const fetchTodosSuccess = todos => {
  return {
    type: "FETCH_TODOS_SUCCESS",
    payload: { todos }
  };
};

export const fetchTodosFailure = error => {
  return {
    type: "FETCH_TODOS_FAILURE",
    payload: { error }
  };
};

export const fetchCreateTodo = todo => {
  return {
    type: "FETCH_CREATE_TODO",
    payload: { todo }
  };
};

export const fetchUpdateTodo = todo => {
  return {
    type: "FETCH_UPDATE_TODO",
    payload: { todo }
  };
};

export const fetchTodoSelected = todoSelected => {
  return {
    type: "FETCH_TODO_SELECTED",
    payload: { todoSelected }
  };
};

export const setTodoFormChange = (name, value) => {
  return {
    type: "SET_TODO_FORM_CHANGE",
    payload: { name, value }
  };
};
