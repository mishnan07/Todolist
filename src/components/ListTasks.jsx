import React, { useState } from 'react'

const ListTasks = ({task,index,removeTask}) => {
    
  return (

    <h2 className='list-name'>
        {task.title}
        <button onClick={()=>{removeTask(index)}} className='delete-btn'>Delete</button>
        <input  type="checkbox" className='delete-btn1'/>

    </h2>

  )
}

export default ListTasks