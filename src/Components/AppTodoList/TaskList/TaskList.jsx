import React from 'react'
import { useState } from 'react'
import iconPlus from "../icons/icon-plus.png"
import iconEdit from "../icons/icon-edit.png"
import iconDelete from "../icons/icon-delete.png"


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
                                onClick={() => saveTask(task.id)}>
                                <img src={iconPlus} alt="button icon plus" className="icon_plus" />
                            </button>
                            :
                            <div className="buttons">
                                <button onClick={() => editTask(task.id, task.textTask)}>
                                    <img className='icon_edit' src={iconEdit} alt="button icon edit" />
                                </button>
                                <button onClick={() => deleteTask(task.id)}>
                                    <img className='icon_delete' src={iconDelete} alt="button icon delete" />
                                </button>
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