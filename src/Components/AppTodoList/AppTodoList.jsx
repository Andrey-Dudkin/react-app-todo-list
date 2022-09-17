import React, { useState } from 'react'
import "./AppTodoList.css"
import AddTask from './AddTask/AddTask'
import {TaskList, statuses} from './TaskList/TaskList'

const AppTodoList = () => {
  const [tasks,setTasks] = useState([
    {
            textTask: "Изучить  HTML",
            id: Math.random() *1000,
            status: statuses.Open,
    },
    {
            textTask: "Изучить  CSS",
            id: Math.random() *1000,
            status: statuses.Open,
    },
    {
            textTask: "Изучить JS",
            id: Math.random() *1000,
            status: statuses.Open,
    },
    {
            textTask: "Изучить  REACT ",
            id: Math.random() *1000,
            status: statuses.Open,
    },
  ])
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