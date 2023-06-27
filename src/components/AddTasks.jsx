import React, { useState } from 'react'





const AddTasks = ({addTask}) => {
    const [value,setValue] = useState('')

    const addItem = () => {
      if (value.trim() === '') {
        alert('Error: Task cannot be empty');
      } else {
        const trimmedValue = value.trim();
        addTask(value.trim());
        setValue('');
      }
    };

    
  return (
    <>
    <div className='input-container'>
     
        <input type='text' className='input' placeholder='Add a new Task' 
          value={value}
          onChange={(e)=>{setValue(e.target.value);}}/>
       
        <button type='submit' onClick={addItem} className='add-btn'>ADD</button>
       
    </div>
    </>
  )
}

export default AddTasks