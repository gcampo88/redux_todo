export const fetchTtodos = (success, error) => {
  $.ajax({
    url: "api/ttodos",
    success,
    error
  });
};

export const createTodo = (ttodo, success, error) => {
  $.ajax({
    url: "api/ttodos",
    method: "post",
    data: { ttodo: ttodo },
    success,
    error
  });
};
