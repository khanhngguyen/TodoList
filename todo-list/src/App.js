import React, { useState, useEffect, useRef } from "react";
import TodoList from "./TodoList";

let nextId = 0;

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

 /* list = {
    id: ,
    item: '',
    complete: false
  } */

  //focus on input after page reload
  useEffect(() => {
    if (!input) {
      inputRef.current.focus();
    }
  }, [input])

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

    //clear inpupt field after submit
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

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type='text'
        placeholder="Add todo"
        value={input}
        onChange={e => setInput(e.target.value)}
        ref={inputRef}
      />
      <button onClick={() => addTodo(input)}o>Add</button>
      <TodoList todos={list} onEdit={handleEdit} onDelete={handleDeleteTodo} />

      {/* create separate TodoList & Todo components
      <ul>
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
