let a = 
[
    { id: 10, quantity: 10 },
    { id: 11, quantity: 10 },
    { id: 12, quantity: 10 },
    { id: 13, quantity: 10 },
    { id: 14, quantity: 10 },
    { id: 15, quantity: 10 },
    { id: 16, quantity: 10 },
  ];

a = a.filter((todo) => todo.id !== 13 )
console.log(a)

