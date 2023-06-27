import React, { useEffect, useState } from 'react'
import "./css/todo.css"
import AddTasks from './AddTasks'
import ListTasks from './ListTasks'

const Todo = () => {
  const [tasks,setTasks] = useState([]);

  useEffect(()=>{
    document.title = `you have ${tasks.length} pending tasks`
  });

  const addTask = (title)=>{
        const newTask = [...tasks,{title}]
        setTasks(newTask);
  }

  const removeTask = (index)=>{
        const newTask = [...tasks]
        newTask.splice(index,1)
        setTasks(newTask)
  }

  const clearAllTasks = () => {
    setTasks([]);
  };
    
  return (
    <>
    <div className='todo-container'>
      <div className='header'>TODO APP</div>
      <div className='add-task'>
           <AddTasks addTask={addTask}/>
      </div>

      <div className='tasks'>
        
        {tasks.map((task,index)=>(
           <ListTasks key={index} task={task} removeTask={removeTask}  index={index}/>
          
        ))}
          
      </div>
      <button className='delete-btn1' onClick={clearAllTasks}>Clear All</button>

    </div>
    </>
  )
}

export default Todo