import React from 'react'
import { useState } from 'react'
import iconPlus from "../icons/icon-plus.png"
import iconEdit from "../icons/icon-edit.png"
import iconDelete from "../icons/icon-delete.png"
import iconLockClose from "../icons/icon-lock-close.png"
import iconLockOpen from "../icons/icon-lock-open.png"

const statuses = {All: 0, Open: 1, Closed: 2}

const TaskList = ({tasks,setTasks}) => {
    // console.log(tasks)
    const [edit,setEdit] = useState(null)
    const [value,setValue] = useState("")
    const [status, setStatus] = useState(statuses.All)

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
    const statusTask = (id) => {
       let newTasks = [...tasks].filter(task =>{
            if(task.id === id){
                if(task.status === statuses.Open){
                    task.status = statuses.Closed;
                }
                if(task.status === status.Closed){
                    task.status = statuses.Open;
                }
            }
            return task
       })
       setTasks(newTasks) 
    }
  return (
    <div className='task_list'>
        <button
            className='button'
             onClick={() => setStatus(statuses.All)}>Все</button>
        <button
            className='button' 
            onClick={() => setStatus(statuses.Open)}>Открытые</button>
        <button
            className='button' 
            onClick={() => setStatus(statuses.Closed)}>Закрытые</button>
        <ol className="list_tasks">
            {
                tasks.filter(task => task.status===status || status===statuses.All).map(task => (
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
                            : <li className={task.status === statuses.Closed ? `close` : `item_task`}> {task.textTask}</li>
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
                                
                                <button onClick={() => statusTask(task.id)}>
                                    {
                                        task.status === statuses.Closed ? <img className='icon_lock_close' src={iconLockClose} alt="button icon lock clos" /> 
                                        :  <img className='icon_lock_open' src={iconLockOpen} alt="button icon lock open" />
                                    }
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

export { TaskList, statuses }