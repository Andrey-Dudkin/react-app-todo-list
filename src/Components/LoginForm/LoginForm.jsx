import React from 'react'
import "./LoginForm.css"
import {set, useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as you from "yup"
import axios from 'axios'
import { AUTH_SERVICE } from '../../Configs/baseUrls'
import {Link, useNavigate} from "react-router-dom"
import { useState } from 'react'



const validation = you.object().shape({
    email: you.string().email().required("Поле обязательно к заполенению"),
})

const LoginForm = () => {
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(validation),
    });

    const submit = (loginData) => {
        axios.post(AUTH_SERVICE + '/api/userauthentication/login', loginData)
            .then(response => {
                localStorage.setItem('userId', response.data.user.id);
                localStorage.setItem('token', response.data.token);
                navigate("/tasks");
            })
            .catch(err => {
                if ((err.response.status === 500) || err.response.status === 0){
                    setError("Что то пошло не так, попробуйте еще раз")
                }
                else if (err.response.status === 404){
                    setError("Не верный логин или пароль ")
                }
                else {
                    setError("Что то пошло не так, попробуйте еще раз")
                }
            })
        }

  return (
        <div className='login_form'>
           <div className="form-container">
                <h1 className="title_form">
                    Форма Входа
                </h1>
                {error != null && <p className='error'>{error}</p>}
                <form className="register-form" onSubmit={handleSubmit(submit)}>
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
                        {/* {errors.password&&"Пароль должен быть не менее 8 и не больше 16 символов"} */}
                    </div>
                    
                    <button className="login-button" type="submit"> Войти </button>
                </form>
                <Link to="/registration" className="link_form_register">Зарегистрироваться</Link>
            </div>
        </div>
  )
}

export default LoginForm