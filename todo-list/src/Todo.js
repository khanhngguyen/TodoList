import React, { useState, useEffect, useRef } from 'react'

function Todo({todo, onEdit, onDelete}) {
    const [isEdit, setEdit] = useState(false);
    const editButtonRef = useRef(null);

    //autofocus on input when click on Edit buttton
    useEffect(() => {
        if (isEdit) {
            editButtonRef.current.focus()
        }
    }, [isEdit])

    let todoContent;
    if (isEdit) {
        todoContent = (
            <>
            <input
            value={todo.item}
            onChange={e => onEdit({...todo, item: e.target.value})}
            ref={editButtonRef}
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