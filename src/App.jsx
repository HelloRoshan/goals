
import { useEffect, useState } from 'react'
import './styles.css'
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';
export default function App() {
  const [todos, setTodos] = useState(() => {
    const localVal = localStorage.getItem("ITEM")
    if(localVal == null) return []
    return JSON.parse(localVal)
  });

  useEffect(() => {
    localStorage.setItem("ITEM", JSON.stringify(todos))
  }, [todos])

  function handleSubmit(e) {
    e.preventDefault()
    setTodos((currentTodos) => {
      return [...currentTodos, {
        id: crypto.randomUUID(),
        title: newItem.trim(),
        completed: false
      }]
    });
    setNewItem('');
  }

  function addTodo(title, ) {
    setTodos((currentTodos) => {
        return [...currentTodos, {
          id: crypto.randomUUID(),
          title,
          completed: false
        }]
      });
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id == id) {
          return {...todo, completed}
        }
        return todo;
      } )
    })
  }
  
  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id != id);
    })
  }
  return (
    <>
      <NewTodoForm addTodo={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  )
}
