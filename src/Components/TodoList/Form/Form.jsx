import React from 'react'
import "../../TodoList/TodoList.css"
const Form = ({inputText,setInputText,tasks,setTasks}) => {
    const inputValue = (e) => {
        setInputText(e.target.value)
    }
    const addTask = (e) => {
        e.preventDefault()
        setTasks(
            [
                ...tasks, {
                    text: inputText,
                    id: Math.random()*2000,
                }
            ]
        )
        setInputText("")
    }
  return (
    <div className="form">
        <form className="forma">
            <input
                value={inputText} 
                type="text" 
                placeholder="Ведите текст задачи"
                className="input_text" 
                onChange={inputValue}
            />
            <button className="btn_add_task" onClick={addTask}>+</button>
        </form>
    </div>
  )
}

export default Form