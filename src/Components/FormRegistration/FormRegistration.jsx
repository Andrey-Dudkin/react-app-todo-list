import React from 'react'
import "../AppTodoList/AppTodoList.css"
const FormRegistration = () => {
  return (
    <div className='FormaRegistration'>
        <div class="form-container">
            <h1 className="title_form">
                Форма регистрации
            </h1>
            <form class="register-form">
                <input
                id="first-name"
                class="form-field"
                type="text"
                placeholder="Введите ваше имя"
                name="firstName"
                />
                <input
                id="email"
                class="form-field"
                type="text"
                placeholder="Введите ваш email"
                name="email"
                />
                <input
                id="password"
                class="form-field"
                type="text"
                placeholder="Введите ваш пароль"
                name="password"
                />
                <button class="form-field" type="submit">
                    Зарегистрироваться
                </button>
            </form>
        </div>
    </div>
  )
}

export default FormRegistration