import React, { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');

  //add new Todo to the list
  const addTodo = (todo) => {
    const newTodo = {
      id: todo,
      todo: todo
    }
    setList([...list, newTodo]);

    //cleart inpupt field after submit
    setInput('');
  }

  const deleteTodo = (id) => {
    const newList = list.filter(todo => id !== todo.id);
    setList(newList);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type='text'
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button onClick={() => addTodo(input)}>Add</button>
      <ul>
        {list.map(todo => {
          return (
          <li key={todo.id}>
            {todo.todo} {''}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
