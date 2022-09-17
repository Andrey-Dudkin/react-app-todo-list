import React from 'react'
import { useState } from 'react'
import iconPlus from "../icons/icon-plus.png"
import {statuses} from '../TaskList/TaskList'

const AddTask = ({tasks,setTasks}) => {
  const [textInput,setTextInput] = useState("")
  const addTask = (e) => {
    e.preventDefault()
   if (textInput){
      setTasks(
        [
          ...tasks,{
            textTask: textInput,
            id: Math.random() *1000,
            status: statuses.Open,
          }
        ]
      )
      setTextInput("")
    }
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
              <img src={iconPlus} alt="button icon plus" className="icon_plus" />
            </button>
           
        </form>
    </div>
  )
}

export default AddTask