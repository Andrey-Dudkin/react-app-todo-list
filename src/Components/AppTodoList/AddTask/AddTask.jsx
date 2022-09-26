import React from 'react'
import { useState } from 'react'
import "./AddTask.css"
// import iconPlus from "../icons/icon-plus.png"
// import {statuses} from '../TaskList/TaskList'
import {TASK_SERVICE} from "../../../Configs/baseUrls"
import axios from 'axios'

const AddTask = ({tasks,setTasks}) => {
  const [textInput,setTextInput] = useState("")

  const addTask = (e) => {
    if(textInput){
      axios.post(TASK_SERVICE + "/tasks", 
      {
        "id": null,
        "userGuid": localStorage.getItem("userId"),
        "taskCategoryGuid": null,
        "taskTitle": textInput,
        "taskDescription": null,
        "toDoStatus": 0
      }, 
      {
        headers: {"Authorization": "Bearer " + localStorage.getItem("token")}
      })
      .then(response => {
        setTasks(
          [
            ...tasks, response.data
          ]
        )
      })
    }
   
    e.preventDefault()
  }

  return (
    <div className='add_task'>
       <form className="forma">
            <input
                value={textInput}
                onChange={(e)=> setTextInput(e.target.value)}
                type="text" 
                placeholder="Ведите текст задачи"
                className="input_text" 
            />
            <button
              onClick={addTask} 
              className="btn_add_task">
              Добавить
            </button>
           
        </form>
    </div>
  )
}

export default AddTask