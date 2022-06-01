import React from 'react'
import { FormContainer, StyledForm } from '../styles/Form.styled'

function Login() {
    const handleSubmit=(e)=>{
        e.preventDefault()
        
    }
  return (
    <FormContainer>
        <StyledForm onSubmit={handleSubmit}>
            <h1>messenger</h1>
            <div>
            <span>
                <label htmlFor='email'></label>
                <input type="email" name="email" placeholder="email"></input>
            </span>
            </div>
            <div>
            <span>
                <label htmlFor='username'></label>
                <input type="text" name="username" placeholder="username"></input>
            </span>
            </div>
            
            <div>
            <span>
                <label htmlFor='password'></label>
                <input type="password" name="password" placeholder="password"></input>
            </span>
            </div>
           
            <button type='submit'>register</button>
        </StyledForm>
    </FormContainer>
  )
}

export default Login