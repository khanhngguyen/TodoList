import React, { useState } from 'react'
import { TextField, Button, Checkbox } from '@mui/material/';


function Todo({todo, onEdit, onDelete}) {
    const [isEdit, setEdit] = useState(false);

    //autofocus on input when click on Edit buttton
    //use autoFocus instead
  /*   useEffect(() => {
        if (isEdit) {
            editButtonRef.current.focus();
        }
    }, [isEdit]) */

    const handleKeydown = (e) => {
        if (e.key === 'Enter') {
            return setEdit(false)
        }
    }

    let todoContent;
    if (isEdit) {
        todoContent = (
            <>
            <TextField
            variant='outlined'
            value={todo.item}
            onChange={e => onEdit({...todo, item: e.target.value})}
            onKeyDown={e => handleKeydown(e)}
            autoFocus
            />
            <Button
            variant='outlined'
            size='small'
            onClick={() => setEdit(false)}>Save</Button>
            </>
        )
    } else {
        todoContent = (
            <>
            {todo.item}
            <Button
            variant='outlined'
            size='small'
            onClick={() => setEdit(true)}>Edit</Button>
            </>
        )
    }

    return (
        <>
        <li>
            <Checkbox complete={todo.complete} />
            {todoContent}
            <Button
            variant='outlined'
            size='small'
            onClick={() => onDelete(todo.id)}>Delete</Button>
        </li>
        </>
    )
}

export default Todo