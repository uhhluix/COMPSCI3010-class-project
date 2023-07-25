import React from "react";
import { useState } from "react";
import './login.css'

const Login =()=>{
  //make object usestate with username and password empty
const [user, setUser] = useState({username: "", password: "", loggedin: false});
//whenever a change is made in the form, it will update the state of the user with its own name and value with is specified in the form
//using name = "name in state" and the value is what is typed in 
const onChangeUser = (e) => {
    setUser({...user,[e.target.name] : e.target.value});
    }
//on submit it loggs the user and prevents the default submit function
const handleSubmit = (e) =>{
    e.preventDefault();
    setUser({...setUser, loggedin: true})
    console.log(user);
  }

    return(
        <div>
        <form onSubmit={handleSubmit}>
    <div className="container">
        <h1>Log in</h1>
        <p>Please fill in this form to Log in.</p>
        <hr/>
        
    
        <label htmlFor="username"><b>Username</b></label>
        <input type="text" name = "username" onChange={onChangeUser} placeholder="Enter Username"  id="username" required/>

        <label htmlFor="psw"><b>Password</b></label>
        <input type="password"  name = "password" onChange={onChangeUser} placeholder="Enter Password" id="psw" required/>

        
        <button type="submit"  className="loginbtn">Login</button>

 
    </div>

    <div className="container register">
        <p>Don't have an account? <a href="./Register">Register</a>.</p>
    </div>
    </form>
    </div>
    )
}
    
export default Login;