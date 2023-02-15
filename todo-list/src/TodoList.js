import React from 'react'
import Todo from './Todo'

function TodoList({todos, onEdit, onDelete}) {
  return (
    <ul>
        {todos.map(todo => <Todo key={todo.id} todo={todo} onEdit={onEdit} onDelete={onDelete}/>)}
    </ul>
  )
}

export default TodoList