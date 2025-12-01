"use client"
import { useState } from "react"

function Register() {
    const [user, setUser] = useState({
        firstName : "",
        lastName : "",
        email : "",
        mobNo:""
    })
    const handleInput = (event)=>{
        setUser({ ...user, [event.target.name] : event.target.value});
    }
  return (
    <>
        <form action="">
            <input 
                type="text" 
                placeholder="First Name" 
                name ='firstName' 
                onClick={handleInput}
            />
            <input type="text" placeholder="Last Name" name ='lastName'/>
        </form>
    </>
  )
}

export default Register