export type TodoAction =
{ type: 'ADD_TODO', id: number, text: string } |
{ type: 'TOGGLE_TODO', id: number } |
{ type: 'REMOVE_TODO', id: number }

let nextTodoId = 0

export const addTodo = (text: string) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const toggleTodo = (id: number) => ({
  type: 'TOGGLE_TODO',
  id
})

export const removeTodo = (id: number) => ({
  type: 'REMOVE_TODO',
  id
})
