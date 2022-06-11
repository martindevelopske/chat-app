import React, { useState } from 'react'
import { FormContainer, StyledForm } from '../styles/Form.styled'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'
import { registerRoute } from '../utils/apiRoutes'
import { useNavigate } from 'react-router-dom'

function Register() {
    const navigate=useNavigate()
    const [values,setValues]=useState({
        email:"",
        username:"",
        password:"",
        confirmPassword:""

    })

    const handleSubmit=async(e)=>{
        e.preventDefault()
        if(handleValidation()){
            const {email,password,username}=values
            const {data}= await axios.post(registerRoute,{
                email,
                username,  
                password
            })
            if(data){
                console.log(data)
                if(data.status===false){
                    toast.error(data.msg,toastOptions)
                }else{
                    localStorage.setItem('chat-app user',JSON.stringify(data.user))
                    navigate("/chat")
                }
            }

    }}

    const handleChange=(e)=>{
        setValues({...values,[e.target.name]:e.target.value})
    }
    const toastOptions={
        position:"top-right",
        autoClose:3000,
        pauseOnHover:true,
        draggable:true,
        theme:"light"
    }
    const handleValidation=()=>{
        const {email,password,username,confirmPassword}=values
       //console.log(values);
       if(email=== ""){
           toast.error("email is required",toastOptions)
           return false
       } else if(username.length<3){
           toast.error("username should be more than 3 characters",toastOptions)
           return false
       }else if(password.length<6){
           toast.error("password length should be greater than 6",toastOptions)
           return false
       }
       else if (password!==confirmPassword){
           toast.error("passwords do not match", toastOptions)
           return false
       }
       return true
    }
  return (
    <FormContainer>
        <StyledForm onSubmit={handleSubmit}>
            <h1>messenger</h1>
            <div>
            <span>
                <label htmlFor='email'>E-mail</label>
                <input type="email" name="email" placeholder="email" onChange={handleChange}></input>
            </span>
            </div>
            <div>
            <span>
                <label htmlFor='username'>Username</label>
                <input type="text" name="username" placeholder="username" onChange={handleChange}></input>
            </span>
            </div>
            
            <div>
            <span>
                <label htmlFor='password'>Password</label>
                <input type="password" name="password" placeholder="password" onChange={handleChange}></input>
            </span>
            </div>
            <div>
            <span>
                <label htmlFor='confirmPassword'>confirm Password</label>
                <input type="password" name="confirmPassword" placeholder="confirm password" onChange={handleChange}></input>
            </span>
            </div>
           
            <button type='submit'>register</button>
        </StyledForm>
        <ToastContainer />
    </FormContainer>
  )
}

export default Register