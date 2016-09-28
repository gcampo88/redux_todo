export const REQUEST_TTODOS = "REQUEST_TTODOS";
export const RECEIVE_TTODOS = "RECEIVE_TTODOS";
export const CREATE_TTODO = "CREATE_TTODO";
export const RECEIVE_TTODO = "RECEIVE_TTODO";


export const requestTtodos = () => ({
  type: REQUEST_TTODOS
});

export const receiveTtodos = (ttodos) => {
  return {
    type: RECEIVE_TTODOS,
    ttodos
  };
};

export const createTtodo = (ttodo) => ({
  type: CREATE_TTODO,
  ttodo
});

export const receiveTtodo = (ttodo) => ({
  type: RECEIVE_TTODO,
  ttodo
});

window.createTtodo = createTtodo;
