import React from "react";
import './register.css'
const Register =()=>{
    return(
        <div>
        <form action="/action_page.php">
    <div className="container">
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>
        <hr/>

        <label htmlFor="username"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="username" id="username" required/>

        <label htmlFor="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" id="psw" required/>

        <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
        <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/>
        <hr/>
        <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

        <button type="submit" className="registerbtn">Register</button>
        <input type="reset" value="Reset"/>

 
    </div>

    <div className="container signin">
        <p>Already have an account? <a href="./Login.html">Sign in</a>.</p>
    </div>
    </form>
    </div>
    )
}
    
export default Register;