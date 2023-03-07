import React, { useState, useEffect, useRef } from "react";
import TodoList from "./TodoList";
import Popup from './Popup'

let nextId = 0;
const LOCAL_STORAGE_KEY = 'TodoApp-list';

function App() {
  const [list, setList] = useState((() => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  }));
  const [input, setInput] = useState('');
  const [popup, setPopup] = useState({show: false, id: null});
  const inputRef = useRef(null);

 /* list = [
  {
    id: ,
    item: '',
    complete: false
  }
 ] */

  //focus on input after page reload
  useEffect(() => {
    if (!input) {
      inputRef.current.focus();
    }
  }, [input])

  //save todo list into localStorage, so it won't dissappear after page reloads
  //doesn't work -> read from localStorage directly when setting the initial todoList state value
 /*  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedList) setList(storedList)
  }, []) */

//save todolistt into localStorage
  useEffect(() => {
    if (list.length > 0) {localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list))}
  }, [list])

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

  const handleKeydown = (e) => {
    if (e.key === 'Enter') {
      return addTodo(input)
    }
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

//show confirmation popup box
  const handleDeleteTodo = (id) => {
    setPopup({
      show: true,
      id: id,
    })
  }

  const handleDeleteTrue = () => {
    if (popup.show && popup.id) {
      const newList = list.filter(todo => todo.id !== popup.id);
      setList(newList);
    }
    //close & reset popup
    setPopup({
      show: false,
      id: null,
    })
  }

  const handleDeleteFalse = () => {
    setPopup({
      show: false,
      id: null,
    })
  }

 /*  const handleDeleteTodo = (id) => {
    const newList = list.filter(todo => todo.id !== id);
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
        onKeyDown={e => handleKeydown(e)}
        ref={inputRef}
      />
      <button onClick={() => addTodo(input)}>Add</button>
      <TodoList todos={list} onEdit={handleEdit} onDelete={handleDeleteTodo} />
      {popup.show && (
        <Popup
        handleDeleteTrue={handleDeleteTrue}
        handleDeleteFalse={handleDeleteFalse}
        />
      )}

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
