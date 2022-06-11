import React, { useState } from 'react'
import { FormContainer, StyledForm } from '../styles/Form.styled'

function Login() {
    const [values,setValues]=useState({
        email:"",
        username:"",
        password:""
    }
       
    )
    const handleSubmit=(e)=>{
        e.preventDefault()

    }
    const handleChange=(e)=>{
        setValues({...values,[e.target.name]:e.target.value})
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
           
            <button type='submit'>register</button>
        </StyledForm>
    </FormContainer>
  )
}

export default Login