import React from 'react'
import Todo from './Todo'
import {
  Paper, TableContainer, Table,
  TableRow, TableBody
} from '@mui/material/';


function TodoList({todos, onEdit, onDelete}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: '100%' }} aria-label="simple table">
        <TableBody>
          <ul>
            <TableRow>
              {todos.map(todo => <Todo key={todo.id} todo={todo} onEdit={onEdit} onDelete={onDelete}/>)}
          </TableRow>
          </ul>
        </TableBody>
      </Table>
    </TableContainer>
/*     <ul>
        {todos.map(todo => <Todo key={todo.id} todo={todo} onEdit={onEdit} onDelete={onDelete}/>)}
    </ul> */
  )
}

export default TodoList