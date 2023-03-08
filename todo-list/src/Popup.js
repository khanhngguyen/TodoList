import React from 'react'
import { Button } from '@mui/material/';


function Popup({handleDeleteTrue, handleDeleteFalse}) {
  return (
    <div>
      <p>Click Confirm to delete. Click cancel to cancel</p>
      <Button
      variant='contained'
      onClick={() => handleDeleteTrue()}>Confirm</Button>
      <Button onClick={() => handleDeleteFalse()}>Cancel</Button>
    </div>
  )
}

export default Popup