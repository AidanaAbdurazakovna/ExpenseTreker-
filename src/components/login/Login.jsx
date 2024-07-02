import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../UI/button/Button'
import { Input } from '../UI/input/Input'

export const Login = ({onLogin}) => {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[isFormValid,setIsFormValid]=useState(false)



const handleEmailChange=(event)=>{
    const emailVelue=event.target.value
    setEmail(emailVelue)
    setIsFormValid(emailVelue.includes("@") && password.length>6)
}


const handlePasswordChange=(event)=>{
    const passwordVelue=event.target.value
    setPassword(passwordVelue)
    setIsFormValid(password.length>6 && email.includes("@"))
}




  return (
   <StyledForm onSubmit={(e)=>e.preventDefault} >
    <Input  type="email" placeholder="Введите электронную почту"
    value={email}
    onChange={handleEmailChange}/>
    <Input type="password"placeholder="Введите пароль" 
    value={password}
    onChange={handlePasswordChange}/>
    <Button type="submit" onClick={onLogin} disabled={!isFormValid}>Войти</Button>
   </StyledForm>
  )
}


const StyledForm=styled.form`
    width:500px;
    height:300px;
    display:flex;
    flex-direction:column;
    gap:20px;
    align-items:center;
    justify-content:center;
    background-color:aliceblue;
border-radius:12px;


    button{
width:340px;
    }
`
