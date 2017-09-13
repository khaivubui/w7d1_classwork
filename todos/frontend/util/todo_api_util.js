export const getTodos = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/todos'
  });
};

export const postTodo = (todo) => $.ajax({
  method: 'POST',
  url: '/api/todos',
  data: {todo: {title: todo.title, body: todo.body}} // { todo }
});

export const patchTodo = todo => $.ajax({
  method: 'PATCH',
  url: `/api/todos/${todo.id}`,
  data: {todo}
});

export const deleteTodo = todo => $.ajax({
  method: 'DELETE',
  url: `/api/todos/${todo.id}`
});
