export function getTodos() {
  return fetch("http://localhost:3000/todos")
    .then(r => r.json())
}