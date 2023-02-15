import React, { useState } from "react";
import TodoList from "./TodoList";

let nextId = 0;

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');

 /* list = {
    id: ,
    item: '',
    complete: false
  } */


  //add new Todo to the list
  const addTodo = (todo) => {
    //prevent empty input
    if (input === '') return
    const newTodo = {
      id: nextId++,
      item: todo,
      complete: false
    }
    setList([...list, newTodo]);

    //cleart inpupt field after submit
    setInput('');
  }

  const handleEdit = (nextTodo) => {
    setList(list.map(todo => {
      if (todo.id === nextTodo.id) {
        return nextTodo;
      } else {
        return todo;
      }
    }))
  }

  const handleDeleteTodo = (id) => {
    const newList = list.filter(todo => todo.id !== id);
    setList(newList);
  }

  /* const deleteTodo = (id) => {
    const newList = list.filter(todo => id !== todo.id);
    setList(newList);
  } */

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type='text'
        placeholder="Add todo"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button onClick={() => addTodo(input)}>Add</button>
      <TodoList todos={list} onEdit={handleEdit} onDelete={handleDeleteTodo} />
      {/* <ul>
        {list.map(todo => {
          return (
          <li key={todo.id}>
            {todo.todo} {''}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
          )
        })}
      </ul> */}
    </div>
  );
}

export default App;
