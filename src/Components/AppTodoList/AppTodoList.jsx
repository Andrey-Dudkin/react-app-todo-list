import React, { useState } from 'react'
import "./AppTodoList.css"
import AddTask from './AddTask/AddTask'
import {TaskList, statuses} from './TaskList/TaskList'

const AppTodoList = () => {
  const [tasks,setTasks] = useState([])
 
  return (
    <div className='app_todo_list'>
        <div className="app_todo_list_container">
          <h1 className="title">Список моих дел</h1>
            <AddTask
               tasks={tasks}
               setTasks={setTasks}
            />
            <TaskList 
              tasks={tasks}
              setTasks={setTasks}
            />
        </div>
    </div>
  )
}

export default AppTodoList