import React from 'react'

function Popup({handleDeleteTrue, handleDeleteFalse}) {
  return (
    <div>
        <div>
            <p>Are you sure you want to delete?</p>
            <button onClick={() => handleDeleteTrue()}>Confirm</button>
            <button onClick={() => handleDeleteFalse()}>Cancel</button>
        </div>
    </div>
  )
}

export default Popup