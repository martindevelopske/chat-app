import React, { useEffect, useState } from 'react'
import { FormContainer, StyledForm } from '../styles/Form.styled'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from "axios"
import { loginRoute } from '../utils/apiRoutes'
import { useNavigate } from 'react-router-dom'
function Login() {
    const navigate=useNavigate()
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
    useEffect(()=>{
        if(localStorage.getItem("chat-app user")){
            navigate("/chat")
        }
    },[])
    const handleValidation=()=>{
        
        const {email,password}=values
        if(email===''){
            toast.error("please enter your email",toastOptions)
            return false
        }
        if(password.length<6){
            toast.error("password should be greater than 6",toastOptions)
            return false
        }
        return true

    }

    const [values,setValues]=useState({
        email:"",
        password:""
    }
       
    )
    const handleSubmit=async(e)=>{
        e.preventDefault()
       if(handleValidation()){
           const {email,password}=values
           const {data}= await axios.post(loginRoute,{
               email,
               password
           })
           if(data){
            if(data.status===false){
                toast.error(data.msg,toastOptions)
            }
            if(data.status===true){
                localStorage.setItem("chat-app user",JSON.stringify(data.user))
            }
            navigate("/chat")
            
        }
       }
       

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
                <label htmlFor='password'>Password</label>
                <input type="password" name="password" placeholder="password" onChange={handleChange}></input>
            </span>
            </div>
           
            <button type='submit'>register</button>
        </StyledForm>
        <ToastContainer />
    </FormContainer>
  )
}

export default Login