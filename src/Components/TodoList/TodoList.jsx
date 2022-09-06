import React, { useState } from 'react'
import "./TodoList.css"
import Form from '../TodoList/Form/Form'
import Tasks from '../TodoList/Tasks/Tasks'

const TodoList = () => {
    const [inputText,setInputText] = useState("")
    const [tasks,setTasks] = useState([])
  return (
    <div className="todo_list_app">
        <div className='todoList'>
            <h1 className="title">Список моих дел!</h1>
            <Form
                inputText={inputText}
                setInputText={setInputText}
                tasks={tasks}
                setTasks={setTasks}
            />
            <ul className="tasks_list">
                {
                  tasks.map(task =>(
                    <Tasks
                      task={task}
                      tasks={tasks}
                      setTasks={setTasks}
                      key={task.id} 
                      textTask={task.text}
                    />
                  ))
                }    
            </ul>
        </div>
    </div>
  )
}

export default TodoList