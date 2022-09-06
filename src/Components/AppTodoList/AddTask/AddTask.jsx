import React from 'react'
import { useState } from 'react'

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
              className="btn_add_task"
            >+</button>
        </form>
    </div>
  )
}

export default AddTask