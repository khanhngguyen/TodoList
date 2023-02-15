import React, { useState } from 'react'

function Todo({todo, onEdit, onDelete}) {
    const [isEdit, setEdit] = useState(false);
    let todoContent;
    if (isEdit) {
        todoContent = (
            <>
            <input
            value={todo.item}
            onChange={e => onEdit({...todo, item: e.target.value})}
            />
            <button onClick={() => setEdit(false)}>Save</button>
            </>
        )
    } else {
        todoContent = (
            <>
            {todo.item}
            <button onClick={() => setEdit(true)}>Edit</button>
            </>
        )
    }

    return (
        <>
        <li>
            <input type="checkbox" complete={todo.complete} />
            {todoContent}
            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </li>
        </>
    )
}

export default Todo