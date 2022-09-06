import React from 'react'
import "../../TodoList/TodoList.css"

const Tasks = ({textTask,tasks,setTasks,task}) => {
  const deleteTask = () => {
    
    setTasks(
      tasks.filter(elementTask => elementTask.id !== task.id)
    )
  }
  const editTask = () => {
    
  }
  return (
    <div className="tasks">
       <li className="tasks_item">{textTask}</li>
        <div className="buttons">
          <button onClick={editTask} className="edit">/</button>
          <button onClick={deleteTask} className="delete">X</button>
        </div>
       
    </div>
  )
}

export default Tasks