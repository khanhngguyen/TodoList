import React, { useState } from 'react'
import { TextField, Button, Checkbox } from '@mui/material/';
import './App.css'


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
            size='small'
            value={todo.item}
            onChange={e => onEdit({...todo, item: e.target.value})}
            onKeyDown={e => handleKeydown(e)}
            autoFocus
            />
            {/* <Button
            variant='outlined'
            size='small'
            sx={{ 'margin-left': '8px' }}
            onClick={() => setEdit(false)}>Save</Button> */}
            </>
        )
    } else {
        todoContent = (
            <>
            {todo.item}
            {/* <Button
            variant='outlined'
            size='small'
            sx={{ 'margin-left': '8px' }}
            onClick={() => setEdit(true)}>Edit</Button> */}
            </>
        )
    }

    return (
        <>
        <li className='todo'>
            <Checkbox complete={todo.complete} />
            {todoContent}
            {isEdit && (
                <Button
                variant='outlined'
                size='small'
                sx={{ 'margin-left': '8px' }}
                onClick={() => setEdit(false)}>Save</Button>
            )}
            <Button
            variant='outlined'
            size='small'
            sx={{ 'margin-left': '8px' }}
            onClick={() => setEdit(true)}>Edit</Button>

            <Button
            variant='outlined'
            size='small'
            sx={{ 'margin-left': '8px' }}
            onClick={() => onDelete(todo.id)}>Delete</Button>
        </li>
        </>
    )
}

export default Todo