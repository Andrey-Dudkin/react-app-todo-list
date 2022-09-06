import React from 'react'
import { useState } from 'react'

const TaskList = ({tasks,setTasks}) => {
    const [edit,setEdit] = useState(null)
    const [value,setValue] = useState("")
    const deleteTask = (id) => {
        let nevTasks = [...tasks].filter(task => task.id!==id)
        setTasks(nevTasks)
    }
    const editTask = (id,textTask) => {
        setEdit(id)
        setValue(textTask)
    }
    const saveTask = (id) => {
            let nevTodo = [...tasks].map(elementTask => {
                if(elementTask.id === id){
                    elementTask.textTask = value
                }
                return elementTask
        })
        setTasks(nevTodo)
        setEdit(null)
    }
  return (
    <div className='task_list'>
        <ol className="list_tasks">
            {
                tasks.map(task => (
                    <div className='content_task' key={task.id}>
                        {
                            edit === task.id ?
                            <div>
                                <input
                                    onChange={(e) => setValue(e.target.value)}
                                    value={value} 
                                    className='input_text' 
                                    type="text" 
                                    placeholder="Ведите текст задачи"
                                />
                            </div>
                            : <li className="item_task"> {task.textTask}</li>
                        }
                        {
                            edit === task.id ?
                            <button
                                onClick={() => saveTask(task.id)}
                                className="btn_add_task">
                            +</button>
                            :
                            <div className="buttons">
                                <button onClick={() => editTask(task.id, task.textTask)} className='delete'>/</button>
                                <button onClick={() => deleteTask(task.id)} className='edit'>Х</button>
                            </div>
                        }
                       
                    </div>
                ))
            }
        </ol>
    </div>
  )
}

export default TaskList