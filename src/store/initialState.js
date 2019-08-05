const INITIAL_STATE = {
  todos: [],
  todosBackup: [],
  todoSelected: null,
  todoForm: {
    id: null,
    titulo: "",
    descripcion: "",
    tiempo_estimado: 0,
    tiempo_trabajado: 0
  },
  loading: false,
  error: null
};

export default INITIAL_STATE;
