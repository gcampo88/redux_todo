export const allTodos = (state) => {
  return Object.keys(state.ttodos).map((id) => state.ttodos[id]);
};
