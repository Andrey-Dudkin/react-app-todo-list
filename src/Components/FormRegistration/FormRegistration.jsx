import React from 'react'
import "../AppTodoList/AppTodoList.css"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as you from "yup"

const validation = you.object().shape({
    userName: you.string().required("Поле обязательно к заполенению"),
    email: you.string().email().required("Поле обязательно к заполенению"),
    password: you.string().min(8).max(16).required("Поле обязательно к заполенению"),
})

const FormRegistration = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(validation),
    });

    const submit = (data) => {
        console.log(data)
    }
    return (
        <div className='FormaRegistration'>
            <div className="form-container">
                <h1 className="title_form">
                    Форма регистрации
                </h1>
                <form className="register-form" onSubmit={handleSubmit(submit)}>
                    <input 
                        type="text" 
                        name="userName" 
                        placeholder="Введите ваше имя" 
                        id="user-name" 
                        className="form-field" 
                        {...register("userName")}
                    />
                    <div className='error'>
                        {errors.userName?.message}
                    </div>

                    <input type="text"
                        name="email"
                        placeholder="Введите ваш email" 
                        id="email"
                        className="form-field"
                        {...register("email")}
                    />
                    <div className='error'>
                        {errors.email? "Почта должна быть например user@gmail.com": null}
                    </div>

                    <input type="password"
                        name="password"
                        placeholder="Введите ваш пароль" 
                        id="password"
                        className="form-field"
                        {...register("password")}
                    />
                    <div className='error'>
                        {errors.password&&"Пароль должен быть не менее 8 и не больше 16 символов"}
                    </div>
                    
                    <button className="form-field" type="submit"> Зарегистрироваться </button>
                </form>
            </div>
        </div>
    )
}

export default FormRegistration