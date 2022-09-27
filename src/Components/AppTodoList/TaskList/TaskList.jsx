import React from 'react'
import { useState } from 'react'
import "./TaskList.css"
// import iconPlus from "../icons/icon-plus.png"
// import iconEdit from "../icons/icon-edit.png"
// import iconDelete from "../icons/icon-delete.png"
// import iconLockClose from "../icons/icon-lock-close.png"
// import iconLockOpen from "../icons/icon-lock-open.png"
import axios from 'axios'
import {TASK_SERVICE} from "../../../Configs/baseUrls"


const statuses = {All: 0, Open: 1, Closed: 2}

const TaskList = ({tasks,setTasks}) => {
    // console.log(tasks)
    const [edit,setEdit] = useState(null)
    const [value,setValue] = useState("")
    const [status, setStatus] = useState(statuses.All)

    const deleteTask = (id) => {
  
        axios.delete(
            TASK_SERVICE + "/tasks/" + id,
           { headers: {"Authorization": "Bearer " + localStorage.getItem("token")}},
        )
        .then(response => {
            // console.log(response)
            let nevTasks = [...tasks].filter(task => task.id!==id)
            setTasks(nevTasks)
        })
    }
    const editTask = (id,taskTitle) => {
        setEdit(id)
        setValue(taskTitle)
    }
    const saveTask = (id) => {
       
        if(value){
            axios.post(
                TASK_SERVICE + "/tasks",
                {
                    "id": id,
                    "userGuid": localStorage.getItem("userId"),
                    "taskCategoryGuid": null,
                    "taskTitle": value,
                    "taskDescription": null,
                    "toDoStatus": 0
                  }, 
                {headers:{"Authorization": "Bearer " + localStorage.getItem("token")}}
            )
            .then(response => {
                    let nevTodo = [...tasks].map(elementTask => {
                        if(elementTask.id === id){
                            elementTask.taskTitle = value
                        }
                        return elementTask
                })
                setTasks(nevTodo)
                setEdit(null)
            })
                
        }
    }
    // const statusTask = (id) => {
    //    let newTasks = [...tasks].filter(task =>{
    //         if(task.id === id){
    //             if(task.status === statuses.Open){
    //                 task.status = statuses.Closed;
    //             }
    //             if(task.status === status.Closed){
    //                 task.status = statuses.Open;
    //             }
    //         }
    //         return task
    //    })
    //    setTasks(newTasks) 
    // }
  return (
    <div className='task_list'>
        <div className="filter_buttons">
            <button
                className='button_filter'
                onClick={() => setStatus(statuses.All)}>Все</button>
            <button
                className='button_filter' 
                onClick={() => setStatus(statuses.Open)}>Открытые</button>
            <button
                className='button_filter' 
                onClick={() => setStatus(statuses.Closed)}>Закрытые</button>
        </div>
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
                            : <li className={task.status === statuses.Closed ? `close` : `item_task`}> {task.taskTitle}</li>
                        }
                        {
                            edit === task.id ?
                            <button 
                                className='btn_add_task'
                                onClick={() => saveTask(task.id)}>
                                {/* <img src={iconPlus} alt="button icon plus" className="icon_plus" /> */}
                                Добавить
                            </button>
                            :
                            <div className="buttons">
                                <button className='edit_task' onClick={() => editTask(task.id, task.taskTitle)}>
                                    Редактировать
                                    {/* <img className='icon_edit' src={iconEdit} alt="button icon edit" /> */}
                                </button>
                                
                                <button
                                    className='status_task'
                                    //  onClick={() => statusTask(task.id)}
                                     >
                                    {
                                        task.status === statuses.Closed ? 
                                            <p>Открыть</p>
                                        :   <p>Закрыть</p>
                                    }
                                </button>
                                <button className='delete_task' onClick={() => deleteTask(task.id)}>
                                    {/* <img className='icon_delete' src={iconDelete} alt="button icon delete" /> */}
                                    Удалить
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