import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import AppTodoList from './Components/AppTodoList/AppTodoList';
import FormRegistration from './Components/FormRegistration/FormRegistration';
import LoginForm from './Components/LoginForm/LoginForm';

function App() {
  const userGuid = localStorage.getItem('userId')
  const token = localStorage.getItem('token')
  return (
    <div className="App">
      <div></div>
      <Router>
        <Routes>
              <Route path='/login' element={<LoginForm/>}/>
              <Route path='/registration' element={<FormRegistration/>} />
              <Route path='/tasks' element={<AppTodoList/>} />
              <Route path="*" element={(userGuid != null && token != null) ? <Navigate to="/tasks" replace /> : <Navigate to="/login"/>} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
