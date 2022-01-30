const INITIAL_STATE = {
  todos: [
    { id: 0, quantity: 0 },
  ] };

const VALOR = -1;
const product = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ADD': {
    const index = state.todos.findIndex((todo) => todo.id === action.obj.id);
    if (index === VALOR) return { ...state, todos: [...state.todos, action.obj] };
    const newArray = [...state.todos];
    newArray[index] = { id: action.obj.id, quantity: action.obj.quantity };
    return { ...state, todos: newArray }; }
  default:
    return state;
  }
};

export default product;
