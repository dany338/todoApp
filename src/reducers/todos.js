import INITIAL_STATE from "../store/initialState";

const todosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_TODOS_REQUEST": {
      return {
        ...state,
        loading: true
      };
    }

    case "FETCH_TODOS_SUCCESS": {
      const { todos } = action.payload;

      return {
        ...state,
        todos,
        todosBackup: todos,
        loading: false
      };
    }

    case "FETCH_PRODUCTS_FAILURE": {
      const { error } = action.payload;

      return {
        ...state,
        error,
        loading: false
      };
    }

    case "FETCH_CREATE_TODO": {
      const { todo } = action.payload;
      const newTodos = [...state.todos, todo];

      return {
        ...state,
        todos: newTodos,
        todosBackup: newTodos,
        loading: false
      };
    }

    case "FETCH_UPDATE_TODO": {
      const { todo } = action.payload;
      const newTodos = state.todos.map(item => {
        if (todo.id === item.id) {
          return todo;
        } else {
          return item;
        }
      });

      return {
        ...state,
        todos: newTodos,
        todosBackup: newTodos,
        loading: false
      };
    }

    case "FETCH_PRODUCT_SELECTED": {
      const { todoSelected } = action.payload;

      return {
        ...state,
        todoSelected
      };
    }

    case "SET_TODO_FORM_CHANGE": {
      const { name, value } = action.payload;

      return {
        ...state,
        todoForm: {
          ...state.todoForm,
          [name]: value
        }
      };
    }

    default: {
      return state;
    }
  }
};

export default todosReducer;
