import { useRef } from "react"
import TodoItem from "./TodoItem"


export default function TodoList({ todos, toggleTodo, deleteTodo }) {
  const containerRef = useRef(null)
    return (
        <div className="h-full" ref={containerRef}>
        {
          todos.map(todo => {
            return (
                <TodoItem containerRef={containerRef}  {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
            )
          })
        }
      </div>
    )
}