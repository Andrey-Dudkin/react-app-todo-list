import React, { useId, useState } from 'react'
import "./AppTodoList.css"
import AddTask from './AddTask/AddTask'
import {TaskList, statuses} from './TaskList/TaskList'
import { useEffect } from 'react'
import axios from 'axios'
import { TASK_SERVICE } from '../../Configs/baseUrls'
import { Link ,useNavigate} from 'react-router-dom'


const AppTodoList = () => {
  const [tasks,setTasks] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
      const userGuid = localStorage.getItem('userId')
      const token = localStorage.getItem('token')
      if(userGuid == null || token == null){
        navigate('/login');
      }
      axios.post(TASK_SERVICE + '/Tasks/by-user/' + userGuid, 
      {
      }, 
      {
        headers:{'Authorization': 'Bearer ' + token}
      })
      .then(response => {
            setTasks(response.data)
      })
      .catch(error => {
        if (error.response.status === 401){
          navigate('/login')
        }
      })
    }, [])
  
  const clearLocalStorage = () => {
      localStorage.removeItem("token")
      localStorage.removeItem("userId")
  }
 
  return (
    <div className='app_todo_list'>
        <div className="app_todo_list_container">
          <Link to="/login" className='logout_button' onClick={clearLocalStorage}>Выйти</Link>
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