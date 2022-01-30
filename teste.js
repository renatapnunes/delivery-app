const a = {
  todos: [
    { id: 10, quantity: 10 },
    { id: 11, quantity: 10 },
  ] };

const index = a.todos.findIndex((todo) => todo.id === 13 )
console.log(index, Boolean(index))
if ( !index ) console.log('aqui')
