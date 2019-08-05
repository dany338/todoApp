const baseUrl = "";

const fetchParams = (method, data = "") => {
  const body = data ? { body: JSON.stringify(data) } : {};

  return {
    method: method,
    headers: apiHeaders,
    credentials: "same-origin",
    ...body
  };
};

const apiHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json"
};

const api = {
  getTodos: async () => {
    const todosResponse = await fetch("todos.json", fetchParams("GET"));
    const todos = await todosResponse.json();

    return todos;
  }
};

export default api;
